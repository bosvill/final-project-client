import React from 'react'
import { Link } from 'react-router-dom'
const links = [
	{ page: 'Contact Us', link: '/contact-us' },
	 { page: 'Shipping', link: '/shipping' }, 
	 {page:'Returns', link:'/returns'},
	{ page: 'FAQs', link: 'faq' },
	{ page: 'About us', link: '/about' }
]
const Footer = () => {
	return (
		<footer className='footer'>
			<nav>
				<ul className='center-x'>
					{links.map(link => (
						<li key={link.link}>
							<Link to={link.link} className='footer-links'>
								{link.page}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<p className='footer-info'>Copyright © 2023, Cortado. All rights reserved.</p>
		</footer>
	)
}

export default Footer
