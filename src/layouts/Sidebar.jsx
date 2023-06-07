import React, { useState, useEffect } from 'react'
import { v4 } from 'uuid'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from '../UI/Button'
import * as Select from '@radix-ui/react-select'
import styles from './StoreLayout.module.css'
import { useDisplayStoresQuery } from '../features/store/storeApi'
import { useDisplayBrandsQuery } from '../features/brand/brandApi'
import { useDisplayCategoriesQuery } from '../features/category/categoryApi'
import { useDisplaySubcategoriesQuery } from '../features/subcategory/subcategoryApi'

const Sidebar = () => {
	const [brand, setBrand] = useState()
	const [category, setCategory] = useState()
	const [subcategory, setSubcategory] = useState()

	const { store } = useParams()
	const navigate = useNavigate()

	const { data: brandsData, isLoading: isBrandsLoading } = useDisplayBrandsQuery({
		/* page: 1,
		limit: brandLimit */
	})
	const { data: categoriesData, isLoading: isCategoriesLoading } = useDisplayCategoriesQuery({
		/* page: 1,
		limit: categoryLimit */
	})
	const { data: subcategoriesData, isLoading: isStoresLoading } = useDisplaySubcategoriesQuery({
		/* page: 1,
		limit: 3 */
	})

	/* useEffect(() => {
		se
		};
	}, [brand]); */

	/* useEffect(() => {
		if (!subcategory) {
			setCategory('All')
		} else if (subcategory === 'Bags' || 'Glasses') {
			setCategory('Asseccories')
		} else if (subcategory === 'Boots' || 'Sneakers') {
			setCategory('Shoes')
		} else setCategory('Clothing')
	}, [subcategory]) */

	const brands = brandsData?.data || []
	console.log(brand)
	//const fid = brands[brand]?._id
	const categories = categoriesData?.data || []
	console.log(category)
	const subcategories = subcategoriesData?.data || []
	console.log(subcategory)

	const handleFilter = () => {
		if (brand && !category && !subcategory) {
			navigate(`/${store}/${brand.title}/${brand._id}`)
		}
		if (!subcategory) {
			navigate(`${store}/${brand}/${category}`)
		} else {
			navigate(`${store}/${brand}/${subcategory}`)
		}
	}
	return (
		<aside className={styles.sidebar}>
			<div className={styles.content}>
				<div className={styles.centery}>
					<Select.Root value={brand} onValueChange={setBrand}>
						<Select.Trigger className={styles.trigger}>
							<Select.Value placeholder='Designer' />
							<Select.Icon />
						</Select.Trigger>
						<Select.Content className={styles.select} position='popper'>
							<Select.Viewport className={styles.list}>
								{!brands.length
									? null
									: brands.map(el => (
											<>
												<Link
													to={`${store}/${el.title}/${el._id}`}
													className={styles.item}
													key={v4()}>
													{' '}
													{el.title}
												</Link>
												{/* <Select.Item
													asChild
													key={v4()}
													value={ el.title }
													className={styles.item}>
													<Select.ItemText>{el.title}</Select.ItemText>
												</Select.Item>
												<Select.Separator className={styles.separator} /> */}
											</>
									  ))}
							</Select.Viewport>
						</Select.Content>
					</Select.Root>

					<Select.Root value={category} onValueChange={setCategory}>
						<Select.Trigger className={styles.trigger}>
							<Select.Value placeholder='Department'></Select.Value>
							<Select.Icon />
						</Select.Trigger>
						<Select.Content className={styles.select} position='popper'>
							<Select.Viewport className={styles.list}>
								{!categories.length
									? null
									: categories.map(el => (
											<>
												<Select.Item key={v4()} value={el.title} className={styles.item}>
													<Select.ItemText>{el.title}</Select.ItemText>
												</Select.Item>
												<Select.Separator className={styles.separator} />
											</>
									  ))}
							</Select.Viewport>
						</Select.Content>
					</Select.Root>
					<Select.Root value={subcategory} onValueChange={setSubcategory}>
						<Select.Trigger className={styles.trigger}>
							<Select.Value placeholder='Category' />
							<Select.Icon />
						</Select.Trigger>
						<Select.Content className={styles.select} position='popper'>
							<Select.Viewport className={styles.list}>
								{!subcategories.length
									? null
									: subcategories.map(el => (
											<>
												<Select.Item key={v4()} value={el.title} className={styles.item}>
													<Select.ItemText>{el.title}</Select.ItemText>
												</Select.Item>
												<Select.Separator className={styles.separator} />
											</>
									  ))}
							</Select.Viewport>
						</Select.Content>
					</Select.Root>
					<Button onClick={handleFilter}>Filter </Button>
				</div>
			</div>
		</aside>
	)
}

export default Sidebar
