import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
const stores = ['women', 'men', 'kids']

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				{stores.map(el => (
					<li key={el} className={styles.li}>
						<NavLink to={`/${el}`} className={styles.link}>
							{el.toUpperCase()}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
