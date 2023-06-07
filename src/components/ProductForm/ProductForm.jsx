import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './ProductForm.module.css'
import Button from '../../UI/Button'

const ProductForm = ({ _id, details, props }) => {
	const [size, setSize] = useState('')
	const [color, setColor] = useState('')
	const addToCart = () => {
		const item = { _id, size, color, colorName }
		console.log(item)
	}

	//name='size' size={detail?.size} {...register('size')}

	const sizes = details.map(el => el.size)
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	console.log(sizes)
	return (
		<form className={styles.form} onSubmit={handleSubmit(addToCart)}>
			<h3 className={styles.title}>Size</h3>
			<div className={styles.formItem}></div>
			<h3 className={styles.title}>Color</h3>
			<div className={styles.formItem}>
				{/* <Color
					name='color'
					style='#353535'
					{...register('color')}
					}
				/> */}
			</div>
			<Button children='Add to bag' type='submit' />
		</form>
	)
}

export default ProductForm
