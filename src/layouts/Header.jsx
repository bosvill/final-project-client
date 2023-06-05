import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Searchbar from '../components/Searchbar'
import ProfileMenu from '../components/ProfileMenu'
import Navbar from '../layouts/Navbar'
import CartMenu from '../components/CartMenu'

const Header = () => {
	return (
		<div className='top-container'>
			<header className='header'>
				<Link to='/'>
					<img src='/logo.png' alt='' className='logo' />
				</Link>
				<div className='icons'>
					<Searchbar />
					<CartMenu />
					<ProfileMenu />
				</div>
			</header>
			<Navbar />
		</div>
	)
}

export default Header
