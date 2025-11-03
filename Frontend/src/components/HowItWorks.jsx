import React, { useEffect } from 'react'

const steps = [
  {title: 'Sign Up', desc: 'Create your secure account and add basic health details.', icon: '📝'},
  {title: 'Track Health', desc: 'Sync devices, log vitals and let the AI spot patterns.', icon: '📊'},
  {title: 'Connect with Doctors', desc: 'Book consultations, share records, and get care plans.', icon: '🤝'}
]

const HowItWorks = () => {
  useEffect(() => {
    const stepsEls = document.querySelectorAll('.how-step')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target
          el.classList.add('in-view')
        }
      })
    }, { threshold: 0.18 })
    stepsEls.forEach((el, idx) => {
      el.style.transitionDelay = `${idx * 120}ms`
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <section id="how" className="vt-how">
      <div className="vt-container">
        <h2 className="section-title">How it works</h2>
        <p className="section-sub">Three simple steps to better health.</p>

        <div className="how-grid">
          {steps.map((s, i) => (
            <div key={s.title} className="how-step fade-in">
              <div className="step-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {i < steps.length - 1 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
