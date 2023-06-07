import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'
import { getSubTotal } from '../../utils/cart'
import styles from './Checkout.module.css'
import Button from '../../UI/Button'
import CartItem from '../../components/CartMenu/CartMenuItem'
import Summary from '../../components/Summary'

const Cart = () => {
	const [shipping, setShipping] = useState(12)
	const { cart } = useSelector(state => state.cart)
	const navigate = useNavigate()

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

	const handleClick = () => {
		navigate('/cart/checkout')
	}

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
						<Summary
							shipping={subtotal >= 200 ? 0 : 12}
							subtotal={subtotal}
							btn='Checkout'
							handleClick={handleClick}
						/>
						<section className={styles.cartEmpty}>
							<Link to='..' className={styles.link}>
								Continue shopping
							</Link>
							{cart.length > 4 ? (
								<div className={styles.btnWrapper}>
									<Button children='Checkout' onClick={handleClick} />
								</div>
							) : null}
						</section>
					</>
				)}
			</main>
		</div>
	)
}

export default Cart
