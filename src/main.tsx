import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactLenis } from '@studio-freight/react-lenis'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { EventPage } from './pages/EventPage'
import { AboutPage } from './pages/About'
import { RulesPage } from './pages/Rules'

import { TracksPage } from './pages/Tracks'
import { PrizesPage } from './pages/Prizes'
import { TimelinePage } from './pages/Timeline'
import { FaqPage } from './pages/Faq'
import { ContactPage } from './pages/Contact'
import './styles/global.css'
import './styles/homepage-sections.css'
import './styles/journey-map.css'
import './styles/about.css'
import './styles/rules.css'

import './styles/tracks.css'
import './styles/prizes.css'
import './styles/timeline.css'
import './styles/faq.css'
import './styles/contact.css'

import { ScrollToTop } from './components/ScrollToTop'

createRoot(document.getElementById('root')!).render(<StrictMode><BrowserRouter><ScrollToTop /><ReactLenis root options={{ lerp: 0.09, duration: 1.25, smoothWheel: true, wheelMultiplier: 1, touchMultiplier: 1.6, syncTouch: true }}><Routes>
  <Route path="/" element={<App />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/rules" element={<RulesPage />} />

  <Route path="/tracks" element={<TracksPage />} />
  <Route path="/prizes" element={<PrizesPage />} />
  <Route path="/timeline" element={<TimelinePage />} />
  <Route path="/faq" element={<FaqPage />} />
  <Route path="/contact" element={<ContactPage />} />

  {['judges', 'mentors', 'sponsors'].map(page => <Route key={page} path={`/${page}`} element={<EventPage page={page} />} />)}
</Routes></ReactLenis></BrowserRouter></StrictMode>)
