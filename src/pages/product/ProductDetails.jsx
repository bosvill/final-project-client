import React, { useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import styles from './ProductDetails.module.css'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import LazyLoadingImage from '../../components/LazyLoadingImage'
import ReturnIcon from '../../icons/ReturnIcon'
import TruckIcon from '../../icons/TruckIcon'
import Carousel from '../../components/Carousel/Carousel'
import AddToCart from '../../components/AddToCart'

const ProductDetails = () => {
	const { pid } = useParams()
	const {
		_id,
		title,
		description,
		detail,
		gallery,
		price,
		subcategory,
		brand,
		store,
		tags,
		thumbnail
	} = useLoaderData()

	return (
		<main className={styles.container}>
			<div className={styles.content}>
				<section className={styles.images}>
					<Carousel gallery={gallery} />
				</section>
				<section className={styles.info}>
					<h3 className={styles.brand}>{brand?.title}</h3>
					{/* <span className={styles.span}>{subcategory?.title}</span> */}
					<h2 className={styles.title}>{title}</h2>
					<h2 className={styles.price}>€ {price}</h2>
					<AddToCart _id={_id} title={title} thumbnail={thumbnail} price={price} details={detail} />
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
				<div className={styles.line}></div>
				<article className={styles.detail}>
				<div className={styles.icons}>
				<div className={styles.icon}><TruckIcon/></div>	
					<h2 className={styles.detailsTitle}>Deliveries</h2>
				</div>
					<ul>
						<li className={styles.li}>
							<p className={styles.boldText}>Standard € 9.00</p>{' '}
							<span className={styles.smallText}>4-7 business days</span>
						</li>
						<li className={styles.li}>
							<p className={styles.boldText}>Express € 12.00</p>
							<span className={styles.smallText}>1-2 business days</span>
						</li>
						<li className={styles.li}>
							<p className={styles.boldText}>Standard € 9.00</p>
							<span className={styles.smallText}>4-7 business days</span>
						</li>
					</ul>
				</article>
				<article className={styles.detail}>
				<div className={styles.icons}>
				<div className={styles.icon}><ReturnIcon/></div>	
				<h2 className={styles.detailsTitle}>Returns</h2></div>
					<ul className={styles.list}>
						<li className={styles.li}>
							<span className={styles.smallText}>Fast and easy returns</span>
						</li>
						<li className={styles.li}>
							<p className={styles.boldText}>Free returns</p>{' '}
							<span className={styles.smallText}>within 14 days</span>
						</li>
					</ul>
				</article>
			</div>
		</main>
	)
}

export default ProductDetails
