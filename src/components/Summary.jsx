import React from 'react'
import styles from '../pages/user/Checkout.module.css'
import Button from '../UI/Button'

const Summary = ({ shipping, subtotal, handleClick, btn }) => {
	
	return (
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
			<Button children={btn} onClick={handleClick} />
		</aside>
	)
}

export default Summary
