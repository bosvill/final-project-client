import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductCard.module.css'

const ProductCard = ({ product }) => {
	console.log(product)
	return (
		<Link className={styles.card} to={`/product/${product._id}`}>
			<img src={product.thumbnail.url} alt='' className={styles.img} />
			<h6 className={styles.brand}>{product.brand.title}</h6>
			<p className={styles.title}>{product.title}</p>
			<h6 className={styles.price}>EUR {product.price},00</h6>
		</Link>
	)
}

export default ProductCard
