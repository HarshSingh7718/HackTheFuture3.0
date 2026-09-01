import { Header } from './components/Header'
import { JourneyMap } from './components/JourneyMap'
import { TiltCard } from './components/ui/tilt-card'
import { event } from './data/event'
import mascot from '../Website Mascot.png'
import homeAboutImg from '../HomeAbout section.png'
import navLogo from '../NavBar Logo.png'
import prizesMascot from '../Mascots Variations/Prize2 (3).png'
import trackMascot from '../Mascots Variations/trackhomepage.png'
import emojiMascot from '../Mascots Variations/Emoji.png'
import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLenis } from '@studio-freight/react-lenis'

gsap.registerPlugin(ScrollTrigger, useGSAP)
import {
  CalendarDays, Code2, MapPin, Trophy, Users,
  Brain, Shield, Lightbulb, Cpu, Globe,
  GraduationCap, Gift, Heart, ArrowUpRight,
  Zap, Landmark, Sparkles, Compass, Rocket,
  CheckCircle2, Mic, Target, Award, Briefcase,
  Layers, ArrowRight, Star, TrendingUp, Check, ShieldCheck, Flame, ChevronRight
} from 'lucide-react'

/* ── social SVG icons (not in lucide-react) ── */
const s = 18
const GithubIcon = () => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" /></svg>
const InstagramIcon = () => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
const LinkedinIcon = () => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
const DiscordIcon = () => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" /></svg>
const WhatsappIcon = () => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>

/* ── Animated count-up (fires once when scrolled into view) ── */
function AnimatedCounter({
  to,
  prefix = '',
  suffix = '',
  duration = 2,
  format,
}: {
  to: number
  prefix?: string
  suffix?: string
  duration?: number
  format?: (n: number) => string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState('0')
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const render = (n: number) =>
      setDisplay(format ? format(n) : Math.round(n).toLocaleString('en-IN'))
    render(0)
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const obj = { n: 0 }
          gsap.to(obj, {
            n: to,
            duration,
            ease: 'power2.out',
            onUpdate: () => render(obj.n),
            onComplete: () => render(to),
          })
          io.disconnect()
        }
      },
      { threshold: 0.35 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration, format])

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

type StatItem = {
  label: string
  detail: string
  icon: React.ElementType
  num?: number
  prefix?: string
  suffix?: string
  value?: string
}

const stats: StatItem[] = [
  { num: 30, label: 'HOURS', detail: 'NON-STOP BUILDING', icon: Users },
  { num: 5, prefix: '₹', suffix: 'L+', label: 'PRIZE POOL', detail: 'EXCITING REWARDS', icon: Trophy },
  { num: 5, label: 'TRACKS', detail: 'SOLVE REAL-WORLD PROBLEMS', icon: Code2 },
  { value: 'DEHRADUN', label: 'UTTARAKHAND', detail: 'INDIA', icon: MapPin },
]

const trackData = [
  { n: '01', t: 'AI / ML', d: 'Build intelligent solutions using machine learning, generative AI and data-driven technologies to solve real-world problems.', icon: Brain },
  { n: '02', t: 'CYBERSECURITY', d: 'Innovative solutions focused on digital security, privacy, identity, secure systems and cyber resilience.', icon: Shield },
  { n: '03', t: 'ROBOTICS & AUTOMATION', d: 'Solutions involving robotics, intelligent systems, automation, IoT and smart technologies.', icon: Cpu },
  { n: '04', t: 'SOCIAL IMPACT', d: 'Technology solutions addressing education, healthcare, sustainability, accessibility and public welfare.', icon: Globe },
  { n: '05', t: 'OPEN INNOVATION', d: 'Identify real-world problems and build innovative solutions with strong product and entrepreneurship potential.', icon: Lightbulb },
]


const whyJoin = [
  {
    n: '01',
    t: 'NATIONAL ARENA',
    d: 'Compete directly with 500+ top engineering minds and design thinkers from 100+ premier institutions across India.',
    badge: '100+ COLLEGES',
    icon: Trophy,
    highlight: '₹5L+ Ecosystem Value'
  },
  {
    n: '02',
    t: '₹1,65,000+ CASH POOL',
    d: 'Direct, transparent cash rewards for the top 5 winning teams alongside specialized category awards and goodies.',
    badge: 'DIRECT REWARDS',
    icon: Zap,
    highlight: '₹65K Champion Prize'
  },
  {
    n: '03',
    t: '₹1,20,000 INCUBATION',
    d: 'Top 3 winners gain fast-tracked incubation support to transform their hackathon MVP into an incorporated enterprise.',
    badge: 'FOUNDER LAUNCHPAD',
    icon: Rocket,
    highlight: 'Top 3 Teams Funded'
  },
  {
    n: '04',
    t: '1-ON-1 FOUNDER ADVISORY',
    d: 'Direct round-the-clock mentorship from IIT/NIT researchers, enterprise leaders, and seasoned startup founders.',
    badge: 'ELITE MENTORS',
    icon: Users,
    highlight: 'Round-the-Clock Mentors'
  },
  {
    n: '05',
    t: 'PROJECT TO PRODUCT MVP',
    d: 'Graduate beyond throwaway code. Walk away with a deployable, verified full-stack product for your career portfolio.',
    badge: 'CAREER ACCELERATION',
    icon: Target,
    highlight: 'Production-Grade Build'
  },
  {
    n: '06',
    t: 'NETWORKING & ECOSYSTEM',
    d: 'Connect with venture scouts, potential co-founders, recruiters, and passionate peers building the next decade of tech.',
    badge: 'ANGEL & TECH NETWORK',
    icon: Sparkles,
    highlight: 'Venture & Peer Network'
  },
]

const prizes = [
  { rank: '01', title: 'WINNER', amount: '₹65,000', color: '#FFD700' },
  { rank: '02', title: 'RUNNER UP', amount: '₹45,000', color: '#C0C0C0' },
  { rank: '03', title: '2ND RUNNER UP', amount: '₹35,000', color: '#CD7F32' },
]

/* ── CountdownBand component ── */
function CountdownBand() {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })

  useEffect(() => {
    const target = new Date('2026-09-25T09:00:00+05:30').getTime()
    const tick = () => {
      const diff = target - Date.now()
      if (diff <= 0) { setTime({ days: 0, hours: 0, mins: 0, secs: 0 }); return }
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { v: time.days, l: 'DAYS' },
    { v: time.hours, l: 'HRS' },
    { v: time.mins, l: 'MIN' },
    { v: time.secs, l: 'SEC' },
  ]

  return (
    <div className="hp-cd">
      <div className="hp-cd-box">
        <div className="hp-cd-meta">
          <span className="hp-cd-eyebrow">HACKATHON BEGINS IN</span>
          <span className="hp-cd-date">25 – 26 SEP 2026 · DEHRADUN</span>
        </div>
        <div className="hp-cd-units">
          {units.map(({ v, l }, i) => (
            <div key={l} style={{ display: 'contents' }}>
              <div className="hp-cd-unit">
                <span className="hp-cd-num">{String(v).padStart(2, '0')}</span>
                <span className="hp-cd-label">{l}</span>
              </div>
              {i < 3 && <span className="hp-cd-colon">:</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── component ── */

/* Every element the reveal system may hide — used as a safety net: if GSAP
   setup throws, we force all of these back to fully visible so the page can
   never render blank sections. */
const HOME_REVEAL_SELECTORS = '.stats article, .about > div > *, .about-image-full, .hp-cd-box, .hp-pz-left > *, .hp-pz-mascot, .hp-pz-chip, .hp-pz-chip-sep, .hp-tr-header > *, .hp-tr-stacked-card, .hp-tr-cta-bar, .hp-js-block-header, .hp-judges-soon, .hp-spon-intro > *, .hp-spon-stat, .hp-cg-header > *, .hp-cg-photo-card, .hp-cg-details-col > *, .hp-wn-header > *, .hp-why-elite-card, .hp-pfc-l-topbar, .hp-pfc-l-left > *, .hp-pfc-l-mascot-wrap, .hp-pfc-l-pill-item, .hp-pfc-l-bb-item, .hp-ft-grid > *'

export default function App() {
  const container = useRef<HTMLElement>(null)

  // Keep ScrollTrigger synced with Lenis smooth scroll so triggers never misfire.
  useLenis(() => ScrollTrigger.update())

  useGSAP(() => {
    try {
      // ── Hero intro timeline ──
      const tl = gsap.timeline()
      tl.from('.eyebrow', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 })
        .from('.hero-copy h1', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.6')
        .from('.hero-tagline-row', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .from('.event-meta span', { y: 20, opacity: 0, stagger: 0.2, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .from('.actions .button', { y: 20, opacity: 0, stagger: 0.2, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .from('.hero-mascot-image', { x: 50, opacity: 0, duration: 1, ease: 'power3.out' }, '-=1.2')
        .from('.status', { scale: 0.8, opacity: 0, duration: 0.8, ease: 'back.out(1.7)' }, '-=1')

      // ── Reveal helpers (fromTo + once = never stuck invisible; clearProps
      //    restores CSS hover transforms so nothing sticks under inline styles) ──
      const reveal = (
        sel: string,
        opts: { y?: number; dur?: number; start?: string; from?: gsap.TweenVars; opacityOnly?: boolean } = {}
      ) => {
        const { y = 44, dur = 0.85, start = 'top 88%', from = {}, opacityOnly = false } = opts
        gsap.utils.toArray<HTMLElement>(sel).forEach((el) => {
          gsap.fromTo(
            el,
            opacityOnly ? { autoAlpha: 0 } : { autoAlpha: 0, y, ...from },
            {
              autoAlpha: 1, y: 0, scale: 1, x: 0, duration: dur, ease: 'power3.out',
              clearProps: opacityOnly ? '' : 'transform',
              scrollTrigger: { trigger: el, start, once: true },
            }
          )
        })
      }
      // __HELPERS2__
      const stagger = (
        containerSel: string,
        childSel: string,
        opts: { y?: number; dur?: number; start?: string; stag?: number; opacityOnly?: boolean } = {}
      ) => {
        const { y = 40, dur = 0.7, start = 'top 84%', stag = 0.12, opacityOnly = false } = opts
        gsap.utils.toArray<HTMLElement>(containerSel).forEach((c) => {
          const kids = Array.from(c.querySelectorAll<HTMLElement>(childSel))
          if (!kids.length) return
          gsap.fromTo(
            kids,
            opacityOnly ? { autoAlpha: 0 } : { autoAlpha: 0, y },
            {
              autoAlpha: 1, y: 0, duration: dur, ease: 'power3.out', stagger: stag,
              clearProps: opacityOnly ? '' : 'transform',
              scrollTrigger: { trigger: c, start, once: true },
            }
          )
        })
      }
      const parallax = (sel: string, yPercent: number) => {
        gsap.utils.toArray<HTMLElement>(sel).forEach((el) => {
          gsap.to(el, {
            yPercent, ease: 'none',
            scrollTrigger: { trigger: el.closest('section') || el, start: 'top bottom', end: 'bottom top', scrub: true },
          })
        })
      }

      // __REVEAL_CALLS__
      // Stats bar
      stagger('.stats', 'article', { y: 30, start: 'top 90%', stag: 0.1 })
      // About
      stagger('.about > div', ':scope > *', { start: 'top 80%' })
      reveal('.about-image-full', { y: 0, from: { scale: 0.94 }, dur: 1.1, start: 'top 82%' })
      // Countdown
      reveal('.hp-cd-box', { y: 24, from: { scale: 0.97 }, dur: 0.8 })
      // Prizes
      stagger('.hp-pz-left', ':scope > *', { start: 'top 80%', stag: 0.1 })
      reveal('.hp-pz-mascot', { y: 20, from: { scale: 0.9 }, dur: 1, start: 'top 82%' })
      stagger('.hp-pz-chips', ':scope > *', { start: 'top 84%', stag: 0.08 })
      // Tracks (stacked cards are position:sticky → fade only, never touch transform)
      stagger('.hp-tr-header', ':scope > *', { start: 'top 84%' })
      reveal('.hp-tr-stacked-card', { opacityOnly: true, start: 'top 90%' })
      reveal('.hp-tr-cta-bar', { y: 30, start: 'top 90%' })
      // Judges + Sponsors
      reveal('.hp-js-block-header', { y: 30, start: 'top 84%' })
      reveal('.hp-judges-soon', { y: 30, from: { scale: 0.98 }, start: 'top 85%' })
      stagger('.hp-spon-intro', ':scope > *', { start: 'top 84%' })
      stagger('.hp-spon-stats', '.hp-spon-stat', { start: 'top 88%', stag: 0.1 })
      // Chief guest (TiltCard photo → fade only)
      stagger('.hp-cg-header', ':scope > *', { start: 'top 84%' })
      reveal('.hp-cg-photo-card', { opacityOnly: true, start: 'top 82%' })
      stagger('.hp-cg-details-col', ':scope > *', { start: 'top 82%', stag: 0.1 })
      // Why participate (TiltCards → fade only)
      stagger('.hp-wn-header', ':scope > *', { start: 'top 84%' })
      stagger('.hp-why-cards-matrix', '.hp-why-elite-card', { opacityOnly: true, start: 'top 85%', stag: 0.08 })
      // Launchpad CTA
      reveal('.hp-pfc-l-topbar', { y: 24, start: 'top 88%' })
      stagger('.hp-pfc-l-left', ':scope > *', { start: 'top 84%' })
      reveal('.hp-pfc-l-mascot-wrap', { opacityOnly: true, start: 'top 84%' })
      stagger('.hp-pfc-l-pills', '.hp-pfc-l-pill-item', { start: 'top 86%', stag: 0.1 })
      stagger('.hp-pfc-l-bottom-bar', '.hp-pfc-l-bb-item', { start: 'top 90%', stag: 0.1 })
      // Footer
      stagger('.hp-ft-grid', ':scope > *', { start: 'top 92%', stag: 0.08 })

      // ── Ambient parallax (decorative layers only, never content) ──
      parallax('.hp-cg-ambient-1', 22)
      parallax('.hp-cg-ambient-2', -22)
      parallax('.hp-wn-glow', 18)
      parallax('.hp-pfc-l-stars', 14)

      // Recompute trigger positions once fonts/images/layout settle.
      ScrollTrigger.refresh()
      window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true })
      if (document.fonts?.ready) document.fonts.ready.then(() => ScrollTrigger.refresh())
      window.setTimeout(() => ScrollTrigger.refresh(), 600)
    } catch (err) {
      console.warn('[home animations] disabled after error:', err)
      gsap.set(HOME_REVEAL_SELECTORS, { clearProps: 'all', autoAlpha: 1 })
    }
  }, { scope: container })

  return (
    <main id="top" ref={container}>
      <Header />

      {/* ═══════════ HERO ═══════════ */}
      <section className="hero grid-bg">
        <aside className="hero-rail" aria-label="Event information and social links">
          <span>HTF<br />/ 03</span><i></i>
          <div className="rail-event">
            <small>25—26</small><small>SEP 2026</small>
            <small>DEHRADUN<br />INDIA</small><small>30<br />HOURS</small>
          </div>
          <div className="rail-social">
            <a href="#contact" aria-label="GitHub"><GithubIcon /></a>
            <a href="#contact" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#contact" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href="#contact" aria-label="Discord"><DiscordIcon /></a>
          </div>
        </aside>
        <div className="hero-dots" aria-hidden="true"></div>
        <div className="hero-number" aria-hidden="true">3.0</div>
        <div className="hero-copy">
          <p className="eyebrow">Tulas ACM Student Chapter presents</p>
          <h1>HACK<br />THE<br /><span className="hero-h1-gradient">FUTURE</span></h1>
          <div className="hero-tagline-row">
            <p className="tagline">PROJECT TO PRODUCT. <b>BUILD IT.</b></p>
            <em className="hero-30">3.0</em>
          </div>
          <div className="event-meta">
            <span><CalendarDays />{event.dates}</span>
            <span><MapPin />{event.location}</span>
          </div>
          <div className="actions">
            <a className="button" href={event.registrationUrl}>Register now <strong>→</strong></a>
            <a className="button button-outline" href="#about">Explore event</a>
          </div>
        </div>
        <img className="hero-mascot hero-mascot-image" src={mascot} alt="Hack the Future mascot holding a laptop and giving a thumbs-up" />
        <aside className="status">
          <div className="status-live-row">
            <span className="status-dot" />
            <small>REGISTRATION</small>
          </div>
          <b className="status-open">OPEN</b>
          <hr className="status-rule" />
          <span className="status-sub">Round 1 Free<br />Be the Future</span>
        </aside>
      </section>

      {/* ═══════════ STATS BAR ═══════════ */}
      <section className="stats">
        {stats.map(({ value, label, detail, icon: I, num, prefix, suffix }) => (
          <article key={label}>
            <I aria-hidden="true" />
            <div>
              <b>
                {num !== undefined
                  ? <AnimatedCounter to={num} prefix={prefix} suffix={suffix} />
                  : value}
              </b>
              <strong>{label}</strong>
              <small>{detail}</small>
            </div>
          </article>
        ))}
      </section>

      {/* ═══════════ ABOUT ═══════════ */}
      <section className="section about" id="about">
        <div>
          <p className="eyebrow">01 / About</p>
          <h2>WHAT IS<br /><span>HACK</span> THE FUTURE?</h2>
          <p>
            Hack the Future 3.0 is a national-level hackathon organized by Tulas ACM Student Chapter, Tulas University, Dehradun.
            This edition's theme is <strong>"Project to Product"</strong> — challenging students to move beyond academic projects
            and build solutions with real product potential, entrepreneurship mindset and scalable impact.
          </p>
          <p>PROBLEM → IDEA → PROJECT → PROTOTYPE → <span className="purple-text">PRODUCT → PITCH</span></p>
          <a className="button button-outline about-know-more" href="/about">Know more about <strong>→</strong></a>
        </div>
        <img
          className="about-image-full"
          src={homeAboutImg}
          alt="Tulas University campus and students hacking at Hack The Future 3.0"
        />
      </section>

      {/* ═══════════ COUNTDOWN BAND ═══════════ */}
      <CountdownBand />

      {/* ═══════════ PRIZES ═══════════ */}
      <section className="section hp-pz" id="prizes">
        <div className="hp-pz-glow" />
        <div className="hp-pz-left">
          <p className="eyebrow">02 / Prizes</p>
          <h2 className="hp-pz-pool-label">TOTAL<br />PRIZE<br />POOL</h2>
          <div className="hp-pz-pool-num"><AnimatedCounter to={500000} prefix="₹" /><span>+</span></div>
          <p className="hp-pz-tagline">Compete. Win. Shine.</p>
          <a className="hp-pz-btn" href="/prizes">View All Prizes <strong>→</strong></a>
        </div>
        <div className="hp-pz-center">
          <img src={prizesMascot} alt="Prize Mascot" className="hp-pz-mascot" />
        </div>
        <div className="hp-pz-chips">
          <div className="hp-pz-chip hp-pz-chip--gold">
            <span className="hp-pz-chip-rank">01</span>
            <div className="hp-pz-chip-info"><b>CHAMPION</b><small>Winner</small></div>
            <div className="hp-pz-chip-prize">
              <strong>₹65,000</strong>
              <span className="hp-pz-chip-inc">+ ₹1,20,000 Incubation</span>
            </div>
          </div>
          <div className="hp-pz-chip hp-pz-chip--silver">
            <span className="hp-pz-chip-rank">02</span>
            <div className="hp-pz-chip-info"><b>RUNNER UP</b><small>2nd Place</small></div>
            <div className="hp-pz-chip-prize">
              <strong>₹45,000</strong>
              <span className="hp-pz-chip-inc">+ ₹1,20,000 Incubation</span>
            </div>
          </div>
          <div className="hp-pz-chip hp-pz-chip--bronze">
            <span className="hp-pz-chip-rank">03</span>
            <div className="hp-pz-chip-info"><b>2ND RUNNER UP</b><small>3rd Place</small></div>
            <div className="hp-pz-chip-prize">
              <strong>₹35,000</strong>
              <span className="hp-pz-chip-inc">+ ₹1,20,000 Incubation</span>
            </div>
          </div>
          <div className="hp-pz-chip-sep"><span>CONSOLATION</span></div>
          <div className="hp-pz-chip hp-pz-chip--con">
            <span className="hp-pz-chip-rank">04</span>
            <div className="hp-pz-chip-info"><b>4TH PLACE</b></div>
            <strong>₹10,000</strong>
          </div>
          <div className="hp-pz-chip hp-pz-chip--con">
            <span className="hp-pz-chip-rank">05</span>
            <div className="hp-pz-chip-info"><b>5TH PLACE</b></div>
            <strong>₹10,000</strong>
          </div>
        </div>
      </section>

      {/* ═══════════ TRACKS ═══════════ */}
      <section className="section hp-tr" id="tracks">
        {/* Header */}
        <div className="hp-tr-header">
          <div className="hp-tr-eyebrow-row">
            <span className="hp-tr-line" />
            <span className="hp-tr-eyebrow">CHOOSE YOUR ARENA</span>
            <span className="hp-tr-line" />
          </div>
          <h2 className="hp-tr-heading">CHOOSE YOUR <span>PATH.</span></h2>
          <p className="hp-tr-sub">5 specialized tracks. Real-world challenges.<br />Build solutions that <span>go from project to product</span>.</p>
        </div>

        {/* 2-column stacked layout */}
        <div className="hp-tr-content">
          {/* Left side: Sticky mascot */}
          <div className="hp-tr-left">
            <div className="hp-tr-center hp-tr-sticky-mascot">
              <div className="hp-tr-glow-ring" />
              <img src={trackMascot} alt="Track mascot" className="hp-tr-mascot" />
            </div>
          </div>

          {/* Right side: Stacked cards */}
          <div className="hp-tr-right">
            {trackData.map(({ n, t, d, icon: Icon }, index) => (
              <a 
                key={n} 
                className="hp-tr-card hp-tr-stacked-card" 
                href="/tracks"
                style={{ '--card-index': index } as React.CSSProperties}
              >
                <div className="hp-tr-card-icon"><Icon size={36} /></div>
                <div className="hp-tr-card-body">
                  <span className="hp-tr-card-num">{n}</span>
                  <b className="hp-tr-card-title">{t}</b>
                  <p className="hp-tr-card-desc">{d}</p>
                  <span className="hp-tr-card-arrow">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="hp-tr-cta-bar">
          <Trophy size={28} className="hp-tr-cta-icon" />
          <div className="hp-tr-cta-text">
            <b>One Hackathon. Infinite Possibilities.</b>
            <span>Choose your track and start building the future.</span>
          </div>
          <a className="hp-tr-cta-btn" href={'/tracks'}>LET'S BUILD →</a>
        </div>
      </section>

      {/* ═══════════ JUDGES + SPONSORS ═══════════ */}
      <section className="section hp-js-combined" id="judges">
        {/* — Judges half — */}
        <div className="hp-js-block">
          <div className="hp-js-block-header">
            <div>
              <p className="eyebrow">03 / Judges &amp; Sponsors</p>
              <h2>MEET THE <span>MINDS.</span></h2>
            </div>
            <div className="hp-judges-badge">
              <span className="hp-reveal-dot" />
              JUDGES REVEALING SOON
            </div>
          </div>
          <div className="hp-judges-soon">
            <div className="hp-judges-soon-icon">?</div>
            <p className="hp-judges-soon-title">Expert Jury Revealing Soon</p>
            <p className="hp-judges-soon-sub">
              Our panel includes experts from <strong>IITs</strong>, <strong>NIT Jalandhar</strong>,
              <strong> Jawaharlal Nehru University, New Delhi</strong>, <strong>IHFC, IIT Delhi</strong>,
              industry, the technology ecosystem and the startup &amp; entrepreneurship ecosystem.
            </p>
          </div>
        </div>

        {/* — Divider — */}
        <div className="hp-js-divider" />

        {/* — Sponsors half — */}
        <div className="hp-js-block hp-spon-block">
          <div className="hp-spon-intro">
            <div>
              <p className="eyebrow">Sponsorship Opportunity</p>
              <h2 className="hp-spon-heading">BACK THE<br /><span>BUILDERS.</span></h2>
              <p className="hp-spon-tagline">500+ innovators. National reach. Your brand at India's next big hackathon.</p>
            </div>
            <a className="hp-spon-cta" href="/contact">
              Become a Sponsor <strong>→</strong>
            </a>
          </div>

          {/* Reach stats */}
          <div className="hp-spon-stats">
            {[
              { to: 500, suffix: '+', l: 'Student Innovators' },
              { to: 30,  suffix: '',  l: 'Hours of Hackathon' },
              { to: 5,   suffix: '',  l: 'Tech Tracks' },
              { to: 100, suffix: '%', l: 'Future Builders' },
            ].map(({ to, suffix, l }) => (
              <div key={l} className="hp-spon-stat">
                <b className="hp-spon-stat-num">
                  <AnimatedCounter to={to} suffix={suffix} />
                </b>
                <span className="hp-spon-stat-label">{l}</span>
              </div>
            ))}
          </div>

          {/* Infinite Marquee */}
          <div className="hp-spon-marquee-container">
            <div className="hp-spon-marquee-track">
              {/* Render two identical blocks for seamless looping */}
              {[0, 1].map((blockIdx) => (
                <div key={blockIdx} className="hp-spon-marquee-content">
                  {[
                    { name: 'Lorem Ipsum', icon: Globe },
                    { name: 'Dolor Sit', icon: Zap },
                    { name: 'Amet Consectetur', icon: Rocket },
                    { name: 'Adipiscing Elit', icon: Landmark },
                    { name: 'Sed Do', icon: Shield },
                    { name: 'Eiusmod', icon: Sparkles },
                  ].map(({ name, icon: Icon }, i) => (
                    <div key={i} className="hp-spon-marquee-logo">
                      <Icon size={32} />
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ MISSION JOURNEY MAP ═══════════ */}
      <JourneyMap />


      {/* ═══════════ NEXT-GEN CHIEF GUEST & MENTORSHIP ═══════════ */}
      <section className="section hp-cg-next" id="chief-guest">
        <div className="hp-cg-ambient-1" aria-hidden="true" />
        <div className="hp-cg-ambient-2" aria-hidden="true" />

        <div className="hp-cg-header">
          <div className="hp-cg-pill">
            <Sparkles size={14} className="hp-cg-pill-icon" />
            <span>05 / KEYNOTE &amp; MENTORSHIP ECOSYSTEM</span>
          </div>
          <h2 className="hp-cg-heading">
            LEARN FROM <span>VISIONARY LEADERS.</span>
          </h2>
          <p className="hp-cg-sub">
            Interact with founders, startup executives, and IIT/NIT researchers dedicated to taking your build from prototype to product.
          </p>
        </div>

        <div className="hp-cg-showcase">
          {/* Card 1: Standalone Photo Card with 3D Tilt Effect */}
          <TiltCard
            className="hp-cg-photo-card"
            tiltLimit={18}
            scale={1.04}
            perspective={1000}
            effect="evade"
          >
            <div className="hp-cg-photo-placeholder">
              <Users size={60} className="hp-cg-photo-icon" />
              <span className="hp-cg-photo-tag">DIGNITARY PHOTO</span>
            </div>
            <div className="hp-cg-photo-overlay">
              <span className="hp-cg-verified-pill"><Check size={13} /> KEYNOTE SPEAKER</span>
            </div>
          </TiltCard>

          {/* Right: Editorial Detail Column */}
          <div className="hp-cg-details-col">
            <div className="hp-cg-profile-header">
              <span className="hp-cg-eyebrow">CHIEF GUEST · HTF 3.0</span>
              <h3 className="hp-cg-speaker-title">Founder, Kiwi Kishan Window</h3>
              <p className="hp-cg-speaker-subtitle">Startup &amp; Agri-Tech Innovation Leader</p>
            </div>

            <div className="hp-cg-keynote-block">
              <span className="hp-cg-section-label">KEYNOTE</span>
              <blockquote className="hp-cg-keynote-quote">
                “From Campus Dorm to Scalable Venture: Building Real-World Value with the Project-to-Product Mindset.”
              </blockquote>
            </div>

            <div className="hp-cg-focus-block">
              <div className="hp-cg-focus-header">
                <span className="hp-cg-section-label">KEYNOTE FOCUS</span>
                <div className="hp-cg-focus-rule" />
              </div>
              <ul className="hp-cg-focus-list">
                <li className="hp-cg-focus-row">
                  <span className="hp-cg-focus-num">01</span>
                  <span className="hp-cg-focus-text">Zero-to-One Venture Building</span>
                </li>
                <li className="hp-cg-focus-row">
                  <span className="hp-cg-focus-num">02</span>
                  <span className="hp-cg-focus-text">Product-Market Fit &amp; Economics</span>
                </li>
                <li className="hp-cg-focus-row">
                  <span className="hp-cg-focus-num">03</span>
                  <span className="hp-cg-focus-text">Navigating Real-World Impact</span>
                </li>
                <li className="hp-cg-focus-row">
                  <span className="hp-cg-focus-num">04</span>
                  <span className="hp-cg-focus-text">Pitching to Angels &amp; VCs</span>
                </li>
              </ul>
            </div>

            <p className="hp-cg-footer-note">
              Profile &amp; schedule announced with Round 1 results.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ NEXT-GEN WHY PARTICIPATE ═══════════ */}
      <section className="section hp-why-next">
        <div className="hp-wn-glow" aria-hidden="true" />
        <div className="hp-wn-header">
          <div className="hp-wn-pill">
            <Award size={14} className="hp-wn-pill-icon" />
            <span>07 / VALUE PROPOSITION</span>
          </div>
          <h2 className="hp-wn-heading">
            EVERY REASON <span>TO BUILD HERE.</span>
          </h2>
          <p className="hp-wn-sub">
            Engineered for high-ambition developers, designers, and aspiring founders seeking meaningful national recognition.
          </p>
        </div>

        <div className="hp-why-cards-matrix">
          {whyJoin.map(({ n, t, d, badge, icon: I, highlight }) => (
            <TiltCard
              key={t}
              className="hp-why-elite-card"
              tiltLimit={14}
              scale={1.03}
              perspective={1000}
              effect="evade"
            >
              <div className="hp-wec-top">
                <div className="hp-wec-icon-badge">
                  <I size={22} />
                </div>
                <span className="hp-wec-num">{n}</span>
              </div>
              <span className="hp-wec-badge">{badge}</span>
              <h3 className="hp-wec-title">{t}</h3>
              <p className="hp-wec-desc">{d}</p>
              <div className="hp-wec-highlight">
                <Sparkles size={13} />
                <span>{highlight}</span>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ═══════════ NEXT-GEN PRE-FOOTER LAUNCHPAD CTA ═══════════ */}
      <section className="hp-pfc-launchpad" id="register">
        <div className="hp-pfc-l-glow-center" aria-hidden="true" />
        <div className="hp-pfc-l-stars" aria-hidden="true" />

        <div className="hp-pfc-l-container">
          {/* Top dynamic status badge */}
          <div className="hp-pfc-l-topbar">
            <span className="hp-pfc-l-live-indicator">
              <span className="hp-pfc-l-dot" />
              ROUND 1 SUBMISSION IS 100% FREE
            </span>
            <span className="hp-pfc-l-meta">DEADLINE: 13 SEPT 2026 · 11:59 PM IST</span>
          </div>

          <div className="hp-pfc-l-body">
            {/* Left copy & CTA actions */}
            <div className="hp-pfc-l-left">
              <span className="hp-pfc-l-eyebrow">YOUR JOURNEY STARTS HERE</span>
              <h2 className="hp-pfc-l-heading">
                Ready to Turn Your Code<br />
                Into a <span>Scalable Product?</span>
              </h2>
              <p className="hp-pfc-l-sub">
                Form your team of 3–5 innovators, choose your track, and claim your place at India's premier product hackathon.
              </p>

              <div className="hp-pfc-l-actions">
                <a className="hp-pfc-l-btn-primary" href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                  <Rocket size={17} />
                  <span>REGISTER ON UNSTOP</span>
                  <ArrowRight size={17} />
                </a>
                <a className="hp-pfc-l-btn-secondary" href="/rules">
                  VIEW GUIDELINES <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* Center Mascot */}
            <div className="hp-pfc-l-mascot-wrap">
              <div className="hp-pfc-l-mascot-aura" />
              <img src={emojiMascot} alt="HTF 3.0 Mascot" className="hp-pfc-l-mascot" />
            </div>

            {/* Right quick facts cards */}
            <div className="hp-pfc-l-pills">
              <div className="hp-pfc-l-pill-item">
                <CalendarDays size={22} className="hp-pfc-l-picon" />
                <div>
                  <strong>25–26 SEP 2026</strong>
                  <span>Offline Grand Finale</span>
                </div>
              </div>
              <div className="hp-pfc-l-pill-item">
                <Landmark size={22} className="hp-pfc-l-picon" />
                <div>
                  <strong>Tula's University</strong>
                  <span>Dehradun, Uttarakhand</span>
                </div>
              </div>
              <div className="hp-pfc-l-pill-item">
                <Trophy size={22} className="hp-pfc-l-picon" />
                <div>
                  <strong>₹5,00,000+</strong>
                  <span>Prizes &amp; Incubation Grant</span>
                </div>
              </div>
              <div className="hp-pfc-l-pill-item">
                <Zap size={22} className="hp-pfc-l-picon" />
                <div>
                  <strong>30 Hours Non-Stop</strong>
                  <span>Hacking &amp; Pitching</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Features Bar Card */}
          <div className="hp-pfc-l-bottom-bar">
            <div className="hp-pfc-l-bb-item">
              <Users size={22} className="hp-pfc-l-bb-icon" />
              <div className="hp-pfc-l-bb-content">
                <strong>3–5 Members per Team</strong>
                <span>Collaborate. Build. Win.</span>
              </div>
            </div>

            <div className="hp-pfc-l-bb-item">
              <Code2 size={22} className="hp-pfc-l-bb-icon" />
              <div className="hp-pfc-l-bb-content">
                <strong>Multiple Tracks</strong>
                <span>Pick your domain of impact</span>
              </div>
            </div>

            <div className="hp-pfc-l-bb-item">
              <Star size={22} className="hp-pfc-l-bb-icon" />
              <div className="hp-pfc-l-bb-content">
                <strong>Mentorship &amp; Guidance</strong>
                <span>Learn from industry experts</span>
              </div>
            </div>

            <div className="hp-pfc-l-bb-item">
              <Rocket size={22} className="hp-pfc-l-bb-icon" />
              <div className="hp-pfc-l-bb-content">
                <strong>Build Real. Solve Big.</strong>
                <span>Create products that matter</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer id="contact" className="hp-ft">
        <div className="hp-ft-grid">
          <div className="hp-ft-brand">
            <div className="hp-ft-logo">
              <img src={navLogo} alt="Hack the Future 3.0" />
            </div>
            <p>A national-level hackathon by Tulas ACM Student Chapter, Tulas University, Dehradun. Theme: Project to Product. Build. Validate. Pitch.</p>
            <div className="hp-ft-social">
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href="#" aria-label="WhatsApp"><WhatsappIcon /></a>
            </div>
          </div>
          <div className="hp-ft-col">
            <h4>Quick Links</h4>
            <a href="/about">About</a>
            <a href="/tracks">Tracks</a>
            <a href="/prizes">Prizes</a>
            <a href="/timeline">Timeline</a>
            <a href="/rules">Rules &amp; Guidelines</a>
            <a href="/faq">FAQ</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="hp-ft-col">
            <h4>Participate</h4>
            <a href={event.registrationUrl}>Register Now</a>
            <a href="/rules">Team Guidelines</a>
            <a href="/tracks">Challenge Tracks</a>
            <a href="/prizes">Prize Breakdown</a>
            <a href="/rules">Code of Conduct</a>
          </div>
          <div className="hp-ft-col">
            <h4>Support</h4>
            <a href="/faq">FAQs</a>
            <a href="/contact">Contact Us</a>
            <a href="/rules">Terms &amp; Policies</a>
            <a href="/rules">Privacy Policy</a>
          </div>
          <div className="hp-ft-news">
            <h4>Stay Updated</h4>
            <p>Subscribe to get the latest updates and announcements.</p>
            <form className="hp-ft-form" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" />
              <button type="submit" aria-label="Subscribe"><ArrowUpRight size={18} /></button>
            </form>
          </div>
        </div>
        <div className="hp-ft-bottom">
          <span>&copy; 2026 Hack The Future 3.0 &nbsp;|&nbsp; Tulas ACM Student Chapter &middot; Tulas University, Dehradun. All rights reserved.</span>
          <span className="hp-ft-heart">Built with passion for innovators <Heart size={14} /></span>
        </div>
      </footer>
    </main>
  )
}


