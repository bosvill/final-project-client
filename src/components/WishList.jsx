import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard/ProductCard'

const WishList = () => {
	const { user, isLoading } = useSelector(state => state.auth)
	console.log(user)
	return (
		<div>
			WishList
			{!user.wishList.length ? (
				<h3>No products in your wish list</h3>
			) : (
				user.wishList.map(el => <div key={el._id}>{el._id}</div>)
			)}
		</div>
	)
}

export default WishList
