import { Link, useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { MascotSlot } from '../components/MascotSlot'
import { tracks } from '../data/event'

type Props = { page: string }
const copy: Record<string, [string, string, string]> = {
  about: ['01 / About the event', 'WHY WE BUILD THE FUTURE.', 'The complete Hack the Future story, purpose, experience and community.'],
  problems: ['04 / Problem statements', 'REAL PROBLEMS. REAL BUILDERS.', 'Browse temporary example challenges until official problem statements are released.'],
  tracks: ['05 / Tracks', 'CHOOSE YOUR ARENA.', 'Pick a domain. Final tracks will be published by the organizers.'],
  prizes: ['06 / Prizes', 'REWARDING EXCELLENCE.', '₹5L+ prize pool. Confirmed prizes are shown; all other rewards are TBA.'],
  timeline: ['07 / Timeline', '30 HOURS. ONE CONTINUOUS BUILD.', 'Event sequence only. Official timing details will be added once confirmed.'],
  rules: ['08 / Rules & guidelines', 'KNOW THE GAME. BUILD WITHIN IT.', 'Rules are temporary placeholders pending the approved rulebook.'],
  judges: ['09 / Judges', 'THE MINDS BEHIND THE VERDICT.', 'REVEALING SOON — no profiles will appear before organizer confirmation.'],
  mentors: ['10 / Mentors', 'BUILD WITH GUIDANCE.', 'REVEALING SOON — mentor details will be added when confirmed.'],
  sponsors: ['11 / Partners', 'POWERING THE FUTURE.', 'SPONSORS & PARTNERS — REVEALING SOON.'],
  faq: ['12 / FAQ', 'QUESTIONS, ANSWERED.', 'Answers will be added from official organizer guidance.'],
  contact: ['13 / Contact', 'LET’S BUILD TOGETHER.', 'Official coordinator and contact details: TBA.'],
}
const tempProblems = ['Intelligent Public Services', 'Smart Healthcare Assistant', 'Sustainable Future']

export function EventPage({ page }: Props) {
  const [label, title, intro] = copy[page]
  const reveal = ['judges', 'mentors', 'sponsors'].includes(page)
  return <main><Header /><section className="page-hero"><div><p className="eyebrow">{label}</p><h1>{title}</h1><p>{intro}</p></div><MascotSlot label={`${page.toUpperCase()} — approved pose pending`} /></section>
    {reveal ? <section className="reveal"><p className="eyebrow">Official announcement pending</p><h2>REVEALING <span>SOON.</span></h2><p>We’ll add official profiles and partner logos here when they are confirmed.</p></section> : <PageContent page={page} />}
  <Footer />
  </main>
}

function PageContent({ page }: Props) {
  if (page === 'about') return <section className="page-content about-content"><div className="feature-panel"><span>ABOUT / EVENT IMAGE PLACEHOLDER</span></div><div className="about-copy"><p className="eyebrow">Our values</p><h2>IDEAS NEED<br /><span>PEOPLE.</span></h2><p>A focused space for creators, students and problem solvers to explore big ideas together.</p><div className="value-list">{['Innovation', 'Collaboration', 'Impact', 'Growth', 'Community'].map((value, i) => <article key={value}><b>0{i + 1}</b><strong>{value}</strong><span>Temporary content — official copy will be added here.</span></article>)}</div></div><div className="journey"><p className="eyebrow">The HFT experience</p>{['Discover', 'Choose', 'Build', 'Mentor', 'Submit', 'Present'].map((step, i) => <div key={step}><b>0{i + 1}</b><strong>{step}</strong></div>)}</div></section>
  if (page === 'problems') return <section className="page-content"><div className="filters">All · AI / ML · Web & App · IoT · Cybersecurity · Fintech · Open</div>{tempProblems.map((problem, i) => <Link to={`/problems/htf26-0${i + 1}`} className="problem-row" key={problem}><b>0{i + 1}</b><div><small>TEMPORARY CATEGORY</small><strong>{problem}</strong><span>Temporary problem summary — replace with official content.</span></div><i>→</i></Link>)}</section>
  if (page === 'tracks') return <section className="page-content card-grid">{tracks.map((track, i) => <article key={track}><small>0{i + 1}</small><h3>{track}</h3><p>Temporary domain description. Replace after official confirmation.</p></article>)}</section>
  if (page === 'faq' || page === 'rules') return <section className="page-content accordion">{['Eligibility', 'Team', 'Submission', 'Judging', 'Code of conduct'].map((item) => <details key={item}><summary>{item}<span>+</span></summary><p>Temporary information. Insert official organizer-approved details here.</p></details>)}</section>
  if (page === 'timeline') return <section className="page-content timeline-list">{['Registration & inauguration', 'Hacking begins', 'Mentoring', 'Submission', 'Evaluation & finale'].map((item, i) => <article key={item}><b>0{i + 1}</b><div><strong>{item}</strong><small>Official time: TBA</small></div></article>)}</section>
  if (page === 'prizes') return <section className="page-content prize-page"><div className="pool"><p>Total prize pool</p><b>₹5L+</b><span>Confirmed headline amount</span></div><div className="prize-list light">{[['01', 'Winner', '₹65,000'], ['02', 'Runner up', '₹45,000'], ['03', '2nd runner up', '₹35,000'], ['04', '4th Place', '₹10,000'], ['05', '5th Place', '₹10,000']].map(([rank, title, amount]) => <article key={rank}><small>{rank}</small><span>◉</span><b>{title}</b><strong>{amount}</strong></article>)}</div><p className="temporary">Top 3 teams also receive ₹1,20,000 incubation support. Additional prizes, benefits and awards: TBA pending organizer confirmation.</p></section>
  if (page === 'contact') return <section className="page-content contact-grid"><div><p className="eyebrow">Get in touch</p><h2>LET’S MAKE<br />IT <span>REAL.</span></h2><p>Contact details will be published here after organizer confirmation.</p></div><form><label>Name<input placeholder="Your name" /></label><label>Email<input type="email" placeholder="you@example.com" /></label><label>Message<textarea placeholder="How can we help?" rows={5} /></label><button className="button" type="button">Send message →</button></form></section>
  return <section className="page-content info-box"><p className="eyebrow">Content status</p><h2>OFFICIAL DETAILS <span>TBA.</span></h2><p>This section is structurally complete and waiting for organizer-approved information.</p></section>
}

export function ProblemDetailPage() {
  const { id } = useParams()
  return <main><Header /><section className="page-hero"><div><p className="eyebrow">HTF26 / {id?.toUpperCase()}</p><h1>PROBLEM<br />DETAIL.</h1><p>Temporary problem-detail template for the official statement.</p></div><MascotSlot label="PROBLEM DETAIL — coding pose pending" /></section><section className="page-content detail"><p className="eyebrow">Overview</p><h2>THE CHALLENGE</h2><p>Official challenge information will appear here.</p><h3>Objective</h3><p>TBA — replace with confirmed objectives, expected outcome and constraints.</p><div><a className="button button-outline" href="#download">Download PDF</a><Link className="button" to="/contact">Register now</Link></div></section><Footer /></main>
}
