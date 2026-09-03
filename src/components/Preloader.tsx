import React, { useState, useEffect } from 'react'
import logo from '../../NavBar Logo.webp'
import '../styles/preloader.css'

export const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0)
  const [isHiding, setIsHiding] = useState(false)
  const [isMounted, setIsMounted] = useState(true)

  useEffect(() => {
    // Lock scroll during preloader
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const startTime = Date.now()
    const duration = 1800 // Total load duration in ms

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100))

      setProgress(rawProgress)

      if (rawProgress >= 100) {
        clearInterval(interval)
        // Trigger fadeout
        setTimeout(() => {
          setIsHiding(true)
          document.body.style.overflow = prevOverflow || ''
          // Unmount after fade animation finishes
          setTimeout(() => {
            setIsMounted(false)
          }, 650)
        }, 300)
      }
    }, 20)

    return () => {
      clearInterval(interval)
      document.body.style.overflow = prevOverflow || ''
    }
  }, [])

  if (!isMounted) return null

  // Determine active status message based on progress
  let statusText = 'INITIALIZING QUANTUM CORE...'
  if (progress > 30 && progress <= 65) {
    statusText = 'LOADING HACKATHON PROTOCOLS...'
  } else if (progress > 65 && progress <= 95) {
    statusText = "SYNCHRONIZING TULAS ACM NETWORK..."
  } else if (progress > 95) {
    statusText = 'SYSTEM READY // WELCOME TO HTF 3.0'
  }

  return (
    <div
      className={`htf-preloader-root ${isHiding ? 'htf-preloader--hiding' : ''}`}
      aria-hidden={isHiding}
    >
      {/* Ambient Cyber Grid */}
      <div className="htf-preloader-grid" />

      {/* Cyber Frame Corner Brackets */}
      <div className="htf-preloader-frame">
        <div className="htf-frame-corner htf-frame-tl" />
        <div className="htf-frame-corner htf-frame-tr" />
        <div className="htf-frame-corner htf-frame-bl" />
        <div className="htf-frame-corner htf-frame-br" />
      </div>

      {/* Center Content */}
      <div className="htf-preloader-content">
        {/* Hologram Rings & Logo */}
        <div className="htf-preloader-logo-wrap">
          <div className="htf-preloader-ring-1" />
          <div className="htf-preloader-ring-2" />
          <div className="htf-preloader-core">
            <img
              src={logo}
              alt="Hack The Future 3.0"
              className="htf-preloader-logo-img"
            />
          </div>
        </div>

        {/* Title Tagline */}
        <div className="htf-preloader-title">
          <span className="htf-preloader-tag">//</span>
          HACK THE FUTURE 3.0
          <span className="htf-preloader-tag">//</span>
        </div>

        {/* Dynamic Percentage Counter */}
        <div className="htf-preloader-percent">
          {progress}%
        </div>

        {/* Glowing Progress Bar */}
        <div className="htf-preloader-bar-wrap">
          <div
            className="htf-preloader-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status ticker readout */}
        <div className="htf-preloader-status">
          <span className="htf-status-beacon" />
          <span>{statusText}</span>
        </div>
      </div>
    </div>
  )
}
