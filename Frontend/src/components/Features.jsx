import React, { useEffect } from 'react'

const features = [
	{title: 'AI Health Insights', desc: 'Personalized insights powered by ML to spot trends and risks early.', icon: '🧠'},
	{title: 'Online Doctor Consultations', desc: 'Secure video visits with licensed professionals.', icon: '👩‍⚕️'},
	{title: 'Digital Health Records', desc: 'All your records, labs and images in one place.', icon: '📁'},
	{title: 'Medication Reminders', desc: 'Never miss a dose — automated reminders and logs.', icon: '💊'},
	{title: 'Appointment Scheduling', desc: 'Find and book trusted providers quickly.', icon: '📅'},
	{title: 'Secure Data', desc: 'End-to-end encryption and access controls.', icon: '🔒'}
]

const Features = () => {
	useEffect(() => {
		const cards = document.querySelectorAll('.feature-card')
		const obs = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('in-view', 'fade-in')
				}
			})
		}, { threshold: 0.15 })
		cards.forEach((c) => obs.observe(c))
		return () => obs.disconnect()
	}, [])

	return (
		<section id="features" className="vt-features">
			<div className="vt-container">
				<h2 className="section-title">Core Features</h2>
				<p className="section-sub">Everything you need to manage health simply and securely.</p>

				<div className="features-grid">
					{features.map((f) => (
						<article key={f.title} className="feature-card fade-in">
							<div className="feature-icon" aria-hidden>{f.icon}</div>
							<h3>{f.title}</h3>
							<p>{f.desc}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default Features
