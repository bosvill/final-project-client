import React from 'react'
import { Link } from 'react-router-dom'

const StoreCard = ({ path, store, img }) => {
	console.log(img)
	return (
			<Link to={path} className='content'>
				<article className='card'>
					<div className='img'>
						<div className='image' style={{ backgroundImage: `url(${img})` }}></div>
					</div>
					<h2 className='title'>{store.toUpperCase()}</h2>
					<h6 className='text'>[See more]</h6>
				</article>
			</Link>
	)
}

export default StoreCard
