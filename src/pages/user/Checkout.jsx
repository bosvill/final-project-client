import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { useUpdateUserMutation } from '../../features/auth/authApi'
import { removeAll } from '../../features/app/cartSlice'
//import NumberInput from '../../components/NumberInput'
import Summary from '../../components/Summary'
import CheckoutModal from '../../components/CheckoutModal/CheckoutModal'
import Input from '../../UI/Input'
import Button from '../../UI/Button'
import Radio from '../../UI/Radio'
import styles from './Checkout.module.css'
import { getSubTotal } from '../../utils/cart'
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css'

const Checkout = () => {
	const [shipping, setShipping] = useState(12)
	const dispatch = useDispatch()
	const { cart } = useSelector(state => state.cart)
	const [open, setOpen] = useState(false)

	const { user, isLoading } = useSelector(state => state.auth)

	const [updateUserInfo, { isLoading: isUserLoading }] = useUpdateUserMutation()
	const { _id, name, email, phone, address } = user

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		reset
	} = useForm({
		defaultValues: {
			name,
			email,
			phone,
			address
		}
	})

	useEffect(() => {
		if (subtotal >= 200 && shipping == 12) {
			setShipping(0)
			console.log(shipping)
		}
		if (subtotal <= 200 && shipping == 12) {
			setShipping(12)
		}
	}, [])

	const [state, setState] = useState({
		number: '',
		name: '',
		expiry: '',
		cvc: '',
		focus: ''
	})

	const handleInputChange = evt => {
		const { name, value } = evt.target
		setState(prev => ({ ...prev, [name]: value }))
		setValue('cardHolder', state.name)
		setValue(`${name}`, state[name])
	}

	const handleInputFocus = evt => {
		setState(prev => ({ ...prev, focus: evt.target.name }))
	}

	const subtotal = getSubTotal(cart).totalPrice

	const handlePayment = data => {
		console.log(errors, data)
		updateUserInfo({ uid: _id, address, phone, name, email })
		setOpen(true)
		setState(state.number(''))
		setState(state.name(''))
		setState(state.expiry(''))
		setState(state.cvc(''))
	}

	return (
		<div className={styles.cartContainer}>
			<main className={styles.cart}>
				<h1 className={styles.cartTitle}>Checkout</h1>

				<section className={styles.delivery}>
					<div className={styles.titleWrapper}>
						<h5 className={styles.sectionTitle}>Select delivery method</h5>
					</div>

					<div className={styles.sectionItem}>
						<Radio
							name='shipping'
							value={subtotal >= 200 ? 0 : 12}
							label='Standard (4-7 business days)'
							onChange={e => setShipping(e.target.value)}
						/>
						<span className={styles.price}>€ 12</span>
					</div>
					<div className={styles.sectionItem}>
						<Radio
							name='shipping'
							value={20}
							label='Express * (1-2 business days)'
							onChange={e => setShipping(e.target.value)}
						/>
						<span className={styles.price}>€ 20</span>
					</div>
					<div className={styles.sectionItem}>
						<Radio
							name='shipping'
							value={35}
							label='Guaranteed delivery Saturday morning'
							onChange={e => setShipping(e.target.value)}
						/>
						<span className={styles.price}>€ 35</span>
					</div>
				</section>
				<Summary
					shipping={shipping}
					subtotal={subtotal}
					btn='Confirm Payment'
					handleClick={handlePayment}
				/>
				<form onSubmit={handleSubmit(handlePayment)} className={styles.form}>
					<section className={styles.userData}>
						<div className={styles.titleWrapper}>
							<h5 className={styles.sectionTitle}>Shipping Address</h5>
						</div>
						<Input
							name='name'
							type='text'
							label='Full Name'
							autoComplete='off'
							errors={errors.name}
							rules={{
								required: 'Full Name is required'
							}}
							register={register}
						/>
						<Input
							name='email'
							type='email'
							label='Email'
							autoComplete='off'
							errors={errors?.email}
							register={register}
							rules={{
								required: 'Email is required',
								pattern: { value: /^\S+@\S+$/i, message: 'Enter a valid email' }
							}}
						/>
						<Input
							name='phone'
							type='text'
							label='Phone'
							rules={{ required: false }}
							register={register}
						/>
						<Input
							name='address'
							type='text'
							label='Address'
							placeholder={!address ? 'Enter your address' : address}
							errors={errors?.address}
							rules={{ required: ' Address is required!' }}
							register={register}
						/>
					</section>

					<section className={styles.userData}>
						<div className={styles.titleWrapper}>
							<h5 className={styles.sectionTitle}>Payment Details</h5>
						</div>
						<form className={styles.form}>
							<Cards
								number={state.number}
								expiry={state.expiry}
								cvc={state.cvc}
								name={state.name}
								focused={state.focus}
							/>
							<div className={styles.form}>
								<div className={styles.fitem}>
									<label htmlFor={name} className={styles.label}>
										Card Number
									</label>
									<input
										type='number'
										name='number'
										className={styles.input}
										value={state.number}
										onChange={handleInputChange}
										onFocus={handleInputFocus}
										/* {...(register && register(name, { required: true }))} */
									/>
								</div>

								<div className={styles.fitem}>
									<label htmlFor={name} className={styles.label}>
										Card Holder
									</label>

									<input
										type='text'
										name='name'
										className={styles.input}
										value={state.name}
										onChange={handleInputChange}
										onFocus={handleInputFocus}
										/* {...(register && register(name, { required: true }))} */
									/>
								</div>
							</div>
							<div>
								<div className={styles.expire}>
									<div className={styles.fitem}>
										<label htmlFor={name} className={styles.label}>
											Expiry
										</label>
										<input
											type='tel'
											name='expiry'
											className={styles.input}
											value={state.expiry}
											pattern='\d\d/\d\d'
											onChange={handleInputChange}
											onFocus={handleInputFocus}
											/* {...(register && register(name, { required: true }))} */
										/>
									</div>
									<div className={styles.fitem}>
										<label htmlFor={name} className={styles.label}>
											CVC
										</label>
										<input
											type='tel'
											name='cvc'
											className={styles.input}
											value={state.cvc}
											pattern='\d{3,4}'
											onChange={handleInputChange}
											onFocus={handleInputFocus}
											/* {...(register && register(name, { required: true }))} */
										/>
									</div>
								</div>
							</div>
						</form>
					</section>
					<div className={styles.fitem}>
						<Button type='submit' children='Confirm Payment' />
						{/* <Button children='View order' onClick={dispatch(removeAll())}/> */}
					</div>
				</form>
				{open && <CheckoutModal open={open} setOpen={setOpen} />}
			</main>
		</div>
	)
}

export default Checkout
