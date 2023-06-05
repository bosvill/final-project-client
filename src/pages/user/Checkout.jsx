import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import LazyLoadingImage from '../../components/LazyLoadingImage'
import NumberInput from '../../components/NumberInput'
import Input from '../../UI/Input'
import Button from '../../UI/Button'
import styles from './Checkout.module.css'

const Checkout = () => {
	const getImageUrl = imgName => '/assets/checkout/' + imgName

	const [isOpen, setIsOpen] = useState(false)
	const [cardNumber, setCardNumber] = useState('')
	const [cardIcon, setCardIcon] = useState(getImageUrl('unknown.png'))

	const {
		auth: {
			user: { name, email, phone, address, cart }
		}
	} = useSelector(state => state)
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: {
			name,
			email,
			phone,
			address,
			cardHolder: name
		}
	})

	// find subtotal from cart
	let subtotal = 0
	cart?.forEach(item => {
		subtotal += item?.product?.price * item?.quantity
	})

	const getCardType = cardNumber => {
		let visaRegEx = /^4[0-9]{12}(?:[0-9]{3})?$/
		let mastercardRegEx = /^5[1-5][0-9]{14}$/
		let amexRegEx = /^3[47][0-9]{13}$/
		let discoverRegEx = /^6(?:011|5[0-9]{2})[0-9]{12}$/
		if (visaRegEx.test(cardNumber)) {
			return 'Visa'
		} else if (mastercardRegEx.test(cardNumber)) {
			return 'Mastercard'
		} else if (amexRegEx.test(cardNumber)) {
			return 'American Express'
		} else if (discoverRegEx.test(cardNumber)) {
			return 'Discover'
		} else {
			return 'Unknown'
		}
	}

	const detectCardType = cardNumber => {
		setCardNumber(cardNumber)

		let cardType = getCardType(cardNumber)

		if (cardType === 'Visa') {
			setCardIcon(getImageUrl('visa.png'))
		} else if (cardType === 'Mastercard') {
			setCardIcon(getImageUrl('mastercard.png'))
		} else if (cardType === 'American Express') {
			setCardIcon(getImageUrl('amex.png'))
		} else {
			setCardIcon(getImageUrl('unknown.png'))
		}
	}

	const handlePayment = data => {
		console.log(errors)
		setIsOpen(true)
	}

	return (
		<div className={styles.cartContainer}>
			<main className={styles.cart}>
				<h1 className={styles.cartTitle}>Checkout</h1>
				<form onSubmit={handleSubmit(handlePayment)}>
					<section>
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
					<section>
						<div className={styles.titleWrapper}>
							<h5 className={styles.sectionTitle}>Payment Details</h5>
						</div>
						<NumberInput
							name='cardNumber'
							id='cardNumber'
							value={cardNumber}
							rules={{ required: true }}
							register={register}
							onChange={detectCardType}
						/>

						<Input
							name='cardHolder'
							type='text'
							label="Card Holder's Name"
							register={register}
							rules={{ required: true }}
						/>
						<div>
							<Input
								{...register('expMonth', { required: true })}
								name='expMonth'
								label='Month'
								type='text'
								placeholder='00'
								rules={{ required: true }}
								register={register}
							/>
							<Input
								name='expYear'
								type='text'
								placeholder='0000'
								rules={{ required: true }}
								register={register}
							/>
							<Input
								name='ccv'
								type='text'
								placeholder='000'
								rules={{ required: true }}
								register={register}
							/>
						</div>
						<div>
							<LazyLoadingImage src={cardIcon} width='120' height='160' />
						</div>
					</section>
					<div className={styles.fitem}>
						<Button type='submit' children='Confirm Payment' />
					</div>
				</form>
			</main>
		</div>
	)
}

export default Checkout
