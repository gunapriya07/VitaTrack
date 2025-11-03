import React, { useEffect, useRef } from 'react'

const About = () => {
  const bgRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const el = bgRef.current
      if (!el) return
      const offset = window.scrollY * 0.12
      el.style.transform = `translateY(${offset}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="about" className="vt-about" style={{ position: 'relative', overflow: 'hidden' }}>
      <div ref={bgRef} className="parallax-bg" style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(43,184,216,0.08), transparent), radial-gradient(circle at 80% 80%, rgba(107,76,255,0.06), transparent)', pointerEvents: 'none' }} />

      <div className="vt-container about-inner" style={{ position: 'relative' }}>
        <h2 className="section-title">Our mission</h2>
        <p className="about-text">VitaTrack exists to simplify healthcare for everyone — patients, clinicians, and caregivers. We combine secure data practices with intelligent tools so people get timely care and better outcomes.</p>
      </div>
    </section>
  )
}

export default About
