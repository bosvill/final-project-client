import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Searchbar from '../components/Searchbar'
import ProfileMenu from '../components/ProfileMenu'
import Navbar from '../layouts/Navbar'
import ShoppingCart from '../components/ShoppingCart'

const Header = () => {
	return (
		<div className='top-container'>
			<header className='header'>
				<Link to='/'>
					<img src='/cortado3.svg' alt='' className='logo' />
				</Link>
				<div className='icons'>
					<Searchbar />
					<ShoppingCart />
					<ProfileMenu />
				</div>
			</header>
			<Navbar />
		</div>
	)
}

export default Header
