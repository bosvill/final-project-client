import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Search.module.css'
import { useDisplayProductsQuery } from '../../features/product/productApi'
import { useNavigate } from 'react-router-dom'

const Search = () => {
	const [input, setInput] = useState('')
	const [searchedProducts, setSearchedProducts] = useState([])
	const [searchProduct, setSearchProduct] = useState({})
	const { data: productsData, isLoading: isProductsLoading } = useDisplayProductsQuery({
		page: 0,
		limit: 0
	})
	const navigate = useNavigate()

	const products = productsData?.data || []

	const handleSearchKeyword = searchWord => {
		const filteredProducts = products.filter(product =>
			product.title?.toLowerCase().includes(searchWord?.toLowerCase())
		)
		setInput(searchWord)
		setSearchedProducts(filteredProducts)
	}

	const handleInputSearch = event => {
		event.preventDefault()

		navigate(`/product/${searchProduct?.title}/${searchProduct?._id}`)
		event.target.reset()
	}

	return (
		<div className={styles.centery} onSubmit={handleInputSearch}>
			<form className={styles.form}>
				<input
					type='search'
					className={styles.input}
					name='search'
					value={input}
					placeholder='Start your search'
					onChange={e => handleSearchKeyword(e.target.value)}
				/>
			</form>
			{searchedProducts?.length !== 0 && (
				<div className={styles.search}>
					{searchedProducts?.map(({ _id, title, thumbnail }) => (
						<Link to={`/product/${_id}`} key={_id}>
							<div className={styles.centerx}>
								<img src={`${thumbnail.url}`} alt='' className={styles.preview} />
								<h6>{title}</h6>
							</div>
						</Link>
					))}
				</div>
			)}
		</div>
	)
}

export default Search
