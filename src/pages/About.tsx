import { useState, useEffect, useCallback } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { event } from '../data/event'
import {
  Lightbulb, Code2, Target, Rocket, Heart,
  Users, Trophy, Clock, Star, Sparkles,
  Maximize2, ChevronLeft, ChevronRight, X,
  Award, Eye, Calendar, MapPin
} from 'lucide-react'
import mascotAbout from '../../Mascots Variations/About.webp'

// Previous year HTF 2.0 images
import htf21 from '../../Website Screens/prevYrImage/htf21.webp'
import htf22 from '../../Website Screens/prevYrImage/htf22.webp'
import htf23 from '../../Website Screens/prevYrImage/htf23.webp'
import htf24 from '../../Website Screens/prevYrImage/htf24.webp'
import htf26 from '../../Website Screens/prevYrImage/htf26.webp'

/* ── data ── */
const features = [
  { icon: Clock, title: '30 HOURS NON-STOP', desc: 'Think. Code. Collaborate. Build without limits.' },
  { icon: Users, title: '5 SPECIALIZED TRACKS', desc: 'AI/ML, Cybersecurity, Robotics, Social Impact and Open Innovation.' },
  { icon: Trophy, title: 'REAL-WORLD IMPACT', desc: 'Build solutions that create meaningful change and product potential.' },
  { icon: Star, title: 'LEARN. GROW. NETWORK.', desc: 'Mentorship from IITs, NIT, industry leaders and startup founders.' },
]

const values = [
  { icon: Lightbulb, title: 'INNOVATION', desc: 'We encourage bold ideas and original thinking.' },
  { icon: Code2, title: 'COLLABORATION', desc: 'Great things are built when we build together.' },
  { icon: Target, title: 'IMPACT', desc: 'We build with purpose to solve real-world problems.' },
  { icon: Rocket, title: 'GROWTH', desc: 'Every challenge is a chance to level up your skills.' },
  { icon: Heart, title: 'COMMUNITY', desc: 'A supportive community that inspires and uplifts.' },
]

const glance = [
  { icon: Clock, value: '30', label: 'HOURS' },
  { icon: Code2, value: '5', label: 'TRACKS' },
  { icon: Users, value: '500+', label: 'PARTICIPANTS' },
  { icon: Trophy, value: '₹5L+', label: 'PRIZE POOL' },
]

/* ── Previous Edition (HTF 2.0) Data ── */
interface PastMemory {
  id: string
  src: string
  title: string
  subtitle: string
  category: 'ceremony' | 'hacking' | 'moments' | 'keynote'
  tag: string
  desc: string
  highlight: string
  size: 'featured' | 'wide' | 'tall' | 'standard'
}

const pastMemories: PastMemory[] = [
  {
    id: 'htf2-winners',
    src: htf22,
    title: 'Grand Finale & Award Ceremony',
    subtitle: 'Main Stage • Hack The Future 2.0',
    category: 'ceremony',
    tag: 'Champions Stage',
    desc: 'Celebrating top innovators and prize winners on stage with cash prizes, trophies, and certificates awarded by dignitaries.',
    highlight: '₹2.4L+ Cash Prizes',
    size: 'featured',
  },
  {
    id: 'htf2-auditorium',
    src: htf26,
    title: 'Grand Opening & Keynote Session',
    subtitle: 'Auditorium • Full House Attendance',
    category: 'moments',
    tag: '500+ Innovators',
    desc: 'A packed auditorium of enthusiastic student developers, tech enthusiasts, and mentors kicking off 30 hours of intense building.',
    highlight: '500+ Participants',
    size: 'wide',
  },
  {
    id: 'htf2-hardware',
    src: htf21,
    title: 'Live Hardware & IoT Demo Evaluation',
    subtitle: 'Jury Round • Project to Product',
    category: 'hacking',
    tag: 'Jury Round',
    desc: 'Participant team pitching real-world biomedical sensor hardware and prototype implementation directly to expert jury panels.',
    highlight: '60+ Live Projects',
    size: 'tall',
  },
  {
    id: 'htf2-registration',
    src: htf24,
    title: 'Pan-India Check-in & Registration Desk',
    subtitle: 'Tula\s Campus • Arrival & Onboarding',
    category: 'moments',
    tag: 'Campus Rush',
    desc: 'Hackers arriving from premier colleges across the country receiving badging, hackathon swag, and orientation kits.',
    highlight: 'Pan-India Teams',
    size: 'standard',
  },
  {
    id: 'htf2-dignitaries',
    src: htf23,
    title: 'Distinguished Leadership & Keynote Jury',
    subtitle: 'Inaugural Session • Tula\s University',
    category: 'keynote',
    tag: 'Leadership',
    desc: 'Eminent academic leaders, tech experts, and industry mentors inaugurating the event and sharing insights on building scalable products.',
    highlight: '20+ Tech Mentors',
    size: 'standard',
  },
]

const pastStats = [
  { icon: Users, value: '500+', label: 'HTF 2.0 HACKERS', desc: 'Participants from 50+ colleges' },
  { icon: Trophy, value: '₹2.4L+', label: 'PRIZES DISTRIBUTED', desc: 'Cash awards, swags & grants' },
  { icon: Clock, value: '30 HRS', label: 'NON-STOP HACKING', desc: 'Overnight sprint of innovation' },
  { icon: Sparkles, value: '60+', label: 'TEAMS SHORTLISTED', desc: 'Viable prototypes created' },
]

const filterTabs = [
  { key: 'all', label: 'All Moments' },
  { key: 'ceremony', label: 'Award Ceremony' },
  { key: 'hacking', label: 'Live Demos & Pitching' },
  { key: 'moments', label: 'Auditorium & Campus' },
  { key: 'keynote', label: 'Leadership & Mentors' },
]

/* ── component ── */
export function AboutPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredMemories = pastMemories.filter(
    item => activeFilter === 'all' || item.category === activeFilter
  )

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredMemories.length)
    }
  }, [lightboxIndex, filteredMemories.length])

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredMemories.length) % filteredMemories.length)
    }
  }, [lightboxIndex, filteredMemories.length])

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, closeLightbox, nextImage, prevImage])

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

      {/* ── 03 / Previous Year Edition: Hack The Future 2.0 Memories ── */}
      <section className="ab-flashback-wrap" id="past-edition">
        <div className="ab-flashback-container section">
          {/* Section Header */}
          <div className="ab-flashback-header">
            <div className="ab-flashback-eyebrow-row">
              <span className="eyebrow">03 / Previous Edition Legacy</span>
              <span className="ab-badge-past">
                <Sparkles size={13} className="ab-badge-icon" />
                FLASHBACK: HTF 2.0
              </span>
            </div>

            <div className="ab-flashback-title-wrap">
              <h2 className="ab-flashback-title">
                GLIMPSES OF <br />
                <span className="ab-title-gradient">HACK THE FUTURE 2.0</span>
              </h2>
              <p className="ab-flashback-desc">
                Before Hack the Future 3.0, our previous edition set a benchmark in national-level innovation.
                Bringing together <strong>500+ participants</strong>, 30 hours of relentless coding, live hardware
                prototypes, and distinguished mentors at Tulas University, Dehradun.
              </p>
            </div>

            {/* HTF 2.0 Stats Ribbon */}
            <div className="ab-past-stats-grid">
              {pastStats.map(({ icon: Icon, value, label, desc }) => (
                <div className="ab-past-stat-card" key={label}>
                  <div className="ab-past-stat-icon">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <div className="ab-past-stat-info">
                    <span className="ab-past-stat-num">{value}</span>
                    <strong className="ab-past-stat-label">{label}</strong>
                    <p className="ab-past-stat-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Filter Tabs */}
            <div className="ab-filter-bar">
              <div className="ab-filter-pills">
                {filterTabs.map(tab => (
                  <button
                    key={tab.key}
                    className={`ab-filter-pill ${activeFilter === tab.key ? 'is-active' : ''}`}
                    onClick={() => setActiveFilter(tab.key)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="ab-filter-count">
                Showing <b>{filteredMemories.length}</b> {filteredMemories.length === 1 ? 'memory' : 'memories'}
              </div>
            </div>
          </div>

          {/* Bento Gallery Grid */}
          <div className="ab-gallery-bento">
            {filteredMemories.map((item, idx) => (
              <div
                key={item.id}
                className={`ab-gallery-card ab-card-${item.size}`}
                onClick={() => openLightbox(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(idx) }}
                aria-label={`View ${item.title}`}
              >
                <div className="ab-gallery-img-box">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="ab-gallery-img"
                    loading="lazy"
                  />
                  <div className="ab-gallery-overlay" />

                  {/* Badges on Top */}
                  <div className="ab-card-top-badges">
                    <span className="ab-tag-pill">{item.tag}</span>
                    <span className="ab-highlight-pill">
                      <Award size={12} /> {item.highlight}
                    </span>
                  </div>

                  {/* Expand Floating Action */}
                  <div className="ab-card-action">
                    <span className="ab-zoom-btn" title="Expand photo">
                      <Maximize2 size={16} />
                    </span>
                  </div>

                  {/* Caption on Bottom */}
                  <div className="ab-card-caption">
                    <span className="ab-card-subtitle">{item.subtitle}</span>
                    <h3 className="ab-card-title">{item.title}</h3>
                    <p className="ab-card-desc">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout Banner */}
          <div className="ab-flashback-footer-box">
            <div className="ab-footer-box-content">
              <div className="ab-footer-box-icon">
                <Rocket size={28} />
              </div>
              <div>
                <h4>Ready to make history at Hack The Future 3.0?</h4>
                <p>Bigger prize pool of ₹5L+, 5 specialized tracks, and mentors from top IITs & tech startups.</p>
              </div>
            </div>
            <a href={event.registrationUrl} className="button button-primary ab-footer-box-btn">
              Register for HTF 3.0 <strong>→</strong>
            </a>
          </div>
        </div>

        {/* ── Lightbox Modal ── */}
        {lightboxIndex !== null && filteredMemories[lightboxIndex] && (
          <div className="ab-lightbox-backdrop" onClick={closeLightbox}>
            <div className="ab-lightbox-dialog" onClick={(e) => e.stopPropagation()}>
              {/* Header Bar */}
              <div className="ab-lightbox-header">
                <div className="ab-lightbox-meta">
                  <span className="ab-tag-pill">{filteredMemories[lightboxIndex].tag}</span>
                  <span className="ab-lightbox-counter">
                    {lightboxIndex + 1} / {filteredMemories.length}
                  </span>
                </div>
                <button
                  className="ab-lightbox-close"
                  onClick={closeLightbox}
                  aria-label="Close dialog"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Image Viewer Area */}
              <div className="ab-lightbox-viewer">
                <img
                  src={filteredMemories[lightboxIndex].src}
                  alt={filteredMemories[lightboxIndex].title}
                  className="ab-lightbox-img"
                />

                {/* Left/Right Navigation */}
                {filteredMemories.length > 1 && (
                  <>
                    <button
                      className="ab-lightbox-nav ab-nav-prev"
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      className="ab-lightbox-nav ab-nav-next"
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      aria-label="Next image"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Footer Details */}
              <div className="ab-lightbox-footer">
                <div className="ab-lightbox-text">
                  <div className="ab-lightbox-subtitle">
                    {filteredMemories[lightboxIndex].subtitle}
                  </div>
                  <h3 className="ab-lightbox-title">
                    {filteredMemories[lightboxIndex].title}
                  </h3>
                  <p className="ab-lightbox-desc">
                    {filteredMemories[lightboxIndex].desc}
                  </p>
                </div>
                <div className="ab-lightbox-badge-box">
                  <Award size={18} className="ab-gold-icon" />
                  <span>{filteredMemories[lightboxIndex].highlight}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}

//269-470