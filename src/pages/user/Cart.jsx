import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { getSubTotal } from '../../utils/cart'
import styles from './Checkout.module.css'
import Button from '../../UI/Button'
import Radio from '../../UI/Radio'
import CartItem from '../../components/CartMenu/CartMenuItem'
//import Payment from './Payment'

const Cart = () => {
	const [shipping, setShipping] = useState(12)

	const { cart } = useSelector(state => state.cart)
	const navigate = useNavigate()
	const { _id, title, price, size, color, quantity } = cart
	const dispatch = useDispatch()

	const subtotal = getSubTotal(cart).totalPrice
	const totalQty = getSubTotal(cart).totalQuantity

	useEffect(() => {
		if (subtotal >= 200 && shipping == 12) {
			setShipping(0)
			console.log(shipping)
		}
		if (subtotal <= 200 && shipping == 12) {
			setShipping(12)
		}
	}, [totalQty, shipping])
	console.log(cart)

	return (
		<div className={styles.cartContainer}>
			<main className={styles.cart}>
				<h1 className={styles.cartTitle}>Shopping Bag</h1>
				{!totalQty ? (
					<div className={styles.cartEmpty}>
						<h6>Your shopping bag is currently empty</h6>
						<div className={styles.btnWrapper}>
							<Button children='Start shopping' onClick={() => navigate('..')} />
						</div>
					</div>
				) : (
					<>
						<section className={styles.items}>
							<div className={styles.titleWrapper}>
								<h5 className={styles.sectionTitle}>My bag ({totalQty})</h5>
							</div>
							{cart.map(el => (
								<CartItem key={v4()} {...el} />
							))}
						</section>
						<aside className={styles.summary}>
							<div className={styles.titleWrapper}>
								<h5 className={styles.sectionTitle}>Summary</h5>
							</div>
							<div className={styles.sectionItems}>
								<div className={styles.sectionItem}>
									<h4>Subtotal</h4> <span className={styles.price}>€ {subtotal}</span>
								</div>

								<div className={styles.sectionItem}>
									<h4>Shipping</h4> <span className={styles.price}>€ {shipping}</span>
								</div>

								<div className={styles.sectionItem}>
									<h4>Taxes</h4> <span className={styles.price}>included</span>
								</div>

								<div className={styles.sectionItem}>
									<h4>Total Amount</h4>
									<span className={styles.price}>€ {subtotal + Number(shipping)}</span>
								</div>
							</div>
							<Button children='Checkout' onClick={()=>navigate('checkout')}/>
						</aside>
						<section className={styles.delivery}>
							<div className={styles.titleWrapper}>
								<h5 className={styles.sectionTitle}>Select delivery method</h5>
							</div>
							<form>
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
							</form>
						</section>
						{/* <Payment /> */}
					</>
				)}
			</main>
		</div>
	)
}

export default Cart
