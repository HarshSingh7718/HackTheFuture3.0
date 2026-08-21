import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {
  Brain, Code2, Shield, Cpu, Zap, Lightbulb,
  ArrowRight, Home, Flag,
} from 'lucide-react'
import mascot from '../../Mascots Variations/Tracks.png'

/* ── Track data ── */
const tracks = [
  {
    num: '01', title: 'AI / MACHINE LEARNING',
    desc: 'Build intelligent solutions using machine learning, deep learning, computer vision, and AI technologies.',
    icon: Brain,
  },
  {
    num: '02', title: 'WEB & APP DEVELOPMENT',
    desc: 'Create next-gen web or mobile applications that solve real-world problems with elegant UX.',
    icon: Code2,
  },
  {
    num: '03', title: 'CYBERSECURITY',
    desc: 'Secure the digital world. Build solutions for threat detection, data protection, and cyber resilience.',
    icon: Shield,
  },
  {
    num: '04', title: 'IOT & ROBOTICS',
    desc: 'Connect devices, build smart systems and automate the future with IoT and robotics innovations.',
    icon: Cpu,
  },
  {
    num: '05', title: 'FINTECH',
    desc: 'Innovate in finance. Build secure, inclusive and intelligent solutions for the future of money.',
    icon: Zap,
  },
  {
    num: '06', title: 'OPEN INNOVATION',
    desc: 'No boundaries. Surprise us with bold, creative and unconventional ideas that stand out.',
    icon: Lightbulb,
  },
]

export function TracksPage() {
  return (
    <main className="tr-page">
      <Header />

      {/* Breadcrumb */}
      <nav className="tr-breadcrumb">
        <Home size={12} />
        <span>HOME</span>
        <span className="tr-bc-sep">/</span>
        <span className="tr-bc-active">TRACKS</span>
      </nav>

      {/* ── Hero ── */}
      <section className="tr-hero">
        <span className="tr-watermark" aria-hidden="true">05</span>

        <div className="tr-hero-copy">
          <p className="tr-label">05 /</p>
          <h1>
            CHOOSE<br />YOUR<br />
            <span className="tr-purple">ARENA.</span>
          </h1>
          <div className="tr-h1-line" />
          <p className="tr-hero-sub">
            Different domains. Infinite possibilities.<br />
            Pick a track that matches your passion<br />
            and build something extraordinary.
          </p>
        </div>

        <div className="tr-hero-visual">
          <img src={mascot} alt="HTF mascot pointing to tracks" className="tr-hero-mascot" />
          {/* Explore badge */}
          <div className="tr-hero-badge">
            <span className="tr-badge-lt">&lt;</span>
            <span>EXPLORE.<br />INNOVATE.<br /><em>IMPACT.</em></span>
            <span className="tr-badge-rt">/&gt;</span>
          </div>
        </div>
      </section>

      {/* ── Track grid ── */}
      <div className="tr-grid-wrap">
        <div className="tr-grid">
          {tracks.map(({ num, title, desc, icon: Icon }) => (
            <Link to="/problems" key={num} className="tr-card">
              {/* Purple left accent line */}
              <div className="tr-card-accent" />

              <div className="tr-card-inner">
                {/* Number */}
                <span className="tr-card-num">{num}</span>

                {/* Icon */}
                <div className="tr-card-icon">
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="tr-card-content">
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </div>

                {/* Arrow */}
                <div className="tr-card-arrow">
                  <ArrowRight size={18} strokeWidth={2} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="tr-cta-bar">
        <div className="tr-cta-left">
          <div className="tr-cta-flag"><Flag size={20} strokeWidth={1.8} /></div>
          <div>
            <p className="tr-cta-q">Not sure which track to choose?</p>
            <p className="tr-cta-hint">You can switch your track until the hacking begins.</p>
          </div>
        </div>
        <Link to="/problems" className="tr-cta-btn">
          SEE PROBLEM STATEMENTS <ArrowRight size={15} />
        </Link>
        <div className="tr-cta-dots" aria-hidden="true" />
      </div>

      <Footer />
    </main>
  )
}
