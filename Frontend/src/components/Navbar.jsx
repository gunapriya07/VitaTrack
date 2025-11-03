import React from 'react'

const Navbar = () => {
	return (
		<header className="vt-navbar">
			<div className="vt-container nav-inner">
				<div className="brand">
					<div className="logo-mark" aria-hidden>
						<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="2" y="2" width="20" height="20" rx="6" fill="url(#g)" />
							<path d="M7 12h10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							<defs>
								<linearGradient id="g" x1="0" x2="1">
									<stop offset="0" stopColor="#2bb8d8" />
									<stop offset="1" stopColor="#4b6cff" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<span className="brand-text">VitaTrack</span>
				</div>

				<nav className="nav-links">
					<a href="#features">Features</a>
					<a href="#how">How it works</a>
					<a href="#about">About</a>
				</nav>

				<div className="nav-ctas">
					<button className="btn btn-ghost">Log in</button>
					<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</header>
	)
}

export default Navbar
