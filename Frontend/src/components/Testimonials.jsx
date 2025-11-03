import React, { useEffect, useState } from 'react'

const testimonials = [
  { name: 'Amala R.', role: 'Patient', quote: 'VitaTrack helped me keep my medications on schedule and made telehealth effortless.' },
  { name: 'Dr. Singh', role: 'GP', quote: 'Sharing patient records securely has sped up diagnosis and improved continuity of care.' },
  { name: 'Leena P.', role: 'Caregiver', quote: 'Easy record sharing made coordinating care so much simpler.' }
]

const Testimonials = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="vt-testimonials">
      <div className="vt-container">
        <h2 className="section-title">What our users say</h2>
        <div className="test-grid">
          {testimonials.map((tst, i) => (
            <blockquote
              key={tst.name}
              className={`test-card ${i === index ? 'active' : 'hidden'}`}
              aria-hidden={i === index ? 'false' : 'true'}
            >
              <p className="quote">“{tst.quote}”</p>
              <footer className="test-author">— {tst.name}, <span>{tst.role}</span></footer>
            </blockquote>
          ))}
        </div>

        <div className="carousel-dots" style={{ marginTop: '.9rem' }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className={`dot ${i === index ? 'dot-active' : ''}`} aria-label={`Show testimonial ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
