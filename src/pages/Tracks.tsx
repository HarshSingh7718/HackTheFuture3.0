import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {
  Brain, Shield, Cpu, Lightbulb, Heart,
  ArrowRight, Home, Flag,
} from 'lucide-react'
import mascot from '../../Mascots Variations/Tracks.webp'

/* ── Track data ── */
const tracks = [
  {
    num: '01', title: 'AI & MACHINE LEARNING',
    desc: 'Build intelligent solutions using machine learning, deep learning, generative AI, intelligent automation and data-driven technologies to solve real-world problems.',
    icon: Brain,
  },
  {
    num: '02', title: 'CYBERSECURITY',
    desc: 'Innovative solutions focused on digital security, privacy, identity management, secure systems design and cyber resilience.',
    icon: Shield,
  },
  {
    num: '03', title: 'ROBOTICS & AUTOMATION',
    desc: 'Solutions involving robotics, intelligent systems, automation, IoT integration and smart technologies that connect the physical and digital world.',
    icon: Cpu,
  },
  {
    num: '04', title: 'SOCIAL IMPACT & PUBLIC GOOD',
    desc: 'Technology solutions addressing challenges in society, education, healthcare, sustainability, accessibility and public welfare for meaningful community impact.',
    icon: Heart,
  },
  {
    num: '05', title: 'OPEN INNOVATION',
    desc: 'An open category — identify real-world problems and build innovative solutions with strong product potential, entrepreneurship mindset and scalable impact.',
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
            5 specialized tracks. Real-world problems.<br />
            Build with a product mindset and<br />
            pitch your solution to expert judges.
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
            <a href="#tracks" key={num} className="tr-card">
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
            </a>
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
        <a href="/contact" className="tr-cta-btn">
          REGISTER NOW <ArrowRight size={15} />
        </a>
        <div className="tr-cta-dots" aria-hidden="true" />
      </div>

      <Footer />
    </main>
  )
}
