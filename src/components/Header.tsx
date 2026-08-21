import { event } from '../data/event'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../NavBar Logo.png'

const links = ['Home', 'About', 'Problems', 'Tracks', 'Prizes', 'Timeline', 'Rules', 'FAQ', 'Contact']

export function Header() {
  return <header className="header"><Link className="brand brand-image" to="/" aria-label="Hack the Future 3.0 home"><img src={logo} alt="Hack the Future 3.0" /></Link>
    <nav aria-label="Main navigation">{links.map(link => <NavLink end={link === 'Home'} to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} key={link}>{link}</NavLink>)}</nav>
    <a className="button button-outline" href={event.registrationUrl}>Register now <strong>↗</strong></a>
  </header>
}
