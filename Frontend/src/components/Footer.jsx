import React from 'react'

const Footer = () => {
	const year = new Date().getFullYear()
	return (
		<footer className="vt-footer">
			<div className="vt-container footer-inner">
				<div className="footer-left">
					<div className="brand-small">VitaTrack</div>
					<p className="muted">Simplifying healthcare — securely.</p>
				</div>

				<div className="footer-links">
					<a href="#features">Features</a>
					<a href="#how">How it works</a>
					<a href="#about">About</a>
				</div>

				<div className="footer-right">
					<div className="socials">
						<a aria-label="twitter" href="#">Twitter</a>
						<a aria-label="linkedin" href="#">LinkedIn</a>
					</div>
					<div className="copyright">© {year} VitaTrack. All rights reserved.</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
