import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {
  Brain, Code2, Shield, Cpu, Zap, Lightbulb, Heart, Leaf,
  Globe, ArrowRight, Home, ChevronDown,
} from 'lucide-react'
import mascot from '../../Mascots Variations/Problem.webp'

/* ── problem data ── */
const problems = [
  {
    id: 'htf26-01', num: '01', category: 'AI / MACHINE LEARNING',
    title: 'Intelligent Public Services',
    desc: 'Build an AI-powered solution to improve efficiency, accessibility and decision-making in public services.',
    icon: Brain, tag: 'ai',
  },
  {
    id: 'htf26-02', num: '02', category: 'AI / MACHINE LEARNING',
    title: 'AI-Driven Crop Disease Detection',
    desc: 'Develop an ML model that identifies plant diseases from images to help farmers protect their crops and increase yield.',
    icon: Brain, tag: 'ai',
  },
  {
    id: 'htf26-03', num: '03', category: 'HEALTHCARE',
    title: 'Smart Healthcare Assistant',
    desc: 'Design a technology-driven solution to enhance patient support, diagnostics or healthcare management.',
    icon: Heart, tag: 'web',
  },
  {
    id: 'htf26-04', num: '04', category: 'SUSTAINABILITY',
    title: 'Sustainable Future',
    desc: 'Create innovative solutions for environment monitoring, resource management or sustainable living.',
    icon: Leaf, tag: 'open',
  },
  {
    id: 'htf26-05', num: '05', category: 'WEB & APP DEVELOPMENT',
    title: 'Campus Connect Platform',
    desc: 'Build a platform that connects students across universities for collaboration, mentorship and networking.',
    icon: Code2, tag: 'web',
  },
  {
    id: 'htf26-06', num: '06', category: 'CYBERSECURITY',
    title: 'Threat Intelligence Dashboard',
    desc: 'Design a real-time dashboard that aggregates, analyzes and visualizes cybersecurity threats for organizations.',
    icon: Shield, tag: 'cyber',
  },
  {
    id: 'htf26-07', num: '07', category: 'FINTECH',
    title: 'Financial Literacy App',
    desc: 'Build a mobile-first application that promotes financial awareness, budgeting and investment literacy for college students.',
    icon: Zap, tag: 'fintech',
  },
  {
    id: 'htf26-08', num: '08', category: 'IOT & ROBOTICS',
    title: 'Smart Campus Automation',
    desc: 'Develop an IoT-based system to automate and optimize campus infrastructure, energy and resource utilization.',
    icon: Cpu, tag: 'iot',
  },
  {
    id: 'htf26-09', num: '09', category: 'OPEN INNOVATION',
    title: 'Future Forward',
    desc: 'Surprise us with a bold, creative and unconventional idea that challenges the status quo and creates real-world impact.',
    icon: Lightbulb, tag: 'open',
  },
]

const filters = [
  { label: 'ALL', tag: 'all' },
  { label: 'AI / ML', tag: 'ai' },
  { label: 'WEB & APP', tag: 'web' },
  { label: 'IOT', tag: 'iot' },
  { label: 'CYBERSECURITY', tag: 'cyber' },
  { label: 'FINTECH', tag: 'fintech' },
  { label: 'OPEN INNOVATION', tag: 'open' },
]

export function ProblemsPage() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? problems : problems.filter(p => p.tag === active)

  return (
    <main className="pb-page">
      <Header />

      {/* Breadcrumb */}
      <nav className="pb-breadcrumb">
        <Home size={12} />
        <span>HOME</span>
        <span className="pb-bc-sep">/</span>
        <span className="pb-bc-active">PROBLEM STATEMENTS</span>
      </nav>

      {/* ── Hero ── */}
      <section className="pb-hero">
        <span className="pb-watermark" aria-hidden="true">04</span>

        <div className="pb-hero-copy">
          <p className="pb-label">04 /</p>
          <h1>PROBLEM<br />STATEMENTS</h1>
          <div className="pb-h1-line" />
          <p className="pb-hero-sub">
            Real-world challenges. Build impactful solutions.<br />
            Choose a problem statement and start building<br />
            the future.
          </p>
        </div>

        <div className="pb-hero-visual">
          <div className="pb-speech-bubble">
            <Code2 size={22} strokeWidth={1.8} />
          </div>
          <img src={mascot} alt="HTF mascot searching for problems" className="pb-hero-mascot" />
        </div>
      </section>

      {/* ── Filters ── */}
      <div className="pb-filters-bar">
        <div className="pb-filters">
          {filters.map(({ label, tag }) => (
            <button
              key={tag}
              className={`pb-filter${active === tag ? ' pb-filter--active' : ''}`}
              onClick={() => setActive(tag)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="pb-sort">
          <span>SORT BY</span>
          <button className="pb-sort-btn">
            Latest <ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* ── Problem list ── */}
      <div className="pb-list">
        {filtered.map((p, i) => (
          <Link to={`/problems/${p.id}`} key={p.id} className="pb-row">
            {/* Number + ID */}
            <div className="pb-row-num">
              <span className="pb-num">{p.num}</span>
              <span className="pb-id">{p.id.toUpperCase()}</span>
            </div>

            {/* Icon circle */}
            <div className="pb-row-icon">
              <p.icon size={22} strokeWidth={1.5} />
            </div>

            {/* Content */}
            <div className="pb-row-content">
              <span className="pb-row-cat">{p.category}</span>
              <h3 className="pb-row-title">{p.title}</h3>
              <p className="pb-row-desc">{p.desc}</p>
            </div>

            {/* Arrow */}
            <div className="pb-row-arrow">
              <ArrowRight size={18} strokeWidth={2} />
            </div>
          </Link>
        ))}

        {filtered.length === 0 && (
          <div className="pb-empty">No problems in this category yet.</div>
        )}
      </div>

      {/* Coming soon bar */}
      <div className="pb-coming-soon">
        <span className="pb-cs-line" />
        <span className="pb-cs-text">MORE PROBLEMS COMING SOON</span>
        <span className="pb-cs-dot" />
        <span className="pb-cs-line" />
      </div>

      <Footer />
    </main>
  )
}
