import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Home, ChevronDown, MessageCircle, ArrowRight } from 'lucide-react'
import mascot from '../../Mascots Variations/Faq.png'

const categories = [
  {
    label: 'GENERAL', id: 'general',
    faqs: [
      { q: 'What is Hack The Future 3.0?', a: 'Hack The Future 3.0 (HTF/03) is a 36-hour hackathon held in Dehradun, India on 25–26 September 2026. It\'s a platform for student innovators to build creative tech solutions, collaborate with peers, and compete for prizes worth ₹5 Lakh+.' },
      { q: 'Who can participate?', a: 'HTF/03 is open to all students — undergraduate, postgraduate, or diploma holders — enrolled in any recognized university or college. No age restriction applies.' },
      { q: 'Is participation free?', a: 'Yes! Participation in Hack The Future 3.0 is completely free of charge. Just register, form your team, and come ready to build something extraordinary.' },
      { q: 'How many members can be in a team?', a: 'Teams can have 2 to 4 members. Solo participation is not allowed. If you don\'t have a team, join our Discord server and find teammates before the event.' },
      { q: 'Do I need prior coding experience?', a: 'While basic coding knowledge is helpful, we welcome participants from all backgrounds. Designers, business thinkers, and problem-solvers are equally valuable in a team!' },
    ],
  },
  {
    label: 'REGISTRATION', id: 'reg',
    faqs: [
      { q: 'How do I register for HTF/03?', a: 'Click the "Register Now" button on the homepage, fill in your and your team\'s details, and complete the registration process. You\'ll receive a confirmation email once approved.' },
      { q: 'What is the registration deadline?', a: 'Registration closes on 20 September 2026, or when spots run out — whichever comes first. We have limited seats, so register early to secure your spot!' },
      { q: 'Can I change team members after registering?', a: 'Team changes are allowed until 22 September 2026. After that, the roster is locked. Contact us at hackthefuture@gmail.com for assistance with changes.' },
      { q: 'What documents are needed for registration?', a: 'A valid student ID from your institution is required. All team members must submit their IDs. No additional documentation is needed at registration time.' },
    ],
  },
  {
    label: 'HACKATHON', id: 'hack',
    faqs: [
      { q: 'What tracks are available?', a: 'HTF/03 offers 6 exciting tracks: AI / Machine Learning, Web & App Development, Cybersecurity, IoT & Robotics, FinTech, and Open Innovation. Visit our Tracks page for detailed descriptions.' },
      { q: 'Can I switch tracks after registering?', a: 'Yes! You can switch your track until the hackathon officially begins at 11:00 AM on 25 September 2026. Once hacking starts, your track is locked in.' },
      { q: 'Will mentors be available during the hackathon?', a: 'Absolutely! Industry experts and mentors will be available throughout the entire 36 hours to guide teams, review progress, and provide technical and business feedback.' },
      { q: 'Is food and accommodation provided?', a: 'Meals and snacks are provided throughout the 36-hour event. Accommodation is not included, but we\'ll share a list of affordable options nearby. Participants arrange their own stay.' },
      { q: 'Can I use APIs, frameworks, or open-source tools?', a: 'Yes! You are free to use any publicly available APIs, frameworks, libraries, or open-source tools. Paid API credits must be self-arranged. Plagiarism and use of pre-built projects are strictly prohibited.' },
    ],
  },
  {
    label: 'JUDGING & PRIZES', id: 'judge',
    faqs: [
      { q: 'How will projects be evaluated?', a: 'Projects are judged on: Innovation & Creativity (30%), Technical Implementation (30%), Real-World Impact & Scalability (20%), and Quality of Presentation (20%).' },
      { q: 'Who are the judges?', a: 'HTF/03 features experienced judges from leading tech companies, startups, and academia. Judge profiles will be announced closer to the event date.' },
      { q: 'What are the prizes?', a: '1st Prize: ₹65,000 | 2nd Prize: ₹50,000 | 3rd Prize: ₹30,000 | 4th & 5th Place: ₹5,000 each (Consolation). Plus certificates, goodies, and incubation opportunities for top teams.' },
      { q: 'Who owns the project IP after the hackathon?', a: 'All intellectual property rights remain with the participating team. HTF/03 does not claim any ownership over your project. Top teams may be offered voluntary incubation support.' },
    ],
  },
]

export function FaqPage() {
  const [open, setOpen] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('general')

  const toggle = (id: string) => setOpen(prev => prev === id ? null : id)
  const activeCat = categories.find(c => c.id === activeTab)!

  return (
    <main className="fq-page">
      <Header />

      {/* Breadcrumb */}
      <nav className="fq-breadcrumb">
        <Home size={12} /><span>HOME</span>
        <span className="fq-bc-sep">/</span>
        <span className="fq-bc-active">FAQ</span>
      </nav>

      {/* ── Hero ── */}
      <section className="fq-hero">
        <span className="fq-watermark" aria-hidden="true">08</span>
        <div className="fq-hero-copy">
          <p className="fq-label">08 /</p>
          <h1>GOT QUESTIONS?<br /><span className="fq-purple">WE'VE GOT<br />ANSWERS.</span></h1>
          <div className="fq-h1-line" />
          <p className="fq-hero-sub">Everything you need to know about<br />Hack The Future 3.0 — answered.</p>
        </div>
        <div className="fq-hero-visual">
          <img src={mascot} alt="HTF FAQ mascot" className="fq-hero-mascot" />
        </div>
      </section>

      {/* ── FAQ body ── */}
      <div className="fq-body section">
        {/* Category tabs */}
        <div className="fq-tabs">
          {categories.map(c => (
            <button key={c.id} className={`fq-tab${activeTab === c.id ? ' fq-tab--active' : ''}`}
              onClick={() => { setActiveTab(c.id); setOpen(null) }}>
              {c.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="fq-accordion">
          {activeCat.faqs.map((item, i) => {
            const id = `${activeTab}-${i}`
            const isOpen = open === id
            return (
              <div key={id} className={`fq-item${isOpen ? ' fq-item--open' : ''}`}>
                <button className="fq-question" onClick={() => toggle(id)}>
                  <span>{item.q}</span>
                  <ChevronDown size={18} strokeWidth={2} className="fq-chevron" />
                </button>
                <div className="fq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Still have questions? */}
        <div className="fq-more">
          <MessageCircle size={22} strokeWidth={1.5} />
          <div>
            <p className="fq-more-q">Still have questions?</p>
            <p className="fq-more-hint">Reach out to us directly and we'll get back to you.</p>
          </div>
          <Link to="/contact" className="fq-more-btn">CONTACT US <ArrowRight size={14} /></Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
