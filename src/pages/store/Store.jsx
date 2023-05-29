import React from 'react'
import { useParams } from 'react-router-dom'
import { useDisplayStoreProductsQuery } from '../../features/product/productApi'
import StoreSkeleton from './StoreSkeleton'
import ProductCard from '../../components/ProductCard'
import styles from '../../layouts/StoreLayout.module.css'

const Store = () => {
	const { store } = useParams()
	const { data: productData, isLoading } = useDisplayStoreProductsQuery(store)
	const products = productData?.data || {}

	return (
		<>
			{isLoading ? (
				<StoreSkeleton />
			) : (
				<section className={styles.grid}>{products ? products.map(el => <ProductCard product={el} key={el._id} />) : null}</section>
			)}
		</>
	)
}

export default Store
