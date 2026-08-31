import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Trophy, Gift, Star, Rocket, Users, Home, Award } from 'lucide-react'
import mascot from '../../Mascots Variations/Prize.png'
import mascot2 from '../../Mascots Variations/Prize2 (1).png'

/* ── Rank cards ── */
const podium = [
  {
    num: '02', label: 'RUNNER UP', amount: '₹45,000', sub: 'Second Place',
    color: '#C0C0C0', glow: 'rgba(192,192,192,0.3)',
    grad: 'linear-gradient(160deg,#1c1c22,#252530)',
    topGrad: 'linear-gradient(90deg,#9e9e9e,#e0e0e0,#9e9e9e)',
    colorClass: 'pr-pod-silver',
  },
  {
    num: '01', label: 'WINNER', amount: '₹65,000', sub: 'First Place — Grand Prize',
    color: '#FFD700', glow: 'rgba(255,215,0,0.4)',
    grad: 'linear-gradient(160deg,#1a1500,#252000)',
    topGrad: 'linear-gradient(90deg,#FFD700,#ffe97a,#FFD700)',
    featured: true, colorClass: 'pr-pod-gold',
  },
  {
    num: '03', label: '2ND RUNNER UP', amount: '₹35,000', sub: 'Third Place',
    color: '#CD7F32', glow: 'rgba(205,127,50,0.3)',
    grad: 'linear-gradient(160deg,#1a1000,#241500)',
    topGrad: 'linear-gradient(90deg,#CD7F32,#e8a060,#CD7F32)',
    colorClass: 'pr-pod-bronze',
  },
]

const consolation = [
  { num: '04', label: 'CONSOLATION PRIZE', amount: '₹10,000', sub: '4th Place' },
  { num: '05', label: 'CONSOLATION PRIZE', amount: '₹10,000', sub: '5th Place' },
]

const perks = [
  { icon: Gift,   title: 'MORE THAN MONEY',      desc: 'Winner teams get incubation support, mentorship and exposure to IIT, NIT and industry leaders.' },
  { icon: Star,   title: 'SPECIAL RECOGNITION',  desc: 'Exciting goodie bags, certificates, sponsor rewards and special partner awards.' },
  { icon: Rocket, title: 'INCUBATION SUPPORT',   desc: 'Top 3 teams get ₹1,20,000 in incubation support — ON TOP of cash prizes — to build their product into a real startup.' },
  { icon: Users,  title: 'EVERY PARTICIPANT',     desc: 'Every participant receives a participation certificate and amazing swag.' },
]

export function PrizesPage() {
  return (
    <main className="pr-page">
      <Header />

      {/* Breadcrumb */}
      <nav className="pr-breadcrumb">
        <Home size={12} />
        <span>HOME</span>
        <span className="pr-bc-sep">/</span>
        <span className="pr-bc-active">PRIZES</span>
      </nav>

      {/* ── Hero ── */}
      <section className="pr-hero">
        <div className="pr-hero-bg" aria-hidden="true" />

        {/* Floating confetti */}
        <div className="pr-confetti" aria-hidden="true">
          {[...Array(18)].map((_, i) => <span key={i} className={`pr-conf pr-conf-t${i % 5}`} />)}
        </div>

        <span className="pr-watermark" aria-hidden="true">06</span>

        <div className="pr-hero-copy">
          <p className="pr-label">06 /</p>
          <h1>REWARDING<br /><span className="pr-grad-text">EXCELLENCE.</span></h1>
          <div className="pr-h1-line" />
          <p className="pr-hero-sub">
            Big ideas deserve big recognition.<br />
            Compete, innovate and win amazing<br />
            rewards worth <strong>₹5 Lakh+</strong>.
          </p>
        </div>

        <div className="pr-hero-visual">
          <img src={mascot} alt="HTF mascot holding trophy" className="pr-hero-mascot" />
        </div>
      </section>

      {/* ── Total pool banner ── */}
      <div className="pr-pool-banner">
        <p className="pr-pool-label">TOTAL PRIZE POOL</p>
        <div className="pr-pool-big">₹5 Lakh+</div>
        <p className="pr-pool-sub">WORTH OF EXCITING REWARDS</p>
      </div>

      {/* ── Podium ── */}
      <div className="pr-podium-wrap section">
        {/* Prize2 mascot — wide visual strip */}
        <div className="pr-prize2-banner">
          <img src={mascot2} alt="HTF prize board" className="pr-prize2-img" />
        </div>
         <div className="pr-podium">
          {podium.map(({ num, label, amount, sub, color, glow, grad, topGrad, featured, colorClass }) => (
            <div
              key={num}
              className={`pr-pod-card${featured ? ' pr-pod-card--featured' : ''} ${colorClass}`}
              style={{ '--card-color': color, '--card-glow': glow, '--card-grad': grad, '--top-grad': topGrad } as React.CSSProperties}
            >
              <div className="pr-pod-top-bar" />
              <div className="pr-pod-inner">
                <span className="pr-pod-num">{num}</span>
                <div className="pr-pod-trophy">
                  <Trophy size={featured ? 52 : 42} strokeWidth={1.2} style={{ color }} />
                  <div className="pr-pod-glow-ring" />
                </div>
                <p className="pr-pod-label">{label}</p>
                <p className="pr-pod-sub">{sub}</p>
                <div className="pr-pod-divider" />
                <div className="pr-pod-amount">{amount}</div>
                <div className="pr-pod-incubation">
                  <span className="pr-pod-inc-label">+ ₹1,20,000</span>
                  <span className="pr-pod-inc-sub">Incubation Support</span>
                </div>
              </div>
              {featured && <div className="pr-pod-featured-ring" />}
            </div>
          ))}
        </div>

        {/* Consolation prizes */}
        <div className="pr-consolation">
          {consolation.map(({ num, label, amount, sub }) => (
            <div key={num} className="pr-cons-card">
              <div className="pr-cons-inner">
                <Award size={28} strokeWidth={1.4} />
                <div>
                  <span className="pr-cons-num">{num}</span>
                  <span className="pr-cons-label">{label}</span>
                  <span className="pr-cons-sub">{sub}</span>
                </div>
                <div className="pr-cons-amount">{amount}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Perks ── */}
      <div className="pr-perks-wrap section">
        <div className="pr-perks">
          {perks.map(({ icon: Icon, title, desc }) => (
            <div className="pr-perk" key={title}>
              <div className="pr-perk-icon"><Icon size={22} strokeWidth={1.5} /></div>
              <div>
                <strong>{title}</strong>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Terms */}
      <div className="pr-terms">
        <span className="pr-terms-line" />
        <span className="pr-terms-text">PRIZES ARE SUBJECT TO TERMS &amp; CONDITIONS</span>
        <span className="pr-terms-dot" />
        <span className="pr-terms-line" />
      </div>

      <Footer />
    </main>
  )
}
