import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { event } from '../data/event'
import {
  Lightbulb, Code2, Target, Rocket, Heart,
  Users, Trophy, Clock, Star,
} from 'lucide-react'
import mascotAbout from '../../Mascots Variations/About.png'

/* ── data ── */
const features = [
  { icon: Clock,   title: '30 HOURS NON-STOP',    desc: 'Think. Code. Collaborate. Build without limits.' },
  { icon: Users,   title: '5 SPECIALIZED TRACKS',  desc: 'AI/ML, Cybersecurity, Robotics, Social Impact and Open Innovation.' },
  { icon: Trophy,  title: 'REAL-WORLD IMPACT',     desc: 'Build solutions that create meaningful change and product potential.' },
  { icon: Star,    title: 'LEARN. GROW. NETWORK.', desc: 'Mentorship from IITs, NIT, industry leaders and startup founders.' },
]

const values = [
  { icon: Lightbulb, title: 'INNOVATION',    desc: 'We encourage bold ideas and original thinking.' },
  { icon: Code2,     title: 'COLLABORATION', desc: 'Great things are built when we build together.' },
  { icon: Target,    title: 'IMPACT',        desc: 'We build with purpose to solve real-world problems.' },
  { icon: Rocket,    title: 'GROWTH',        desc: 'Every challenge is a chance to level up your skills.' },
  { icon: Heart,     title: 'COMMUNITY',     desc: 'A supportive community that inspires and uplifts.' },
]

const glance = [
  { icon: Clock,  value: '30',   label: 'HOURS' },
  { icon: Code2,  value: '5',    label: 'TRACKS' },
  { icon: Users,  value: '500+', label: 'PARTICIPANTS' },
  { icon: Trophy, value: '₹5L+', label: 'PRIZE POOL' },
]

/* ── component ── */
export function AboutPage() {
  return (
    <main className="ab-page">
      <Header />

      {/* Breadcrumb */}
      <nav className="ab-breadcrumb">
        <span className="ab-bc-dot" />
        <span>THE EVENT</span>
        <span className="ab-bc-sep">/</span>
        <span>ABOUT HACK THE FUTURE</span>
      </nav>

      {/* ── Hero ── */}
      <section className="ab-hero">
        {/* Left: copy */}
        <div className="ab-hero-copy">
          <p className="eyebrow">01 / About</p>
          <h1>
            WHY WE<br />BUILD<br />
            THE <span className="ab-purple">FUTURE.</span>
          </h1>
          <div className="ab-h1-line" />
          <p>
            Hack the Future 3.0 is a national-level hackathon organized by
            <strong> Tulas ACM Student Chapter</strong>, Tulas University, Dehradun.
            This edition's theme is <em>Project to Product</em> — encouraging students to
            move beyond academic projects and develop solutions with the potential to become
            meaningful, scalable and user-focused products.
          </p>
          <p className="ab-hero-closing">
            PROBLEM → IDEA → PROJECT → PROTOTYPE →<br />
            <em>PRODUCT → PITCH</em>
          </p>
          <a href={event.registrationUrl} className="button button-outline ab-cta">
            Register Now <strong>→</strong>
          </a>
        </div>

        {/* Right: mascot visual */}
        <div className="ab-hero-visual">
          {/* decorative floating frames */}
          <div className="ab-deco ab-deco-1"><Code2 size={20} strokeWidth={1.5} /></div>
          <div className="ab-deco ab-deco-2" />
          <div className="ab-deco ab-deco-3" />
          {/* glow */}
          <div className="ab-mascot-glow" />
          {/* mascot */}
          <img
            src={mascotAbout}
            className="ab-hero-mascot"
            alt="HTF mascot sitting on rocks with a tablet"
          />
          {/* dot grid top-right */}
          <div className="ab-hero-dots" />
        </div>
      </section>

      {/* ── Features bar ── */}
      <section className="ab-features">
        {features.map(({ icon: Icon, title, desc }) => (
          <div className="ab-feat" key={title}>
            <div className="ab-feat-icon"><Icon size={26} strokeWidth={1.5} /></div>
            <div>
              <strong>{title}</strong>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── Values ── */}
      <section className="ab-values-wrap">
        <div className="ab-values-inner section">
          <div className="ab-values-left">
            <p className="eyebrow">02 / Our Values</p>
            <div className="ab-val-grid">
              {values.map(({ icon: Icon, title, desc }) => (
                <article className="ab-val" key={title}>
                  <Icon size={30} strokeWidth={1.4} />
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="ab-glance">
            <p className="eyebrow ab-glance-ey">AT A GLANCE</p>
            <div className="ab-glance-grid">
              {glance.map(({ icon: Icon, value, label }) => (
                <div className="ab-glance-stat" key={label}>
                  <Icon size={22} strokeWidth={1.5} />
                  <div><b>{value}</b><span>{label}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
