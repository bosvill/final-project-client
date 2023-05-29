import React, { useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import styles from './ProductDetails.module.css'
import { useDisplayProductQuery, useUpdateProductMutation } from '../../features/product/productApi'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import LazyLoadingImage from '../../components/LazyLoadingImage'
import OrderIcon from '../../icons/OrderIcon'
import ProductForm from '../../components/ProductForm'

/* const details= [
	{
		"size": "38",
		"stock": 3,
		"color": "#000000",
		"createdAt": "2023-05-29T07:47:08.933Z",
		"_id": "6474587cba293643fb5c58dc"
	},
	{
		"size": "39",
		"stock": 2,
		"color": "#000000",
		"createdAt": "2023-05-29T07:47:08.933Z",
		"_id": "6474587cba293643fb5c58dd"
	},
	{
		"size": "37",
		"stock": 4,
		"color": "#000000",
		"createdAt": "2023-05-29T07:47:08.933Z",
		"_id": "6474587cba293643fb5c58de"
	},
	{
		"size": "38",
		"stock": 1,
		"color": "#6b655d",
		"createdAt": "2023-05-29T07:47:08.933Z",
		"_id": "6474587cba293643fb5c58df"
	},
	{
		"size": "40",
		"stock": 2,
		"color": "#6b655d",
		"createdAt": "2023-05-29T07:47:08.933Z",
		"_id": "6474587cba293643fb5c58e0"
	}
] */
const ProductDetails = () => {
	const { pid } = useParams()
	const [quantity, setQuantity] = useState(1)
	const { _id, title, description, detail, gallery, price, subcategory, brand, store, tags } =
		useLoaderData()

	return (
		<main className={styles.container}>
			<div className={styles.content}>
				<section className={styles.images}>
					{gallery?.map(image => (
						<img
							key={image?._id}
							src={image?.url}
							alt={image?.public_id}
							className={styles.image}
						/>
					))}
				</section>
				<section className={styles.info}>
					<h3 className={styles.brand}>{brand?.title}</h3>
					{/* <span className={styles.span}>{subcategory?.title}</span> */}
					<h2 className={styles.title}>{title}</h2>
					<h2 className={styles.price}>€ {price}</h2>
					<ProductForm _id={_id} details={detail} />
				</section>
				<div className={styles.line}></div>
				<article className={styles.detail}>
					<h2 className={styles.detailsTitle}>Description</h2>
					<p className={styles.detailsText}>{description}</p>
				</article>
				<article className={styles.detail}>
					<h2 className={styles.detailsTitle}>Details</h2>
					<ul className={styles.tags}>
						{tags?.length
							? tags.map(el => (
									<li className={styles.tagsText} key={el}>
										{el}
									</li>
							  ))
							: null}
					</ul>
				</article>
			</div>
		</main>
	)
}

export default ProductDetails
