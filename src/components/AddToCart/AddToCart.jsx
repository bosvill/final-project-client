import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../features/app/cartSlice'
import { useUpdateUserMutation } from '../../features/auth/authApi'
import { availableColors, filterSizesByColor } from '../../utils/SizeAndColorFilters'
import styles from './AddToCart.module.css'
import Button from '../../UI/Button'
import Size from '../../UI/Size'

const AddToCart = ({ details, _id, title, price, thumbnail }) => {
	const [color, setColor] = useState('')
	const [sizes, setSizes] = useState('')
	//const [size, setSize] = useState('')
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const colors = availableColors(details)

	//console.log(color)

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue
	} = useForm()

	useEffect(() => {
		setColor(availableColors(details)[0])
		setSizes(filterSizesByColor(details, color))
	}, [])

	useEffect(() => {
		setValue('color', color)
		setSizes(filterSizesByColor(details, color))
	}, [color])

	const onSubmit = data => {
		console.log(data, color)
		dispatch(
			addToCart({
				_id,
				title,
				thumbnail,
				price,
				color: data.color,
				size: data.size
			})
		)
		console.log(data, color)
	}

	/* for wishList  */
	const [addToWishList, { isLoading: isWishListLoading, isSuccess: isWishListSuccess }] =
		useUpdateUserMutation()
	const { user } = useSelector(state => state.auth)

	const handleWishList = () => {
		if (!user) navigate('sign-in')
		addToCart({
			uid: user?._id,
			userData: { wishList: { product: _id } }
		})
	}
	/* useEffect(() => {
		if (isWishListSuccess) {
			toast.success('Product added to WishList!')
			setTimeout(() => {
				// window.location.reload();
				navigate(0)
			}, 1000)
		}
	}, [isWishListSuccess, navigate]) */

	/* const handleColorChange = (color, e) => {
		setColor(e.target.value)
		setSizes(filterSizesByColor(details, color))
		//setValue('color', color, { shouldValidate: true })
	} */
	return (
		<>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.formItem}>
					<label htmlFor='color' className={styles.label}>
						Color
					</label>
					<div className={styles.colors}>
						{colors.length
							? colors.map((el, idx) => (
									<div
										key={v4()}
										className={
											color === el
												? `${styles.active}` /* [`${styles.color}`, `${styles.active}`].join(' ') */
												: `${styles.color}`
										}>
										<button
											name='color'
											/* value={color} */
											className={styles.color}
											style={{ backgroundColor: el }}
											key={v4()}
											{...register('color', { required: true })}
											onClick={() => setColor(el)}
										/>
									</div>
							  ))
							: null}
					</div>
				</div>
				<div className={styles.formItem}>
					<Size
						name='size'
						sizes={filterSizesByColor(details, color)}
						errors={errors?.size}
						rules={{
							required: 'Please select a size'
						}}
						register={register}
					/>
				</div>

				{/* <SizeSelect sizes={sizes} /> */}
				<div className={styles.formItem}>
					<Button children='Add to bag' type='submit' />
				</div>
			</form>
			<Button children='Wish list' type='submit' onClick={handleWishList} />
		</>
	)
}

export default AddToCart
