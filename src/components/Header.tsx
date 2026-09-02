import { event } from '../data/event'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../NavBar Logo.webp'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Tracks', 'Prizes', 'Timeline', 'Rules', 'FAQ', 'Contact']

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close drawer on route change
  useEffect(() => { setOpen(false) }, [location])

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className="header">
        <Link className="brand brand-image" to="/" aria-label="Hack the Future 3.0 home">
          <img src={logo} alt="Hack the Future 3.0" />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation">
          {links.map(link => (
            <NavLink end={link === 'Home'} to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} key={link}>
              {link}
            </NavLink>
          ))}
        </nav>

        <a className="button button-outline header-reg-btn" href={event.registrationUrl}>
          Register now <strong>↗</strong>
        </a>

        {/* Hamburger — mobile only */}
        <button
          className="header-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile drawer overlay */}
      {open && <div className="header-overlay" onClick={() => setOpen(false)} />}

      {/* Mobile drawer */}
      <nav className={`header-drawer ${open ? 'header-drawer--open' : ''}`} aria-label="Mobile navigation">
        <div className="header-drawer-links">
          {links.map(link => (
            <NavLink
              end={link === 'Home'}
              to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
              key={link}
              className={({ isActive }) => isActive ? 'drawer-link drawer-link--active' : 'drawer-link'}
            >
              {link}
            </NavLink>
          ))}
        </div>
        <a className="button drawer-reg-btn" href={event.registrationUrl}>
          Register now <strong>↗</strong>
        </a>
      </nav>
    </>
  )
}
