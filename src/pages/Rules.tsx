import { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {
  UserCheck, Users, Upload, Trophy, Shield,
  CheckCircle2, ChevronDown, ArrowUpRight, Info, Home,
} from 'lucide-react'
import mascot from '../../Mascots Variations/Rules.png'

/* ── Rules data ── */
const sections = [
  {
    id: 'eligibility', num: '01', title: 'ELIGIBILITY',
    subtitle: 'Who can participate in HTF 3.0.',
    icon: UserCheck,
    points: [
      'Open to all currently enrolled college / university students.',
      'Participants must be from recognized colleges or universities in India.',
      'All domains and streams are welcome — CS, ECE, MBA, Design and more.',
      'Participants must carry a valid college ID card at all times.',
      'Students from any year (1st to final year) are eligible.',
      'International students studying in Indian institutions are welcome.',
    ],
  },
  {
    id: 'team', num: '02', title: 'TEAM',
    subtitle: 'Team size, composition and collaboration rules.',
    icon: Users,
    points: [
      'Team size: 2–5 members per team.',
      'Solo participation is not permitted — minimum 2 members required.',
      'Cross-college teams are fully permitted and encouraged.',
      'Teams are encouraged to bring diverse skills: development, design, AI, product, business.',
      'Each team must designate one team leader for official communication.',
      'A participant cannot be a member of more than one team.',
      'All team members must be individually registered on the portal.',
    ],
  },
  {
    id: 'submission', num: '03', title: 'SUBMISSION',
    subtitle: 'How and what to submit before the deadline.',
    icon: Upload,
    points: [
      'Projects must be submitted via the official HTF 3.0 submission portal.',
      'Submission deadline: Day 2, 11:00 AM sharp — no extensions will be given.',
      'Code must be pushed to a public GitHub repository with a clear commit history.',
      'A demo video of maximum 3 minutes is required with every submission.',
      'A detailed README / project documentation is mandatory.',
      'No late submissions will be accepted under any circumstances whatsoever.',
    ],
  },
  {
    id: 'judging', num: '04', title: 'JUDGING',
    subtitle: 'Evaluation criteria and judging process.',
    icon: Trophy,
    points: [
      'Innovation & Creativity — 25% of the total score.',
      'Technical Complexity & Implementation Quality — 25%.',
      'Real-world Impact & Feasibility of the solution — 25%.',
      'Presentation, Communication & Demo clarity — 25%.',
      'Evaluation happens in two rounds: preliminary shortlisting and final judging.',
      'All judges\' decisions are final, binding and cannot be appealed.',
      'Intellectual property of submitted projects remains with the participants.',
    ],
  },
  {
    id: 'conduct', num: '05', title: 'CODE OF CONDUCT',
    subtitle: 'Fair play, respect and expected behaviour.',
    icon: Shield,
    points: [
      'Respect all participants, mentors, organizers, judges, volunteers and venue staff.',
      'Carry your valid college ID card and official participant badge at all times.',
      'Zero tolerance for plagiarism — all work must be original, built during the hackathon.',
      'Do not use unfair means (pre-built code without disclosure, copying) during the hackathon.',
      'Harassment, discrimination or inappropriate behaviour of any kind will not be tolerated.',
      'Non-vegetarian food and alcohol are strictly NOT allowed inside the venue.',
      'Do not consume alcohol, drugs, cigarettes or any prohibited substances at or near the venue.',
      'Do not leave the campus or venue without prior permission from organizers.',
      'Maintain cleanliness and professional discipline at the venue at all times.',
      'Do not sleep in restricted areas (labs, corridors) — use designated rest areas only.',
      'Do not miss submission timelines; late entries will not be entertained.',
      'Any violation of this code may result in immediate disqualification without prior notice.',
    ],
  },
]

export function RulesPage() {
  const [active, setActive] = useState('eligibility')

  const activeSection = sections.find(s => s.id === active)!

  return (
    <main className="rl-page">
      <Header />

      {/* Breadcrumb */}
      <nav className="rl-breadcrumb" aria-label="breadcrumb">
        <Home size={12} />
        <span>HOME</span>
        <span className="rl-bc-sep">/</span>
        <span className="rl-bc-active">RULES &amp; GUIDELINES</span>
      </nav>

      {/* ── Hero ── */}
      <section className="rl-hero">
        {/* Watermark */}
        <span className="rl-watermark" aria-hidden="true">07</span>

        <div className="rl-hero-copy">
          <p className="rl-label">07 /</p>
          <h1>
            KNOW THE GAME.<br />
            <span className="rl-purple">BUILD WITHIN IT.</span>
          </h1>
          <div className="rl-h1-line" />
          <p className="rl-hero-sub">
            Read the rules carefully. They ensure a fair,<br />
            safe and amazing experience for everyone.
          </p>
        </div>

        <div className="rl-hero-visual">
          <img src={mascot} alt="HTF mascot" className="rl-hero-mascot" />
          <span className="rl-deco-plus rl-deco-plus-1">+</span>
          <span className="rl-deco-plus rl-deco-plus-2">+</span>
        </div>
      </section>

      {/* ── Tab navigation ── */}
      <div className="rl-tabs" role="tablist" aria-label="Rules sections">
        {sections.map(({ id, title, icon: Icon }) => (
          <button
            key={id}
            role="tab"
            aria-selected={active === id}
            className={`rl-tab${active === id ? ' rl-tab--active' : ''}`}
            onClick={() => setActive(id)}
          >
            <Icon size={17} strokeWidth={1.8} />
            {title}
          </button>
        ))}
      </div>

      {/* ── Main content + sidebar ── */}
      <div className="rl-body">
        <div className="rl-content">
          {/* Active (expanded) section */}
          <div className="rl-section-active">
            <div className="rl-section-header">
              <span className="rl-sec-num">{activeSection.num}</span>
              <div>
                <h2>{activeSection.title}</h2>
                <p className="rl-sec-sub">{activeSection.subtitle}</p>
              </div>
              <div className="rl-sec-illus" aria-hidden="true">
                <activeSection.icon size={56} strokeWidth={0.9} />
              </div>
            </div>
            <ul className="rl-points">
              {activeSection.points.map((pt, i) => (
                <li key={i}>
                  <CheckCircle2 size={17} strokeWidth={2} />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Collapsed accordion for remaining sections */}
          {sections.filter(s => s.id !== active).map(({ id, title, subtitle, icon: Icon }) => (
            <button
              key={id}
              className="rl-accordion"
              onClick={() => setActive(id)}
              aria-expanded={false}
            >
              <div className="rl-acc-icon"><Icon size={20} strokeWidth={1.6} /></div>
              <div className="rl-acc-text">
                <strong>{title}</strong>
                <span>{subtitle}</span>
              </div>
              <ChevronDown size={18} className="rl-acc-chevron" />
            </button>
          ))}
        </div>

        {/* ── Right sidebar ── */}
        <aside className="rl-sidebar">
          <div className="rl-quicknav">
            <p className="rl-qn-label">QUICK NAVIGATION</p>
            {sections.map(({ id, num, title }) => (
              <button
                key={id}
                className={`rl-qn-item${active === id ? ' rl-qn-item--active' : ''}`}
                onClick={() => setActive(id)}
              >
                <span className="rl-qn-num">{num}</span>
                <span>{title.replace('CODE OF ', 'Code of ')
                  .replace('ELIGIBILITY', 'Eligibility')
                  .replace('TEAM', 'Team')
                  .replace('SUBMISSION', 'Submission')
                  .replace('JUDGING', 'Judging')}</span>
              </button>
            ))}
          </div>

          <div className="rl-doubt-box">
            <div className="rl-doubt-icon">?</div>
            <strong>Have a doubt?</strong>
            <p>Check our FAQ section or reach out to us.</p>
            <a href="/faq" className="rl-doubt-btn">
              VIEW FAQ <ArrowUpRight size={14} />
            </a>
          </div>
        </aside>
      </div>

      {/* ── Bottom warning bar ── */}
      <div className="rl-warning">
        <div className="rl-warn-left">
          <div className="rl-warn-icon"><Info size={22} /></div>
          <p>
            Breaking the rules may lead to<br />
            <strong>disqualification without prior notice.</strong>
          </p>
        </div>
        <p className="rl-warn-right">Let's build the future,<br />the right way.</p>
        <div className="rl-warn-shield" aria-hidden="true">
          <Shield size={42} strokeWidth={1.2} />
          <span className="rl-warn-dots" />
        </div>
      </div>

      <Footer />
    </main>
  )
}
