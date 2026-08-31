import { Header } from './components/Header'
import { event } from './data/event'
import mascot from '../Website Mascot.png'
import homeAboutImg from '../HomeAbout section.png'
import navLogo from '../NavBar Logo.png'
import prizesMascot from '../Mascots Variations/Prize2 (3).png'
import trackMascot from '../Mascots Variations/trackhomepage.png'
import emojiMascot from '../Mascots Variations/Emoji.png'
import { useEffect, useState, useRef } from 'react'

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

/* ── Count-up hook ── */
function useCountUp(target: number, duration = 2200) {
  const [count, setCount] = useState(0)
  const [triggered, setTriggered] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!triggered) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [triggered, target, duration])

  return { count, ref }
}

/* ── format number ₹65,000 ── */
function fmtRs(n: number) {
  return '₹' + n.toLocaleString('en-IN')
}

const stats = [
  { value: '30', label: 'HOURS', detail: 'NON-STOP BUILDING', icon: Users },
  { value: '₹5L+', label: 'PRIZE POOL', detail: 'EXCITING REWARDS', icon: Trophy },
  { value: '5', label: 'TRACKS', detail: 'SOLVE REAL-WORLD PROBLEMS', icon: Code2 },
  { value: 'DEHRADUN', label: 'UTTARAKHAND', detail: 'INDIA', icon: MapPin },
]

const trackData = [
  { n: '01', t: 'AI / ML', d: 'Build intelligent solutions using machine learning, generative AI and data-driven technologies to solve real-world problems.', icon: Brain },
  { n: '02', t: 'CYBERSECURITY', d: 'Innovative solutions focused on digital security, privacy, identity, secure systems and cyber resilience.', icon: Shield },
  { n: '03', t: 'ROBOTICS & AUTOMATION', d: 'Solutions involving robotics, intelligent systems, automation, IoT and smart technologies.', icon: Cpu },
  { n: '04', t: 'SOCIAL IMPACT', d: 'Technology solutions addressing education, healthcare, sustainability, accessibility and public welfare.', icon: Globe },
  { n: '05', t: 'OPEN INNOVATION', d: 'Identify real-world problems and build innovative solutions with strong product and entrepreneurship potential.', icon: Lightbulb },
]

const journeySteps = [
  {
    step: '01',
    phase: 'PHASE 01 // DISCOVERY',
    label: 'DISCOVER & DIAGNOSE',
    tag: 'PROBLEM VALIDATION',
    desc: 'Identify acute, high-impact pain points across healthcare, cybersecurity, public good, or intelligent automation.',
    artifact: 'Problem Thesis',
    icon: Compass,
    accent: '#8b36f7',
    tagBg: 'rgba(139, 54, 247, 0.15)'
  },
  {
    step: '02',
    phase: 'PHASE 02 // ARCHITECTURE',
    label: 'ARCHITECT & IDEATE',
    tag: 'SOLUTION BLUEPRINT',
    desc: 'Formulate end-to-end system architectures, workflow wireframes, and technology choices engineered for real-world adoption.',
    artifact: 'Solution Architecture',
    icon: Lightbulb,
    accent: '#38bdf8',
    tagBg: 'rgba(56, 189, 248, 0.15)'
  },
  {
    step: '03',
    phase: 'PHASE 03 // 30-HR SPRINT',
    label: 'CODE & PROTOTYPE',
    tag: 'FULL-STACK SPRINT',
    desc: '30 hours of continuous building, API orchestration, deep learning pipelines, hardware integration, and test harness execution.',
    artifact: 'Functional MVP',
    icon: Code2,
    accent: '#a855f7',
    tagBg: 'rgba(168, 85, 247, 0.15)'
  },
  {
    step: '04',
    phase: 'PHASE 04 // VALIDATION',
    label: 'VALIDATE & STRESS-TEST',
    tag: 'BENCHMARKING',
    desc: 'Stress-test performance metrics with domain mentors, simulated real-user traffic, and rigorous feasibility checkpoints.',
    artifact: 'Validation Metrics',
    icon: CheckCircle2,
    accent: '#10b981',
    tagBg: 'rgba(16, 185, 129, 0.15)'
  },
  {
    step: '05',
    phase: 'PHASE 05 // PACKAGING',
    label: 'PRODUCTIZE & REFINE',
    tag: 'MARKET READINESS',
    desc: 'Refine UI/UX polish, security compliance, unit economics, and cloud deployment pipelines with an authentic founder perspective.',
    artifact: 'Production Release',
    icon: Layers,
    accent: '#f59e0b',
    tagBg: 'rgba(245, 158, 11, 0.15)'
  },
  {
    step: '06',
    phase: 'PHASE 06 // FINALE',
    label: 'PITCH & INCUBATE',
    tag: 'INVESTOR DEMO',
    desc: 'Pitch live before IIT/NIT directors, founders, and venture scouts to unlock ₹1,65,000+ cash and ₹1,20,000 incubation support.',
    artifact: 'Venture Incubation',
    icon: Trophy,
    accent: '#ec4899',
    tagBg: 'rgba(236, 72, 153, 0.15)'
  },
]

const mentorPillars = [
  {
    title: 'IIT, NIT & Academic Pioneers',
    role: 'Deep Tech & Computational Rigor',
    desc: 'Guidance on robust algorithmic complexity, systems architecture, hardware/IoT, and research depth.',
    icon: GraduationCap,
    tag: 'TECHNICAL RIGOR'
  },
  {
    title: 'Startup Founders & Angels',
    role: 'Product-Market Fit & Viability',
    desc: 'Actionable mentorship on unit economics, user acquisition loops, and pitching to investors.',
    icon: Briefcase,
    tag: 'VENTURE STRATEGY'
  },
  {
    title: 'Senior Product & UX Architects',
    role: 'Design Systems & Usability',
    desc: 'Refining developer experiences, interface polish, and converting raw code into intuitive products.',
    icon: Layers,
    tag: 'PRODUCT EXCELLENCE'
  },
  {
    title: 'AI & Cloud Infrastructure Leads',
    role: 'GenAI & Cloud Scalability',
    desc: 'Production-ready LLM pipelines, low-latency APIs, database schema tuning, and cyber resilience.',
    icon: Cpu,
    tag: 'CLOUD ARCHITECTURE'
  },
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

export default function App() {
  return (
    <main id="top">
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
        <div className="hero-number" aria-hidden="true">03</div>
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
        {stats.map(({ value, label, detail, icon: I }) => (
          <article key={label}><I aria-hidden="true" /><div><b>{value}</b><strong>{label}</strong><small>{detail}</small></div></article>
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
          <div className="hp-pz-pool-num">₹5,00,000<span>+</span></div>
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

        {/* 3-column grid */}
        <div className="hp-tr-grid">
          {/* Left tracks */}
          <div className="hp-tr-col">
            {trackData.slice(0, 2).map(({ n, t, d, icon: Icon }) => (
              <a key={n} className="hp-tr-card" href="/tracks">
                <div className="hp-tr-card-icon"><Icon size={20} /></div>
                <div className="hp-tr-card-body">
                  <span className="hp-tr-card-num">{n}</span>
                  <b className="hp-tr-card-title">{t}</b>
                  <p className="hp-tr-card-desc">{d}</p>
                  <span className="hp-tr-card-arrow">→</span>
                </div>
              </a>
            ))}
          </div>

          {/* Center mascot */}
          <div className="hp-tr-center">
            <div className="hp-tr-glow-ring" />
            <img src={trackMascot} alt="Track mascot" className="hp-tr-mascot" />
          </div>

          {/* Right tracks */}
          <div className="hp-tr-col">
            {trackData.slice(2, 5).map(({ n, t, d, icon: Icon }) => (
              <a key={n} className="hp-tr-card" href="/tracks">
                <div className="hp-tr-card-icon"><Icon size={20} /></div>
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
              { v: '500+', l: 'Student Innovators' },
              { v: '30',   l: 'Hours of Hackathon' },
              { v: '5',    l: 'Tech Tracks' },
              { v: '100%', l: 'Future Builders' },
            ].map(({ v, l }) => (
              <div key={l} className="hp-spon-stat">
                <b>{v}</b><span>{l}</span>
              </div>
            ))}
          </div>

          {/* Tier rows */}
          <div className="hp-spon-tiers-new">
            {[
              { tier: 'PLATINUM', color: '#7c3aed', slots: 2, size: 'lg' },
              { tier: 'GOLD', color: '#D97706', slots: 3, size: 'md' },
              { tier: 'SILVER', color: '#6b7280', slots: 4, size: 'sm' },
            ].map(({ tier, color, slots, size }) => (
              <div key={tier} className="hp-spon-tier-row" style={{ '--tier-color': color } as React.CSSProperties}>
                <span className="hp-stc-badge">{tier}</span>
                <div className="hp-spon-slots-row">
                  {[...Array(slots)].map((_, i) => (
                    <div key={i} className={`hp-spon-logo-box hp-spon-logo-box--${size}`}>
                      <span>YOUR LOGO</span>
                    </div>
                  ))}
                </div>
                <span className="hp-stc-slots">{slots} SLOTS</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ NEXT-GEN JOURNEY PIPELINE ═══════════ */}
      <section className="section hp-journey-next" id="journey">
        <div className="hp-jn-bg-glow" aria-hidden="true" />
        <div className="hp-jn-grid-pattern" aria-hidden="true" />

        {/* Section Header */}
        <div className="hp-jn-header">
          <div className="hp-jn-pill">
            <Compass size={14} className="hp-jn-pill-icon" />
            <span>04 / THE METAMORPHOSIS PIPELINE</span>
          </div>
          <h2 className="hp-jn-heading">
            FROM PROBLEM STATEMENT<br />
            TO <span>MARKET-READY PRODUCT.</span>
          </h2>
          <p className="hp-jn-sub">
            Hack The Future 3.0 isn't just about hacking syntax — it's a structured 6-stage product metamorphosis.
            Turn raw ideas into deployable, venture-scalable solutions.
          </p>

          {/* Interactive Flow Ribbon */}
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

        {/* 6-Stage Cards Matrix */}
        <div className="hp-jn-cards-grid">
          {journeySteps.map(({ step, phase, label, tag, desc, artifact, icon: StepIcon, accent, tagBg }) => (
            <div key={step} className="hp-jn-card" style={{ '--card-accent': accent } as React.CSSProperties}>
              <div className="hp-jn-card-top">
                <div className="hp-jn-icon-wrap" style={{ background: tagBg, borderColor: accent }}>
                  <StepIcon size={22} style={{ color: accent }} />
                </div>
                <div className="hp-jn-phase-wrap">
                  <span className="hp-jn-phase">{phase}</span>
                  <span className="hp-jn-tag">{tag}</span>
                </div>
                <span className="hp-jn-step-badge">{step}</span>
              </div>

              <h3 className="hp-jn-card-title">{label}</h3>
              <p className="hp-jn-card-desc">{desc}</p>

              <div className="hp-jn-card-footer">
                <span className="hp-jn-artifact-label">OUTCOME:</span>
                <span className="hp-jn-artifact-val">
                  <Check size={12} /> {artifact}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Journey Summary Banner */}
        <div className="hp-jn-bottom-banner">
          <div className="hp-jn-bb-left">
            <Rocket size={26} className="hp-jn-bb-icon" />
            <div>
              <b>Are you ready to transform your project into a viable enterprise?</b>
              <span>Round 1 submission is 100% free. Pitch your blueprint before 13 September 2026.</span>
            </div>
          </div>
          <a href={event.registrationUrl} className="hp-jn-bb-btn">
            SUBMIT YOUR PPT NOW <ArrowRight size={16} />
          </a>
        </div>
      </section>

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

        <div className="hp-cg-split">
          {/* Left: VIP Chief Guest Card */}
          <div className="hp-cg-spotlight-card">
            <div className="hp-cg-spotlight-badge">
              <Star size={13} />
              <span>VIP KEYNOTE ADDRESS</span>
            </div>

            <div className="hp-cg-profile-header">
              <div className="hp-cg-avatar-ring">
                <div className="hp-cg-avatar-inner">
                  <Briefcase size={36} />
                </div>
                <span className="hp-cg-verified-badge" title="Confirmed Keynote"><Check size={12} /></span>
              </div>
              <div className="hp-cg-profile-meta">
                <span className="hp-cg-role-tag">CHIEF GUEST — HTF 3.0</span>
                <h3 className="hp-cg-name">Founder, Kiwi Kishan Window</h3>
                <span className="hp-cg-org">Startup &amp; Agri-Tech Innovation Leader</span>
              </div>
            </div>

            <div className="hp-cg-keynote-box">
              <div className="hp-cg-keynote-label">KEYNOTE THEME</div>
              <p className="hp-cg-keynote-quote">
                "From Campus Dorm to Scalable Venture: Building Real-World Value with the Project-to-Product Mindset."
              </p>
            </div>

            <div className="hp-cg-pillars-title">KEYNOTE FOCUS AREAS</div>
            <div className="hp-cg-pillars-grid">
              <div className="hp-cg-pillar-item">
                <Rocket size={15} />
                <span>Zero-to-One Venture Building</span>
              </div>
              <div className="hp-cg-pillar-item">
                <Target size={15} />
                <span>Product-Market Fit &amp; Economics</span>
              </div>
              <div className="hp-cg-pillar-item">
                <TrendingUp size={15} />
                <span>Navigating Real-World Impact</span>
              </div>
              <div className="hp-cg-pillar-item">
                <Flame size={15} />
                <span>Pitching to Angels &amp; VCs</span>
              </div>
            </div>

            <div className="hp-cg-note-bar">
              <ShieldCheck size={16} />
              <span>Full dignitary profile &amp; schedule to be published with Round 1 results.</span>
            </div>
          </div>

          {/* Right: Mentorship & Ecosystem Hub */}
          <div className="hp-cg-mentors-wrap">
            <div className="hp-cg-mentors-top">
              <div>
                <span className="hp-cg-hub-eyebrow">30 HOURS OF 1-ON-1 ADVISORY</span>
                <h3 className="hp-cg-hub-title">THE MENTORSHIP MATRIX</h3>
              </div>
              <div className="hp-cg-stat-pills">
                <span className="hp-cg-spill"><b>15+</b> MENTORS</span>
                <span className="hp-cg-spill"><b>1:1</b> CLINICS</span>
              </div>
            </div>

            <div className="hp-cg-mentors-grid">
              {mentorPillars.map(({ title, role, desc, icon: PIcon, tag }) => (
                <div key={title} className="hp-cg-mentor-box">
                  <div className="hp-cg-mbox-head">
                    <div className="hp-cg-mbox-icon">
                      <PIcon size={20} />
                    </div>
                    <div>
                      <span className="hp-cg-mbox-tag">{tag}</span>
                      <h4 className="hp-cg-mbox-title">{title}</h4>
                      <small className="hp-cg-mbox-role">{role}</small>
                    </div>
                  </div>
                  <p className="hp-cg-mbox-desc">{desc}</p>
                </div>
              ))}
            </div>

            <div className="hp-cg-mentors-footer">
              <GraduationCap size={20} className="hp-cg-mf-icon" />
              <div>
                <b>Direct Exposure to Top Institutions:</b>
                <span>Panel representation from IITs, NIT Jalandhar, JNU New Delhi, and IHFC IIT Delhi.</span>
              </div>
            </div>
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
            <div key={t} className="hp-why-elite-card">
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
            </div>
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
                <a className="hp-pfc-l-btn-primary" href={event.registrationUrl}>
                  REGISTER ON UNSTOP <ArrowUpRight size={18} />
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
              <a href="#" aria-label="GitHub"><GithubIcon /></a>
              <a href="#" aria-label="Discord"><DiscordIcon /></a>
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
            <a href="mailto:hackthefuture@tulas.edu.in">Email Organizers</a>
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


