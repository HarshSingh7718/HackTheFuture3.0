import { useEffect, useRef, useState, type CSSProperties } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLenis } from '@studio-freight/react-lenis'
import { Compass, Network, Code2, Activity, Layers, Trophy, Check, ArrowRight, Rocket } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { event } from '../data/event'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/* ─────────────────────────────────────────────────────────
   HACK THE FUTURE 3.0 — MISSION JOURNEY MAP
   A scroll-driven, camera-panned route across an abstract
   innovation map. Content/wording preserved from the
   original "Problem → Product" pipeline section.
   ───────────────────────────────────────────────────────── */

type Phase = {
  code: string; name: string; title: string; desc: string; outcome: string
  Icon: LucideIcon; color: string; glow: string
  x: number; y: number; side: 'left' | 'right'; motif: string
}

const WORLD_W = 1300
const WORLD_H = 1560

/* Pull-back fits the *content* bounding box (nodes + labels), not the whole
   world — so the overview fills the viewport height (FINALE at the bottom,
   earlier phases stacked up above) instead of floating with dead space. */
const CONTENT_MIN_X = 150
const CONTENT_MAX_X = 1120
const CONTENT_MIN_Y = 150
const CONTENT_MAX_Y = 1420
const CONTENT_W = CONTENT_MAX_X - CONTENT_MIN_X
const CONTENT_H = CONTENT_MAX_Y - CONTENT_MIN_Y
const FIT_CX = (CONTENT_MIN_X + CONTENT_MAX_X) / 2
const FIT_CY = (CONTENT_MIN_Y + CONTENT_MAX_Y) / 2
const PULLBACK_FILL = 0.94   // fraction of the constraining viewport axis to use
const PULLBACK_NODE = 0.78   // label/marker screen-scale at full pull-back (keeps text legible)

const PHASES: Phase[] = [
  {
    code: '01', name: 'DISCOVERY', title: 'Discover & Diagnose',
    desc: 'Identify acute, high-impact pain points across healthcare, cybersecurity, public good, or intelligent automation.',
    outcome: 'Problem Thesis', Icon: Compass, color: '#8b5cf6', glow: '139,92,246',
    x: 230, y: 200, side: 'right', motif: 'radar',
  },
  {
    code: '02', name: 'ARCHITECTURE', title: 'Architect & Ideate',
    desc: 'Formulate end-to-end system architectures, workflow wireframes, and technology choices engineered for real-world adoption.',
    outcome: 'Solution Architecture', Icon: Network, color: '#22d3ee', glow: '34,211,238',
    x: 560, y: 430, side: 'left', motif: 'blueprint',
  },
  {
    code: '03', name: '30-HR SPRINT', title: 'Code & Prototype',
    desc: '30 hours of continuous building, API orchestration, deep learning pipelines, hardware integration, and test harness execution.',
    outcome: 'Functional MVP', Icon: Code2, color: '#6366f1', glow: '99,102,241',
    x: 410, y: 690, side: 'right', motif: 'sprint',
  },
  {
    code: '04', name: 'VALIDATION', title: 'Validate & Stress-Test',
    desc: 'Stress-test performance metrics with domain mentors, simulated real-user traffic, and rigorous feasibility checkpoints.',
    outcome: 'Validation Metrics', Icon: Activity, color: '#10b981', glow: '16,185,129',
    x: 770, y: 910, side: 'left', motif: 'validate',
  },
  {
    code: '05', name: 'PACKAGING', title: 'Productize & Refine',
    desc: 'Refine UI/UX polish, security compliance, unit economics, and cloud deployment pipelines with an authentic founder perspective.',
    outcome: 'Production Release', Icon: Layers, color: '#f59e0b', glow: '245,158,11',
    x: 600, y: 1140, side: 'right', motif: 'package',
  },
  {
    code: '06', name: 'FINALE', title: 'Pitch & Incubate',
    desc: 'Pitch live before IIT/NIT directors, founders, and venture scouts to unlock ₹1,65,000+ cash and ₹1,20,000 incubation support.',
    outcome: 'Venture Incubation', Icon: Trophy, color: '#d946ef', glow: '217,70,239',
    x: 1010, y: 1360, side: 'left', motif: 'finale',
  },
]
/* Smooth cubic S-curve between two checkpoints (vertical tangents = winding road) */
function segPath(a: Phase, b: Phase) {
  const dy = b.y - a.y
  return `M ${a.x} ${a.y} C ${a.x} ${a.y + dy * 0.5}, ${b.x} ${b.y - dy * 0.5}, ${b.x} ${b.y}`
}

/* Camera focus target per phase — nudged toward the content side + down so the
   marker + label + panel read as one centred composition (not marker-only). */
const FOCUS: Array<[number, number]> = PHASES.map((p) => [
  p.x + (p.side === 'right' ? 92 : -92),
  p.y + 46,
])

/* Camera keyframes: [progress, focusX, focusY, scale]. Progress ≥0.86 = fit pull-back.
   No dead hold at the start — travel begins as soon as the section pins. */
const CAM: Array<[number, number, number, number]> = [
  [0.00, FOCUS[0][0], FOCUS[0][1], 1.92],
  [0.16, FOCUS[1][0], FOCUS[1][1], 1.72],
  [0.34, FOCUS[2][0], FOCUS[2][1], 2.00],
  [0.52, FOCUS[3][0], FOCUS[3][1], 1.80],
  [0.70, FOCUS[4][0], FOCUS[4][1], 1.86],
  [0.86, FOCUS[5][0], FOCUS[5][1], 2.04],
]
/* Per-segment path-fill windows (align with pans between checkpoints) */
const FILL: Array<[number, number]> = [
  [0.00, 0.16], [0.16, 0.34], [0.34, 0.52], [0.52, 0.70], [0.70, 0.86],
]
/* Progress at which each checkpoint becomes ACTIVE */
const ACT = [0.0, 0.12, 0.30, 0.48, 0.66, 0.84]
const PULLBACK_AT = 0.86
const COMPLETE_AT = 0.9

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v)
const smooth = (t: number) => t * t * (3 - 2 * t)
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

function prefersReduced() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
function decideMode(): 'cinematic' | 'flat' {
  if (typeof window === 'undefined') return 'flat'
  const wide = window.matchMedia('(min-width: 900px)').matches
  return wide && !prefersReduced() ? 'cinematic' : 'flat'
}

export function JourneyMap() {
  const [mode, setMode] = useState<'cinematic' | 'flat'>(decideMode)

  useEffect(() => {
    const mqW = window.matchMedia('(min-width: 900px)')
    const mqR = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setMode(mqW.matches && !mqR.matches ? 'cinematic' : 'flat')
    mqW.addEventListener('change', update)
    mqR.addEventListener('change', update)
    return () => { mqW.removeEventListener('change', update); mqR.removeEventListener('change', update) }
  }, [])

  return (
    <section className="jm-section" id="journey" data-mode={mode}>
      <div className="jm-intro">
        <div className="hp-jn-pill">
          <Compass size={14} className="hp-jn-pill-icon" />
          <span>04 / THE METAMORPHOSIS PIPELINE</span>
        </div>
        <h2 className="jm-title">FROM PROBLEM STATEMENT<br />TO <span>MARKET-READY PRODUCT.</span></h2>
        <div className="hp-jn-flow-ribbon">
          <span className="hp-jn-ribbon-item">PROBLEM</span>
          <span className="hp-jn-ribbon-arrow">→</span>
          <span className="hp-jn-ribbon-item">IDEA</span>
          <span className="hp-jn-ribbon-arrow">→</span>
          <span className="hp-jn-ribbon-item">PROTOTYPE</span>
          <span className="hp-jn-ribbon-arrow">→</span>
          <span className="hp-jn-ribbon-item">VALIDATE</span>
          <span className="hp-jn-ribbon-arrow">→</span>
          <span className="hp-jn-ribbon-item hp-jn-ribbon-highlight">PRODUCT</span>
          <span className="hp-jn-ribbon-arrow">→</span>
          <span className="hp-jn-ribbon-item hp-jn-ribbon-highlight">PITCH &amp; LAUNCH</span>
        </div>
      </div>

      {mode === 'cinematic' ? <CinematicStage /> : <FlatJourney />}

      <div className="jm-cta-card-wrap">
        <div className="jm-cta-card">
          <div className="jm-cta-l">
            <Rocket size={26} className="jm-cta-ic" />
            <div className="jm-cta-text">
              <h3 className="jm-cta-title">Are you ready to transform your project into a viable enterprise?</h3>
              <p className="jm-cta-desc">Round 1 submission is 100% free. Pitch your blueprint before 13 September 2026.</p>
            </div>
          </div>
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="jm-cta-btn"
          >
            <span>SUBMIT YOUR PPT NOW</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

/* CSS custom-property style helper (typed) */
function vars(color: string, glow: string, extra?: Record<string, string | number>): CSSProperties {
  return { ['--c']: color, ['--g']: glow, ...(extra || {}) } as CSSProperties
}

/* Per-phase ambient environment — pure decorative DOM, animated via CSS */
function Motif({ kind }: { kind: string }) {
  switch (kind) {
    case 'radar':
      return (<><i className="jm-radar-sweep" /><i className="jm-rr r3" /></>)
    case 'blueprint':
      return (<><i className="jm-bp-grid" /><i className="jm-bp-node n1" /><i className="jm-bp-node n2" /><i className="jm-bp-node n3" /><i className="jm-bp-link" /></>)
    case 'sprint':
      return (<><i className="jm-code c1" /><i className="jm-code c2" /><i className="jm-code c3" /><i className="jm-code c4" /><i className="jm-code c5" /><i className="jm-spark" /></>)
    case 'validate':
      return (<><i className="jm-sig s1" /><i className="jm-sig s2" /><i className="jm-sig s3" /><i className="jm-sig s4" /><i className="jm-sig s5" /><i className="jm-sig s6" /><i className="jm-sig s7" /></>)
    case 'package':
      return (<><i className="jm-layer y1" /><i className="jm-layer y2" /><i className="jm-layer y3" /></>)
    case 'finale':
      return (<><i className="jm-beacon b1" /><i className="jm-beacon b2" /><i className="jm-beacon b3" /><i className="jm-halo" /></>)
    default:
      return null
  }
}

function CinematicStage() {
  const stageRef = useRef<HTMLDivElement>(null)
  const worldRef = useRef<HTMLDivElement>(null)
  const starsRef = useRef<HTMLDivElement>(null)
  const countRef = useRef<HTMLSpanElement>(null)
  const nameRef = useRef<HTMLSpanElement>(null)
  const barsRef = useRef<HTMLDivElement>(null)

  // Keep GSAP/ScrollTrigger frame-synced with Lenis smooth scroll
  useLenis(() => ScrollTrigger.update())

  useGSAP(() => {
    const stage = stageRef.current!, world = worldRef.current!, stars = starsRef.current!
    const nodes = gsap.utils.toArray<HTMLElement>('.jm-node', stage)
    const segs = gsap.utils.toArray<SVGPathElement>('.jm-seg', stage)
    const bars = barsRef.current ? (Array.from(barsRef.current.children) as HTMLElement[]) : []

    const segLen = segs.map((s) => {
      const L = s.getTotalLength()
      s.style.strokeDasharray = `${L}`
      s.style.strokeDashoffset = `${L}`
      return L
    })

    let vw = 0, vh = 0, fit = 1
    const measure = () => {
      vw = stage.clientWidth; vh = stage.clientHeight
      fit = Math.min(vw / CONTENT_W, vh / CONTENT_H) * PULLBACK_FILL
    }
    measure()

    const place = (fx: number, fy: number, s: number) => {
      const tx = vw / 2 - fx * s, ty = vh / 2 - fy * s
      world.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${s})`
      stars.style.transform = `translate3d(${tx * 0.12}px, ${ty * 0.12}px, 0)`
    }

    let last = -2
    const render = (p: number) => {
      let fx: number, fy: number, s: number, nodeMul = 1
      if (p >= PULLBACK_AT) {
        const t = smooth(clamp01((p - PULLBACK_AT) / (1 - PULLBACK_AT)))
        fx = lerp(FOCUS[5][0], FIT_CX, t)
        fy = lerp(FOCUS[5][1], FIT_CY, t)
        s = lerp(2.04, fit, t)
        // Relax the counter-scale so labels/markers shrink with the camera on
        // pull-back — but only partway, so the overview text stays readable.
        nodeMul = lerp(1, PULLBACK_NODE, t)
      } else {
        let i = 0
        while (i < CAM.length - 1 && p > CAM[i + 1][0]) i++
        const A = CAM[i], B = CAM[Math.min(i + 1, CAM.length - 1)]
        const t = B[0] === A[0] ? 0 : smooth(clamp01((p - A[0]) / (B[0] - A[0])))
        fx = lerp(A[1], B[1], t); fy = lerp(A[2], B[2], t); s = lerp(A[3], B[3], t)
      }
      place(fx, fy, s)
      const inv = nodeMul / s
      for (const n of nodes) n.style.transform = `translate(-50%, -50%) scale(${inv})`
      for (let k = 0; k < segs.length; k++) {
        const lt = clamp01((p - FILL[k][0]) / (FILL[k][1] - FILL[k][0]))
        segs[k].style.strokeDashoffset = `${segLen[k] * (1 - lt)}`
      }
      let idx = 0
      for (let k = 0; k < ACT.length; k++) if (p >= ACT[k]) idx = k
      const done = p >= COMPLETE_AT
      const key = done ? 99 : idx
      if (key !== last) {
        for (let k = 0; k < nodes.length; k++) {
          nodes[k].classList.toggle('is-completed', done || k < idx)
          nodes[k].classList.toggle('is-active', !done && k === idx)
          nodes[k].classList.toggle('is-upcoming', !done && k > idx)
        }
        const reached = Math.min(idx + 1, 6)
        if (countRef.current) countRef.current.textContent = `${String(reached).padStart(2, '0')} / 06`
        if (nameRef.current) nameRef.current.textContent = done ? 'COMPLETE' : PHASES[idx].name
        for (let k = 0; k < bars.length; k++) bars[k].classList.toggle('on', k < reached)
        stage.style.setProperty('--phase', done ? '#d946ef' : PHASES[idx].color)
        stage.style.setProperty('--phase-glow', done ? '217,70,239' : PHASES[idx].glow)
        last = key
      }
    }

    render(0)
    const st = ScrollTrigger.create({
      trigger: stage, start: 'top top', end: () => '+=' + Math.round(vh * 4.4),
      pin: true, pinSpacing: true, anticipatePin: 1, invalidateOnRefresh: true,
      onRefreshInit: measure,
      onRefresh: (self) => render(self.progress),
      onUpdate: (self) => render(self.progress),
    })
    return () => st.kill()
  }, { scope: stageRef })

  return (
    <div className="jm-stage" ref={stageRef}>
      <div className="jm-stars" ref={starsRef} aria-hidden="true" />

      <div className="jm-world" ref={worldRef}>
        <div className="jm-contours" aria-hidden="true" />

        <svg className="jm-routes" viewBox={`0 0 ${WORLD_W} ${WORLD_H}`} width={WORLD_W} height={WORLD_H} aria-hidden="true">
          <defs>
            {PHASES.slice(0, -1).map((a, i) => {
              const b = PHASES[i + 1]
              return (
                <linearGradient key={i} id={`jmg${i}`} gradientUnits="userSpaceOnUse" x1={a.x} y1={a.y} x2={b.x} y2={b.y}>
                  <stop offset="0%" stopColor={a.color} />
                  <stop offset="100%" stopColor={b.color} />
                </linearGradient>
              )
            })}
            <filter id="jmglow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="7" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          {PHASES.slice(0, -1).map((a, i) => (
            <path key={`b${i}`} className="jm-seg-base" d={segPath(a, PHASES[i + 1])} />
          ))}
          {PHASES.slice(0, -1).map((a, i) => (
            <path key={`s${i}`} className="jm-seg" d={segPath(a, PHASES[i + 1])} stroke={`url(#jmg${i})`} filter="url(#jmglow)" />
          ))}
        </svg>
        {PHASES.map((ph) => (
          <div key={`amb-${ph.code}`} className={`jm-amb jm-amb--${ph.motif}`}
            style={vars(ph.color, ph.glow, { left: ph.x, top: ph.y })} aria-hidden="true">
            <Motif kind={ph.motif} />
          </div>
        ))}

        {PHASES.map((ph) => {
          const Icon = ph.Icon
          return (
            <div key={`node-${ph.code}`} className={`jm-node jm-node--${ph.side} is-upcoming`}
              style={vars(ph.color, ph.glow, { left: ph.x, top: ph.y })}>
              <div className="jm-marker">
                <span className="jm-halo-ring" aria-hidden="true" />
                <span className="jm-dot">
                  <Icon size={19} className="jm-mi" aria-hidden="true" />
                  <Check size={20} className="jm-mc" aria-hidden="true" />
                </span>
              </div>
              <div className="jm-label">
                <span className="jm-code">PHASE {ph.code}</span>
                <span className="jm-name">{ph.name}</span>
                <span className="jm-role">{ph.title}</span>
              </div>
              <div className="jm-panel">
                <p className="jm-desc">{ph.desc}</p>
                <span className="jm-out"><Check size={13} aria-hidden="true" />{ph.outcome}</span>
              </div>
            </div>
          )
        })}
      </div>
      <div className="jm-vignette" aria-hidden="true" />

      <div className="jm-hud" aria-hidden="true">
        <div className="jm-hud-head"><i className="jm-hud-live" />BUILD PROGRESS</div>
        <div className="jm-hud-count"><span ref={countRef}>01 / 06</span></div>
        <div className="jm-hud-bars" ref={barsRef}>
          {PHASES.map((ph) => <b key={`bar-${ph.code}`} style={vars(ph.color, ph.glow)} />)}
        </div>
        <div className="jm-hud-cur">CURRENT PHASE</div>
        <div className="jm-hud-name"><span ref={nameRef}>DISCOVERY</span></div>
      </div>
    </div>
  )
}

function FlatJourney() {
  const rootRef = useRef<HTMLDivElement>(null)
  const railRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const cards = Array.from(root.querySelectorAll<HTMLElement>('.jm-fcard'))
    const rail = railRef.current
    const fill = fillRef.current

    const updateRail = () => {
      if (!rail || cards.length < 2) return
      const firstDot = cards[0].querySelector<HTMLElement>('.jm-fdot')
      const lastDot = cards[cards.length - 1].querySelector<HTMLElement>('.jm-fdot')
      if (!firstDot || !lastDot) return

      const rootRect = root.getBoundingClientRect()
      const firstRect = firstDot.getBoundingClientRect()
      const lastRect = lastDot.getBoundingClientRect()

      const top = (firstRect.top + firstRect.height / 2) - rootRect.top
      const bottom = (lastRect.top + lastRect.height / 2) - rootRect.top
      const height = Math.max(0, bottom - top)

      rail.style.top = `${top}px`
      rail.style.height = `${height}px`
    }

    updateRail()
    window.addEventListener('resize', updateRail)
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(updateRail) : null
    if (ro) ro.observe(root)

    const setFill = (n: number) => {
      if (fill) {
        const frac = n <= 1 ? 0 : Math.min(1, (n - 1) / (cards.length - 1))
        fill.style.height = `${frac * 100}%`
      }
    }

    if (prefersReduced()) {
      cards.forEach((c) => c.classList.add('in'))
      setFill(cards.length)
      return () => {
        window.removeEventListener('resize', updateRail)
        if (ro) ro.disconnect()
      }
    }

    let seen = 0
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        const el = e.target as HTMLElement
        el.classList.add('in')
        io.unobserve(el)
        seen = Math.max(seen, Number(el.dataset.i) + 1)
        setFill(seen)
      }
    }, { threshold: 0.35, rootMargin: '0px 0px -12% 0px' })
    cards.forEach((c) => io.observe(c))

    return () => {
      window.removeEventListener('resize', updateRail)
      if (ro) ro.disconnect()
      io.disconnect()
    }
  }, [])

  return (
    <div className="jm-flat" ref={rootRef}>
      <div className="jm-flat-rail" ref={railRef} aria-hidden="true">
        <div className="jm-flat-fill" ref={fillRef} />
      </div>
      {PHASES.map((ph, i) => {
        const Icon = ph.Icon
        return (
          <article key={ph.code} data-i={i} style={vars(ph.color, ph.glow)}
            className={`jm-fcard jm-fcard--${ph.side}${ph.motif === 'finale' ? ' is-finale' : ''}`}>
            <div className="jm-fnode"><span className="jm-fdot"><Icon size={18} aria-hidden="true" /></span></div>
            <div className="jm-fbody">
              <div className="jm-fhead">
                <span className="jm-fcode">PHASE {ph.code}</span>
                <span className="jm-fname">{ph.name}</span>
              </div>
              <h3 className="jm-ftitle">{ph.title}</h3>
              <p className="jm-fdesc">{ph.desc}</p>
              <span className="jm-fout"><Check size={13} aria-hidden="true" />{ph.outcome}</span>
            </div>
          </article>
        )
      })}
      <div className="jm-flat-end" aria-hidden="true">
        <Trophy size={15} /> MISSION COMPLETE
      </div>
    </div>
  )
}
