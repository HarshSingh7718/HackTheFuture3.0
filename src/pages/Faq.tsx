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
      { q: 'What is Hack The Future 3.0?', a: 'Hack The Future 3.0 (HTF/03) is a national-level hackathon organized by Tula\'s ACM Student Chapter at Tula\'s University, Dehradun. This year\'s theme is "Project to Product" — challenging students to build solutions with real product potential. The offline Grand Finale is on 25–26 September 2026.' },
      { q: 'What is the theme of HTF 3.0?', a: 'The theme is PROJECT TO PRODUCT. The journey is: PROBLEM → IDEA → BUILD → VALIDATE → PRODUCT → PITCH. We want participants to think beyond submitting code and develop solutions with entrepreneurship potential and real-world scalability.' },
      { q: 'Who can participate?', a: 'HTF/03 is open to all undergraduate, postgraduate and engineering students from recognized colleges and universities across India — including developers, designers, AI enthusiasts, product thinkers, researchers and aspiring entrepreneurs.' },
      { q: 'Is participation free?', a: 'Round 1 (online idea/PPT submission) is completely free. Teams shortlisted for the offline Grand Finale pay a confirmation fee of ₹500 per participant (e.g., ₹1,500 for a 3-member team, up to ₹2,500 for a 5-member team).' },
      { q: 'How many members can be in a team?', a: 'Teams must have 3 to 5 members. Solo participation is not allowed. Teams are encouraged to bring diverse skills — development, design, AI/data, product thinking and business/entrepreneurship.' },
      { q: 'Do I need prior coding experience?', a: 'While technical skills help, we welcome teams from all backgrounds. Designers, product thinkers, business strategists and problem-solvers are equally valuable. This hackathon values the full product journey — not just code.' },
    ],
  },
  {
    label: 'REGISTRATION', id: 'reg',
    faqs: [
      { q: 'How do I register for HTF/03?', a: 'Registration is via the official platform (Unstop). Complete team registration, submit your Round 1 PPT/proposal before the deadline, and follow the prescribed submission format.' },
      { q: 'What is Round 1?', a: 'Round 1 is an online idea/PPT submission round — completely free. Teams submit a presentation covering their problem statement, proposed solution, target users, innovation, technology stack, product vision and market/impact potential. Shortlisted teams advance to the offline finale.' },
      { q: 'When is the Round 1 deadline?', a: 'Registration and PPT submission closes on 13 September 2026 at 11:59 PM IST. Results for shortlisted teams will be announced on 17 September 2026.' },
      { q: 'What documents are needed for registration?', a: 'A valid college/university student ID is required for all team members. Shortlisted teams must also complete payment of ₹500 per participant and submit participant details between 17–20 September 2026.' },
      { q: 'Can I change team members after registering?', a: 'Team changes are allowed until the confirmation deadline (20 September 2026). After that, the roster is locked. Contact us at hackthefuture@tulas.edu.in for assistance.' },
    ],
  },
  {
    label: 'HACKATHON', id: 'hack',
    faqs: [
      { q: 'What tracks are available?', a: 'HTF/03 offers 5 tracks: (1) AI & Machine Learning, (2) Cybersecurity, (3) Robotics & Automation, (4) Social Impact & Public Good, and (5) Open Innovation. Each track encourages solutions with strong product and entrepreneurship potential.' },
      { q: 'Can I switch tracks after registering?', a: 'Yes! You can switch your track until the hackathon officially begins on Day 1 (25 September 2026). Once hacking starts, your track is locked in.' },
      { q: 'Will mentors be available during the hackathon?', a: 'Absolutely! Expert mentors including entrepreneurs, startup founders, product professionals, technology mentors and academic experts will be available throughout the event for technical guidance, product validation, market thinking and pitching support.' },
      { q: 'Is food and accommodation provided?', a: 'Meals and snacks are provided throughout the event. Participants stay within the designated event areas (Computer Centre, rest areas, cafeteria). Accommodation is not included — participants arrange their own stay. A list of nearby affordable options will be shared.' },
      { q: 'Can I use APIs, frameworks, or open-source tools?', a: 'Yes! You are free to use any publicly available APIs, frameworks, libraries or open-source tools. Paid API credits must be self-arranged. Plagiarism, pre-built projects and copying are strictly prohibited and may result in immediate disqualification.' },
    ],
  },
  {
    label: 'JUDGING & PRIZES', id: 'judge',
    faqs: [
      { q: 'How will projects be evaluated?', a: 'Projects are judged on: Innovation & Creativity, Problem Relevance, Technical Implementation, Product Potential, User Value, Validation & Feasibility, Impact & Scalability, Entrepreneurship Potential, UI/UX, and Final Pitch quality. Each criterion reflects the Project to Product theme.' },
      { q: 'Who are the judges?', a: 'HTF/03 features an expert jury with representation from IITs, NIT Jalandhar, Jawaharlal Nehru University (New Delhi), IHFC IIT Delhi, industry, the technology ecosystem and the startup/entrepreneurship ecosystem. Final names will be announced separately.' },
      { q: 'What are the prizes?', a: '1st Prize: ₹65,000 | 2nd Prize: ₹45,000 | 3rd Prize: ₹35,000 | 4th Place: ₹10,000 | 5th Place: ₹10,000. Total prize pool: ₹5 Lakh+. Additionally, the Top 3 winning teams receive Incubation Support worth ₹1,20,000 — on top of the cash prizes — to help them build their product. Sponsor special awards may also be announced.' },
      { q: 'What is Incubation Support?', a: 'The top 3 winning teams receive access to incubation support worth ₹1,20,000 to help them move their ideas beyond the hackathon and continue their journey towards product development and entrepreneurship. The detailed structure and terms will be announced separately.' },
      { q: 'Who owns the project IP after the hackathon?', a: 'All intellectual property rights remain with the participating team. HTF/03 does not claim any ownership over your project. Top teams may be offered voluntary incubation support to help take their product further.' },
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
