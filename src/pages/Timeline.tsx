import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {
  UserPlus, Flag, Code2, Users, Coffee,
  Moon, Upload, Search, Trophy, Clock,
  Home, ArrowUpRight,
} from 'lucide-react'
import mascot from '../../Mascots Variations/Timeline.png'

/* ── Schedule data ── */
const days = [
  {
    day: '01', month: 'SEP', weekday: 'TUESDAY',
    events: [
      { icon: UserPlus, title: 'PARTICIPANT REGISTRATION', desc: 'Check-in, collect your kit and report to the venue.',              time: '08:00 AM', featured: false },
      { icon: Flag,     title: 'INAUGURAL CEREMONY',       desc: 'Welcome address, introductions and Chief Guest session.',          time: '10:30 AM', featured: false },
      { icon: Code2,    title: 'HACKATHON BEGINS',         desc: 'The clock starts — choose your track, ideate and build.', time: '11:00 AM', featured: true  },
      { icon: Users,    title: 'MENTORING SESSIONS',       desc: 'Expert mentors and product validation sessions throughout the day.',time: '02:00 PM', featured: false },
      { icon: Coffee,   title: 'SNACKS & NETWORKING',      desc: 'Recharge, connect and collaborate with fellow builders.',          time: '07:30 PM', featured: false },
      { icon: Moon,     title: 'NIGHT HACKING',            desc: 'Development phase continues. The best ideas come at night.',       time: '09:00 PM', featured: false },
    ],
  },
  {
    day: '18', month: 'SEP', weekday: 'FRIDAY',
    events: [
      { icon: Users,   title: 'MENTOR CHECKPOINTS',    desc: 'Mentor reviews, product feedback and final preparation guidance.',  time: '08:00 AM', featured: false },
      { icon: Upload,  title: 'SUBMISSION DEADLINE',   desc: 'Final project submission — no late entries accepted.',              time: '11:00 AM', featured: false },
      { icon: Search,  title: 'JURY EVALUATION',       desc: 'Projects evaluated by our expert panel from IITs, NITs and industry.',time: '12:00 PM', featured: false },
      { icon: Trophy,  title: 'FINAL PRESENTATIONS',   desc: 'Teams present before the jury — pitch your product and its impact.', time: '02:00 PM', featured: false },
      { icon: Trophy,  title: 'RESULTS & AWARDS',      desc: 'Winners announced, prizes distributed and closing ceremony.',        time: '04:00 PM', featured: true  },
    ],
  },
]

export function TimelinePage() {
  return (
    <main className="tl-page">
      <Header />

      {/* Breadcrumb */}
      <nav className="tl-breadcrumb">
        <Home size={12} />
        <span>HOME</span>
        <span className="tl-bc-sep">/</span>
        <span className="tl-bc-active">TIMELINE</span>
      </nav>

      {/* ── Hero ── */}
      <section className="tl-hero">
        <span className="tl-watermark" aria-hidden="true">07</span>

        <div className="tl-hero-copy">
          <p className="tl-label">07 /</p>
          <h1>
            30 HOURS.<br />
            ONE CONTINUOUS<br />
            <span className="tl-purple">BUILD.</span>
          </h1>
          <div className="tl-h1-line" />
          <p className="tl-hero-sub">
            A non-stop journey of ideas,<br />
            collaboration and innovation.<br />
            From concept to impact.
          </p>
        </div>

        <div className="tl-hero-visual">
          <img src={mascot} alt="HTF mascot with schedule" className="tl-hero-mascot" />
          {/* Dashed path decoration */}
          <svg className="tl-hero-path" viewBox="0 0 300 120" fill="none" aria-hidden="true">
            <path d="M10 60 Q80 10 150 60 Q220 110 290 60" stroke="var(--purple)" strokeWidth="1.5"
              strokeDasharray="6 4" opacity="0.3" />
            <circle cx="10"  cy="60" r="4" fill="var(--purple)" opacity="0.4" />
            <circle cx="150" cy="60" r="4" fill="var(--purple)" opacity="0.4" />
            <circle cx="290" cy="60" r="4" fill="var(--purple)" opacity="0.4" />
          </svg>
        </div>
      </section>

      {/* ── Timeline ── */}
      <div className="tl-body section">
        {days.map(({ day, month, weekday, events }) => (
          <div className="tl-day-group" key={day}>
            {/* Date block */}
            <div className="tl-date">
              <span className="tl-day-num">{day}</span>
              <span className="tl-month">{month}</span>
              <span className="tl-weekday">{weekday}</span>
            </div>

            {/* Events */}
            <div className="tl-events">
              {events.map(({ icon: Icon, title, desc, time, featured }) => (
                <div key={title} className={`tl-event${featured ? ' tl-event--featured' : ''}`}>
                  {/* Spine dot */}
                  <div className="tl-spine-dot" />

                  {/* Icon */}
                  <div className="tl-event-icon">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>

                  {/* Content */}
                  <div className="tl-event-content">
                    <strong>{title}</strong>
                    <p>{desc}</p>
                  </div>

                  {/* Time */}
                  <span className="tl-time">{time}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Bottom CTA ── */}
      <div className="tl-cta">
        <div className="tl-cta-clock">
          <Clock size={28} strokeWidth={1.4} />
        </div>
        <div className="tl-cta-copy">
          <p className="tl-cta-head">30 HOURS TO <span>BUILD THE FUTURE.</span></p>
          <p className="tl-cta-sub">No pause. No limits.<br />Just you, your team and endless possibilities.</p>
        </div>
        <Link to="/contact" className="tl-cta-btn">
          REGISTER NOW <ArrowUpRight size={15} />
        </Link>
        <div className="tl-cta-dots" aria-hidden="true" />
      </div>

      <Footer />
    </main>
  )
}
