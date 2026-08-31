import { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Home, Mail, Phone, MapPin, Send, Camera, Briefcase, MessageSquare } from 'lucide-react'
import mascot from '../../Mascots Variations/Contact Us.png'

const contactInfo = [
  { icon: Mail,     label: 'EMAIL US',        value: 'hackthefuture@tulas.edu.in', link: 'mailto:hackthefuture@tulas.edu.in' },
  { icon: Phone,    label: 'CALL US',          value: '+91 98765 43210',          link: 'tel:+919876543210' },
  { icon: MapPin,   label: 'LOCATION',         value: 'Tulas University, Dehradun, Uttarakhand', link: 'https://maps.google.com/?q=Tulas+University+Dehradun' },
  { icon: MessageSquare, label: 'DISCORD',     value: 'discord.gg/htf03',         link: 'https://discord.gg/htf03' },
]

const socials = [
  { icon: Camera,   label: 'Instagram', handle: '@hackthefuture03', link: 'https://instagram.com' },
  { icon: Briefcase, label: 'LinkedIn', handle: 'Hack The Future',  link: 'https://linkedin.com' },
]

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="ct-page">
      <Header />

      {/* Breadcrumb */}
      <nav className="ct-breadcrumb">
        <Home size={12} /><span>HOME</span>
        <span className="ct-bc-sep">/</span>
        <span className="ct-bc-active">CONTACT</span>
      </nav>

      {/* ── Hero ── */}
      <section className="ct-hero">
        <span className="ct-watermark" aria-hidden="true">09</span>
        <div className="ct-hero-copy">
          <p className="ct-label">09 /</p>
          <h1>LET'S GET<br /><span className="ct-purple">IN TOUCH.</span></h1>
          <div className="ct-h1-line" />
          <p className="ct-hero-sub">
            Have a question, idea, or want to<br />
            partner with us? We'd love to hear<br />
            from you. Reach out anytime.
          </p>
        </div>
        <div className="ct-hero-visual">
          <img src={mascot} alt="HTF Contact mascot" className="ct-hero-mascot" />
        </div>
      </section>

      {/* ── Contact info cards ── */}
      <div className="ct-info-row section">
        {contactInfo.map(({ icon: Icon, label, value, link }) => (
          <a key={label} href={link} target="_blank" rel="noreferrer" className="ct-info-card">
            <div className="ct-info-icon"><Icon size={20} strokeWidth={1.6} /></div>
            <div>
              <span className="ct-info-label">{label}</span>
              <span className="ct-info-value">{value}</span>
            </div>
          </a>
        ))}
      </div>

      {/* ── Main content: form + socials ── */}
      <div className="ct-main section">
        {/* Contact form */}
        <div className="ct-form-wrap">
          <p className="ct-section-tag">SEND A MESSAGE</p>
          <h2 className="ct-form-title">We'll reply within<br /><span>24 hours.</span></h2>

          {sent ? (
            <div className="ct-success">
              <div className="ct-success-icon"><Send size={28} strokeWidth={1.5} /></div>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
              <button className="ct-success-btn" onClick={() => setSent(false)}>Send Another</button>
            </div>
          ) : (
            <form className="ct-form" onSubmit={handleSubmit}>
              <div className="ct-form-row">
                <div className="ct-field">
                  <label htmlFor="ct-name">Full Name</label>
                  <input id="ct-name" name="name" type="text" placeholder="Your full name"
                    value={form.name} onChange={handleChange} required />
                </div>
                <div className="ct-field">
                  <label htmlFor="ct-email">Email Address</label>
                  <input id="ct-email" name="email" type="email" placeholder="your@email.com"
                    value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="ct-field">
                <label htmlFor="ct-subject">Subject</label>
                <select id="ct-subject" name="subject" value={form.subject} onChange={handleChange}>
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Sponsorship / Partnership</option>
                  <option>Media & Press</option>
                  <option>Registration Help</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="ct-field">
                <label htmlFor="ct-message">Message</label>
                <textarea id="ct-message" name="message" rows={5}
                  placeholder="Tell us how we can help…"
                  value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="ct-submit">
                SEND MESSAGE <Send size={15} />
              </button>
            </form>
          )}
        </div>

        {/* Right: socials + map placeholder */}
        <div className="ct-side">
          <div className="ct-social-block">
            <p className="ct-section-tag">FOLLOW US</p>
            <p className="ct-side-sub">Stay updated with announcements,<br />schedules and behind-the-scenes.</p>
            <div className="ct-socials">
              {socials.map(({ icon: Icon, label, handle, link }) => (
                <a key={label} href={link} target="_blank" rel="noreferrer" className="ct-social-card">
                  <div className="ct-social-icon"><Icon size={20} strokeWidth={1.5} /></div>
                  <div>
                    <span className="ct-social-name">{label}</span>
                    <span className="ct-social-handle">{handle}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Location card */}
          <div className="ct-location-card">
            <div className="ct-location-map">
              <MapPin size={32} strokeWidth={1.3} />
              <span>Tulas University, Dehradun</span>
            </div>
            <div className="ct-location-info">
              <p className="ct-section-tag">VENUE</p>
              <p className="ct-location-name">Hack The Future 3.0</p>
              <p className="ct-location-addr">Tulas University, Dehradun<br />Uttarakhand, India<br />25–26 September 2026</p>
              <a href="https://maps.google.com/?q=Tulas+University+Dehradun" target="_blank" rel="noreferrer" className="ct-directions">
                Get Directions →
              </a>
            </div>
          </div>

          {/* Quick contact */}
          <div className="ct-quick">
            <p className="ct-section-tag">QUICK CONTACT</p>
            <a href="mailto:hackthefuture@tulas.edu.in" className="ct-quick-email">
              <Mail size={16} />
              hackthefuture@tulas.edu.in
            </a>
            <p className="ct-quick-note">For urgent queries, reach out on Discord — we're most active there!</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
