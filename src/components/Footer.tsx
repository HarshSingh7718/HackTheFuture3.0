import { Heart, ArrowUpRight } from 'lucide-react'
import { event } from '../data/event'
import navLogo from '../../NavBar Logo.webp'

/* ── social SVG icons ── */
const s = 18
const InstagramIcon = () => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
const WhatsappIcon = () => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>

export function Footer() {
  return (
    <footer className="hp-ft">
      <div className="hp-ft-grid">
        <div className="hp-ft-brand">
          <div className="hp-ft-logo">
            <img src={navLogo} alt="Hack the Future 3.0" />
          </div>
          <p>A national-level hackathon by Tulas ACM Student Chapter, Tulas University, Dehradun. Theme: Project to Product. Build. Validate. Pitch.</p>
          <div className="hp-ft-social">
            <a href="https://www.instagram.com/tulashackathon?igsi=MXQ2Y2Q5eXdwYmp6cw==" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a>
            <a href="https://chat.whatsapp.com/Ichzy6cHy6pIOCCqxa8E3f" target="_blank" rel="noreferrer" aria-label="WhatsApp"><WhatsappIcon /></a>
          </div>
        </div>

        <div className="hp-ft-col">
          <h4>Quick Links</h4>
          <a href="/about">About</a>
          <a href="/tracks">Tracks</a>
          <a href="/prizes">Prizes</a>
          <a href="/timeline">Timeline</a>
        </div>

        <div className="hp-ft-col">
          <h4>Participate</h4>
          <a href="/rules">Code of Conduct</a>
          <a href="/rules">Rules &amp; Guidelines</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="hp-ft-news">
          <h4>Stay Updated</h4>
          <p>Subscribe to get the latest updates and announcements.</p>
          <form className="hp-ft-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" />
            <button type="submit" aria-label="Subscribe"><ArrowUpRight size={18} /></button>
          </form>
        </div>
      </div>

      <div className="hp-ft-bottom">
        <span>&copy; 2026 Hack The Future 3.0 &nbsp;|&nbsp; Tulas ACM Student Chapter &middot; Tulas University, Dehradun. All rights reserved.</span>
        <span className="hp-ft-heart">Built with passion for innovators <Heart size={14} /></span>
      </div>
    </footer>
  )
}
