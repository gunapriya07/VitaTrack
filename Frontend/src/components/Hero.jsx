import React, { useEffect, useRef } from 'react'

const FloatingIcon = ({ children, style, className = '' }) => (
	<div className={`float-icon ${className}`} style={{ position: 'absolute', ...style }}>
		<div className="float-inner" aria-hidden style={{ padding: '.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: 12 }}>{children}</div>
	</div>
)

const Hero = () => {
	const visualRef = useRef(null)

	useEffect(() => {
		const el = visualRef.current
		if (!el) return
		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						el.classList.add('in-view')
					}
				})
			},
			{ threshold: 0.2 }
		)
		obs.observe(el)
		return () => obs.disconnect()
	}, [])

	return (
		<section className="vt-hero">
			<div className="vt-container hero-inner">
				<div className="hero-copy">
					<h1>Your Health. Simplified.</h1>
					<p className="lead">Track your health, consult doctors, and manage medical data in one smart platform.</p>
					<div className="hero-ctas">
						<button className="btn btn-primary">Get Started</button>
						<button className="btn btn-ghost">Book a Consultation</button>
					</div>
					<div className="trust-row">
						<div className="trust-item">HIPAA-ready</div>
						<div className="trust-item">AI-driven insights</div>
						<div className="trust-item">24/7 support</div>
					</div>
				</div>

				<div ref={visualRef} className="hero-visual" aria-hidden>
					<div className="mockups" style={{ position: 'relative' }}>
						{/* floating icons */}
						<FloatingIcon style={{ top: -12, left: -12 }}>
							<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18" stroke="#2bb8d8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 12h14" stroke="#6b4cff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
						</FloatingIcon>
						<FloatingIcon style={{ top: 10, right: 10 }}>
							<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="#2bb8d8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
						</FloatingIcon>
						<FloatingIcon style={{ bottom: -10, right: 34 }}>
							<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H4" stroke="#6b4cff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 4v16" stroke="#2bb8d8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
						</FloatingIcon>

						<svg className="dash" viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
							<defs>
								<linearGradient id="dg" x1="0" x2="1">
									<stop offset="0" stopColor="#2bb8d8" />
									<stop offset="1" stopColor="#6b4cff" />
								</linearGradient>
							</defs>
							<rect x="0" y="0" width="360" height="240" rx="14" fill="#0e1223" />
							<rect x="16" y="18" width="140" height="30" rx="6" fill="#141828" />
							<circle cx="230" cy="62" r="34" fill="url(#dg)" opacity="0.95" />
							<rect x="18" y="64" width="320" height="148" rx="8" fill="#121425" />
							<g fill="#9aa4d6" opacity="0.9">
								<rect x="32" y="80" width="120" height="12" rx="6" />
								<rect x="32" y="100" width="220" height="12" rx="6" />
								<rect x="32" y="120" width="180" height="10" rx="5" />
								<rect x="32" y="138" width="260" height="10" rx="5" />
							</g>
						</svg>

						<div className="phone">
							<svg viewBox="0 0 120 220" xmlns="http://www.w3.org/2000/svg">
								<rect x="2" y="2" width="116" height="216" rx="18" fill="#0b1220" stroke="url(#dg)" strokeWidth="2" />
								<rect x="14" y="22" width="92" height="176" rx="10" fill="#070913" />
								<circle cx="60" cy="44" r="8" fill="#2bb8d8" />
								<rect x="22" y="72" width="76" height="12" rx="6" fill="#1b2130" />
								<rect x="22" y="92" width="76" height="10" rx="5" fill="#1b2130" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
