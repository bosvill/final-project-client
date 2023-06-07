import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Filter.module.css'
import { useDisplayStoresQuery } from '../../features/store/storeApi'
import { useDisplayBrandQuery } from '../../features/brand/brandApi'
import {useDisplayStoreProductsQuery} from '../../features/product/productApi'
import { useDisplayCategoriesQuery } from '../../features/category/categoryApi'
import { useDisplayCategoryQuery} from '../../features/category/categoryApi'
import { useDisplaySubcategoriesQuery } from '../../features/subcategory/subcategoryApi'
import ProductCard from '../ProductCard/ProductCard'

const Filter = () => {
	const { store } = useParams()
	const { filter } = useParams()
	const { fid } = useParams()
	const [explore, setExplore] = useState(filter)
	const { data: brandData, isLoading: isBrandsLoading } = useDisplayBrandQuery(fid)
	const { data: categoriesData, isLoading: isCategoriesLoading } = useDisplayCategoriesQuery({
		/* page: 1,
		limit: categoryLimit */
	})
	const { data: subcategoriesData, isLoading: isStoresLoading } = useDisplaySubcategoriesQuery({
		/* page: 1,
		limit: 3 */
	})

	const { data: categoryData, isLoading: isCategoryLoading } = useDisplayCategoryQuery({
		/* page: 1,
		limit: categoryLimit */
	})

	const {data:productsData, isLoading:isProductsLoading}= useDisplayStoreProductsQuery(store)
	useEffect(() => {
		setExplore(filter)
		console.log(explore)
	}, [filter])

	const brand = brandData?.data || []
	const products = productsData?.data
	const filteredProducts = products.filter(el => el.brand?._id === fid)
	console.log('brand:',brand)
	
	console.log(filter)
	const categories = categoriesData?.data || []
	console.log('categories:',categories)
	const category = categoryData?.data || []
	console.log('category:',category)
	const subcategories = subcategoriesData?.data || []
	console.log('subcategories:',subcategories)
	return (
		<section className={styles.filter}>
			<header className={styles.filterHeader}>{brand.title}</header>
			<div className={styles.filterWrapper}>

			<a href={brand.website} target='_blank' rel='noopener noreferrer'>
				<img src={brand.logo?.url} alt={brand.title} className={styles.filterImg} />
			</a>
			<p className={styles.description}> {brand.description}</p>
			</div>
			<section className={styles.grid}>
{filteredProducts.map(el=><ProductCard key={el.id} product={el}/>)}
			</section>
		</section>
	)
}

export default Filter
