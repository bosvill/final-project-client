import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../features/app/cartSlice'
import { useUpdateUserMutation } from '../../features/auth/authApi'
import {
	availableColors,
	filterSizesByColor,
	availableColorNames
} from '../../utils/SizeAndColorFilters'
import styles from './AddToCart.module.css'
import Button from '../../UI/Button'
//import WrapperSelect from './WrapperSelect'
import Size from '../../UI/Size'

const AddToCart = ({ details, _id, title, price, thumbnail }) => {
	const [color, setColor] = useState('')
	const [sizes, setSizes] = useState('')
	const [size, setSize] = useState('')
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const colors = availableColors(details)
	const colorNames = availableColorNames(details)
	//const colorName = details.filter((el, i) => el[i] === colors.indexOf(color))

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
		console.log(data)
	}

	/* for wishList  */
	const [addToWishList, { isLoading: isWishListLoading, isSuccess: isWishListSuccess }] =
		useUpdateUserMutation()
	const { user } = useSelector(state => state.auth)

	const handleWishList = () => {
		if (!user) navigate('/sign-in', { replace: true })
		addToWishList({
			uid: user?._id,
			userData: { wishList: { product: _id } }
		})
	}

	return (
		<>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.colors}>
					<div className={styles.colorLabels}>
						{colorNames &&
							colorNames.map(el => (
								<label htmlFor='color' className={styles.label}>
									{el}
								</label>
							))}
					</div>

					<div className={styles.colorBtns}>
						{colors.length
							? colors.map(el => (
									<div key={v4()} className={color === el ? `${styles.active}` : `${styles.color}`}>
										<button
											name='color'
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
					{/* <> React.Children.only expected to receive a single React element child. 
						<WrapperSelect name='wrapperSelect' control={control} sizes={sizes} />
					</> */}

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

				<div className={styles.formItem}>
					<Button children='Add to bag' type='submit' />
				</div>
			</form>
			<Button children='Wish list' type='submit' onClick={handleWishList} />
		</>
	)
}

export default AddToCart
