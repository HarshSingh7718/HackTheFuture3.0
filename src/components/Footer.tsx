import { Heart, ArrowUpRight } from 'lucide-react'
import { event } from '../data/event'
import navLogo from '../../NavBar Logo.png'

/* ── social SVG icons ── */
const s = 18
const GithubIcon    = () => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" /></svg>
const InstagramIcon = () => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
const LinkedinIcon  = () => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
const DiscordIcon   = () => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" /></svg>

export function Footer() {
  return (
    <footer className="hp-ft">
      <div className="hp-ft-grid">
        <div className="hp-ft-brand">
          <div className="hp-ft-logo">
            <img src={navLogo} alt="Hack the Future 3.0" />
          </div>
          <p>A 36-hour national level hackathon by Tula's University, Dehradun. Build. Innovate. Collaborate. Create Impact.</p>
          <div className="hp-ft-social">
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href="#" aria-label="GitHub"><GithubIcon /></a>
            <a href="#" aria-label="Discord"><DiscordIcon /></a>
          </div>
        </div>

        <div className="hp-ft-col">
          <h4>Quick Links</h4>
          <a href="/about">About</a>
          <a href="/problems">Problem Statements</a>
          <a href="/tracks">Tracks</a>
          <a href="/prizes">Prizes</a>
          <a href="/timeline">Timeline</a>
          <a href="/rules">Rules &amp; Guidelines</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="hp-ft-col">
          <h4>Participate</h4>
          <a href={event.registrationUrl}>Register Now</a>
          <a href="#">Team Login</a>
          <a href="#">Updates</a>
          <a href="#">Resources</a>
          <a href="/rules">Code of Conduct</a>
        </div>

        <div className="hp-ft-col">
          <h4>Support</h4>
          <a href="/faq">FAQs</a>
          <a href="/contact">Contact Us</a>
          <a href="#">Report an Issue</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
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
        <span>© 2026 Hack The Future 3.0 &nbsp;|&nbsp; Tula's University, Dehradun. All rights reserved.</span>
        <span className="hp-ft-heart">Built with passion for innovators <Heart size={14} /></span>
      </div>
    </footer>
  )
}
