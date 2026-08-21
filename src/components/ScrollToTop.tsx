import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop — instantly scrolls window to (0,0) on every route change.
 * Place this as the first child inside <BrowserRouter>.
 */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
