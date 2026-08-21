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
  Zap, Landmark
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
  { value: '36', label: 'HOURS', detail: 'NON-STOP BUILDING', icon: Users },
  { value: '₹5L+', label: 'PRIZE POOL', detail: 'EXCITING REWARDS', icon: Trophy },
  { value: 'MULTIPLE', label: 'TRACKS', detail: 'SOLVE REAL-WORLD PROBLEMS', icon: Code2 },
  { value: 'DEHRADUN', label: 'UTTARAKHAND', detail: 'INDIA', icon: MapPin },
]


const trackData = [
  { n: '01', t: 'AI / ML', d: 'Build intelligent systems that learn, predict and automate the future.', icon: Brain },
  { n: '02', t: 'WEB & APP', d: 'Create powerful web and mobile experiences that solve real problems.', icon: Code2 },
  { n: '03', t: 'IOT & ROBOTICS', d: 'Connect devices. Automate tasks. Build the smart world of tomorrow.', icon: Cpu },
  { n: '04', t: 'CYBERSECURITY', d: 'Protect systems. Hack ethically. Build a safer digital world.', icon: Shield },
  { n: '05', t: 'FINTECH', d: 'Redefine finance with innovation, security and inclusive solutions.', icon: Zap },
  { n: '06', t: 'OPEN INNOVATION', d: 'Think beyond boundaries. Explore interdisciplinary and unconventional ideas.', icon: Lightbulb },
]

const whyJoin = [
  { t: 'LEARN & GROW', d: 'Work, learn and grow with like-minded innovators.', icon: GraduationCap },
  { t: 'MENTOR CONNECT', d: 'Get guidance from industry experts and mentors.', icon: Users },
  { t: 'AMAZING SWAG', d: 'Exciting goodies and certificates for all participants.', icon: Gift },
  { t: 'BUILD YOUR NETWORK', d: 'Connect with top talent, recruiters and tech communities.', icon: Globe },
]

const prizes = [
  { rank: '01', title: 'WINNER', amount: '₹65,000', color: '#FFD700' },
  { rank: '02', title: 'RUNNER UP', amount: '₹50,000', color: '#C0C0C0' },
  { rank: '03', title: '2ND RUNNER UP', amount: '₹30,000', color: '#CD7F32' },
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
            <>
              <div key={l} className="hp-cd-unit">
                <span className="hp-cd-num">{String(v).padStart(2, '0')}</span>
                <span className="hp-cd-label">{l}</span>
              </div>
              {i < 3 && <span className="hp-cd-colon">:</span>}
            </>
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
            <small>DEHRADUN<br />INDIA</small><small>36<br />HOURS</small>
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
          <p className="eyebrow">Tulas University presents</p>
          <h1>HACK<br />THE<br /><span className="hero-h1-gradient">FUTURE</span></h1>
          <div className="hero-tagline-row">
            <p className="tagline">36 HOURS. ONE FUTURE. <b>BUILD IT.</b></p>
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
          <span className="status-sub">Be part of<br />the future</span>
        </aside>
        {/* scroll-cue removed */}
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
            Hack the Future 3.0 is a 36-hour national level hackathon organized by Tulas University, Dehradun.
            It brings together young innovators, developers, designers and problem solvers to build impactful
            solutions for real-world challenges.<br />Code. Collaborate. Create Impact.
          </p>
          <p>This is your time.<br />This is <span className="purple-text">your future.</span></p>
          <a className="button button-outline about-know-more" href="/about">Know more about <strong>→</strong></a>
        </div>
        <img
          className="about-image-full"
          src={homeAboutImg}
          alt="Tula's University campus and students hacking at Hack The Future 3.0"
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
            <strong>₹65,000</strong>
          </div>
          <div className="hp-pz-chip hp-pz-chip--silver">
            <span className="hp-pz-chip-rank">02</span>
            <div className="hp-pz-chip-info"><b>RUNNER UP</b><small>2nd Place</small></div>
            <strong>₹50,000</strong>
          </div>
          <div className="hp-pz-chip hp-pz-chip--bronze">
            <span className="hp-pz-chip-rank">03</span>
            <div className="hp-pz-chip-info"><b>2ND RUNNER UP</b><small>3rd Place</small></div>
            <strong>₹30,000</strong>
          </div>
          <div className="hp-pz-chip-sep"><span>CONSOLATION</span></div>
          <div className="hp-pz-chip hp-pz-chip--con">
            <span className="hp-pz-chip-rank">04</span>
            <div className="hp-pz-chip-info"><b>4TH PLACE</b></div>
            <strong>₹5,000</strong>
          </div>
          <div className="hp-pz-chip hp-pz-chip--con">
            <span className="hp-pz-chip-rank">05</span>
            <div className="hp-pz-chip-info"><b>5TH PLACE</b></div>
            <strong>₹5,000</strong>
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
          <p className="hp-tr-sub">Explore diverse tracks. Solve real-world challenges.<br />Build solutions that <span>create impact</span>.</p>
        </div>

        {/* 3-column grid */}
        <div className="hp-tr-grid">

          {/* Left tracks */}
          <div className="hp-tr-col">
            {trackData.slice(0, 3).map(({ n, t, d, icon: Icon }) => (
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
            {trackData.slice(3, 6).map(({ n, t, d, icon: Icon }) => (
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
            <p className="hp-judges-soon-title">Judges Revealing Soon</p>
            <p className="hp-judges-soon-sub">Our panel of industry experts will be announced soon. Stay tuned!</p>
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
              <p className="hp-spon-tagline">500+ innovators. 36 hours. Your brand front and center.</p>
            </div>
            <a className="hp-spon-cta" href="/contact">
              Become a Sponsor <strong>→</strong>
            </a>
          </div>

          {/* Reach stats */}
          <div className="hp-spon-stats">
            {[
              { v: '500+', l: 'Student Innovators' },
              { v: '36', l: 'Hours of Visibility' },
              { v: '6', l: 'Tech Tracks' },
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


      {/* ═══════════ WHY PARTICIPATE ═══════════ */}
      <section className="section hp-why">
        <p className="eyebrow">06 / Why Participate?</p>
        <div className="hp-why-grid">
          {whyJoin.map(({ t, d, icon: I }) => (
            <article key={t} className="hp-why-card">
              <I size={24} /><b>{t}</b><small>{d}</small>
            </article>
          ))}
          <div className="hp-why-mascot"><img src={mascot} alt="HTF Mascot" /></div>
        </div>
      </section>

      {/* ═══════════ PRE-FOOTER CTA ═══════════ */}
      <section className="hp-prefooter-cta" id="register">
        {/* Decorative dots */}
        <span className="hp-pfc-dot hp-pfc-dot--tl" aria-hidden="true" />
        <span className="hp-pfc-dot hp-pfc-dot--tr" aria-hidden="true" />
        <span className="hp-pfc-dot hp-pfc-dot--br" aria-hidden="true" />
        <span className="hp-pfc-diamond hp-pfc-diamond--1" aria-hidden="true" />
        <span className="hp-pfc-diamond hp-pfc-diamond--2" aria-hidden="true" />

        {/* Left — copy + buttons */}
        <div className="hp-pfc-left">
          <p className="hp-pfc-eyebrow">Ready to Build Impact?</p>
          <h2 className="hp-pfc-heading">
            Are you ready to<br />
            <span>Build the Future?</span>
          </h2>
          <p className="hp-pfc-sub">Ideas are waiting. The future is yours to build.</p>
          <div className="hp-pfc-actions">
            <a className="hp-pfc-btn hp-pfc-btn--filled" href={event.registrationUrl}>
              Register Now <strong>→</strong>
            </a>
            <a className="hp-pfc-btn hp-pfc-btn--outline" href="#about">
              Explore Event
            </a>
          </div>
        </div>

        {/* Center — mascot with glow */}
        <div className="hp-pfc-mascot-wrap">
          <div className="hp-pfc-glow" />
          <img src={emojiMascot} alt="HTF mascot" className="hp-pfc-mascot" />
        </div>

        {/* Right — event info pills */}
        <div className="hp-pfc-info">
          <div className="hp-pfc-info-item">
            <CalendarDays size={20} className="hp-pfc-info-icon" />
            <div>
              <b>{event.dates}</b>
              <span>Hackathon Days</span>
            </div>
          </div>
          <div className="hp-pfc-info-item">
            <Landmark size={20} className="hp-pfc-info-icon" />
            <div>
              <b>Tulas University</b>
              <span>Dehradun</span>
            </div>
          </div>
          <div className="hp-pfc-info-item">
            <Zap size={20} className="hp-pfc-info-icon" />
            <div>
              <b>36 Hours</b>
              <span>Non-Stop Building</span>
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
            <p>A 36-hour national level hackathon by Tulas University, Dehradun. Build. Innovate. Collaborate. Create Impact.</p>
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
            <a href="/problems">Problem Statements</a>
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
            <a href="#">Team Login</a>
            <a href="#">Updates</a>
            <a href="#">Resources</a>
            <a href="/rules">Code of Conduct</a>
          </div>
          <div className="hp-ft-col">
            <h4>Support</h4>
            <a href="/faq">FAQs</a>
            <a href="/contact">Contact Us</a>
            <a href="#">Report an Issue</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
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
          <span>© 2026 Hack The Future 3.0 &nbsp;|&nbsp; Tula's University, Dehradun. All rights reserved.</span>
          <span className="hp-ft-heart">Built with passion for innovators <Heart size={14} /></span>
        </div>
      </footer>
    </main>
  )
}
