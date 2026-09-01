import { useEffect, useRef, useState, type CSSProperties } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLenis } from '@studio-freight/react-lenis'
import { Compass, UserPlus, ShieldCheck, ListChecks, Code2, Gavel, Trophy, Check, ArrowRight, Rocket } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { event } from '../data/event'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/* ─────────────────────────────────────────────────────────
   HACK THE FUTURE 3.0 — PARTICIPATION JOURNEY MAP
   A scroll-driven, camera-panned route across an abstract
   innovation map. Narrative follows the actual event flow:
   registration → selection → hackathon → judging → result.
   ───────────────────────────────────────────────────────── */

type Phase = {
  code: string; name: string; title: string; desc: string; outcome: string
  Icon: LucideIcon; color: string; glow: string
  x: number; y: number; side: 'left' | 'right'; motif: string
}

const WORLD_W = 1300
const WORLD_H = 1560

/* Pull-back fits the *content* bounding box (nodes + labels), not the whole
   world — so the overview fills the viewport height (RESULT at the bottom,
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
    code: '01', name: 'REGISTRATION', title: 'Register & Enter',
    desc: 'Participants submit their team details, problem interests, and required registration information to enter the hackathon.',
    outcome: 'Registration Confirmed', Icon: UserPlus, color: '#8b5cf6', glow: '139,92,246',
    x: 230, y: 200, side: 'right', motif: 'intake',
  },
  {
    code: '02', name: 'SCREENING', title: 'Screen & Verify',
    desc: 'Submitted registrations are reviewed for eligibility, completeness, relevance, and basic participation requirements.',
    outcome: 'Eligible Teams Identified', Icon: ShieldCheck, color: '#22d3ee', glow: '34,211,238',
    x: 560, y: 430, side: 'left', motif: 'radar',
  },
  {
    code: '03', name: 'SHORTLISTING', title: 'Shortlist Teams',
    desc: 'Qualified teams are evaluated and shortlisted based on the selection criteria defined for the hackathon.',
    outcome: 'Final Participants Selected', Icon: ListChecks, color: '#6366f1', glow: '99,102,241',
    x: 410, y: 690, side: 'right', motif: 'shortlist',
  },
  {
    code: '04', name: '30-HR SPRINT', title: 'Build & Execute',
    desc: 'Shortlisted teams enter the 30-hour hackathon sprint to ideate, design, build, test, and prepare their working solution.',
    outcome: 'Functional Prototype', Icon: Code2, color: '#10b981', glow: '16,185,129',
    x: 770, y: 910, side: 'left', motif: 'sprint',
  },
  {
    code: '05', name: 'JUDGING', title: 'Present & Evaluate',
    desc: 'Teams present their solution to the judging panel and are evaluated on innovation, technical execution, feasibility, impact, and presentation.',
    outcome: 'Final Evaluation', Icon: Gavel, color: '#f59e0b', glow: '245,158,11',
    x: 600, y: 1140, side: 'right', motif: 'judge',
  },
  {
    code: '06', name: 'RESULT', title: 'Results & Recognition',
    desc: 'Final scores are consolidated, winning teams are announced, and the hackathon journey concludes with results and recognition.',
    outcome: 'Winners Announced', Icon: Trophy, color: '#d946ef', glow: '217,70,239',
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
          <span>04 / THE PARTICIPATION JOURNEY</span>
        </div>
        <h2 className="jm-title">FROM REGISTRATION<br />TO <span>FINAL RESULT.</span></h2>
        <div className="hp-jn-flow-ribbon">
          <span className="hp-jn-ribbon-item">REGISTER</span>
          <span className="hp-jn-ribbon-arrow">→</span>
          <span className="hp-jn-ribbon-item">SCREENING</span>
          <span className="hp-jn-ribbon-arrow">→</span>
          <span className="hp-jn-ribbon-item">SHORTLIST</span>
          <span className="hp-jn-ribbon-arrow">→</span>
          <span className="hp-jn-ribbon-item">30-HR SPRINT</span>
          <span className="hp-jn-ribbon-arrow">→</span>
          <span className="hp-jn-ribbon-item hp-jn-ribbon-highlight">JUDGING</span>
          <span className="hp-jn-ribbon-arrow">→</span>
          <span className="hp-jn-ribbon-item hp-jn-ribbon-highlight">RESULT</span>
        </div>
      </div>

      {mode === 'cinematic' ? <CinematicStage /> : <FlatJourney />}


    </section>
  )
}

/* CSS custom-property style helper (typed) */
function vars(color: string, glow: string, extra?: Record<string, string | number>): CSSProperties {
  return { ['--c']: color, ['--g']: glow, ...(extra || {}) } as CSSProperties
}

/* Per-phase ambient environment — pure decorative DOM, animated via CSS.
   One motif per stage of the participation journey. */
function Motif({ kind }: { kind: string }) {
  switch (kind) {
    case 'intake':
      return (<><i className="jm-in i1" /><i className="jm-in i2" /><i className="jm-in i3" /><i className="jm-gate" /><i className="jm-in-glow" /></>)
    case 'radar':
      return (<><i className="jm-radar-sweep" /><i className="jm-rr r3" /></>)
    case 'shortlist':
      return (<><i className="jm-sl q1" /><i className="jm-sl q2" /><i className="jm-sl q3" /><i className="jm-sl q4" /><i className="jm-sl q5" /><i className="jm-sl-scan" /></>)
    case 'sprint':
      return (<><i className="jm-code c1" /><i className="jm-code c2" /><i className="jm-code c3" /><i className="jm-code c4" /><i className="jm-code c5" /><i className="jm-spark" /></>)
    case 'judge':
      return (<><i className="jm-sig s1" /><i className="jm-sig s2" /><i className="jm-sig s3" /><i className="jm-sig s4" /><i className="jm-sig s5" /><i className="jm-sig s6" /><i className="jm-sig s7" /><i className="jm-jbase" /></>)
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


  // Keep GSAP/ScrollTrigger frame-synced with Lenis smooth scroll
  useLenis(() => ScrollTrigger.update())

  useGSAP(() => {
    const stage = stageRef.current!, world = worldRef.current!, stars = starsRef.current!
    const nodes = gsap.utils.toArray<HTMLElement>('.jm-node', stage)
    const segs = gsap.utils.toArray<SVGPathElement>('.jm-seg', stage)


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
        <Trophy size={15} /> JOURNEY COMPLETE — WINNERS ANNOUNCED
      </div>
    </div>
  )
}
