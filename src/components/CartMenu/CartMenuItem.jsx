import React from 'react'
import styles from './CartMenuItem.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { incrementQty, decrementQty, removeItem } from '../../features/app/cartSlice'
import PlusCircleIcon from '../../icons/PlusCircleIcon'
import CrossCircleIcon from '../../icons/CrossCircleIcon'
import MinusCircleIcon from '../../icons/MinusCircleIcon'

const CartMenuItem = ({ _id, title, price, size, color, quantity, thumbnail }) => {
	const dispatch = useDispatch()

	return (
		<article className={styles.cartItem}>
			<img src={`${thumbnail?.url}`} className={styles.cartImg} />
			<div className={styles.cartInfo}>
				<Link to={`/product/${_id}`} className={styles.titleLink}>{title}</Link>
				<p className={styles.size}>Size {size}</p>
				<p className={styles.color}>{color}</p>
			</div>
			<div className={styles.quantityWrapper}>
				<div className={styles.quantity}>
					<button
						className={styles.qtyBtn}
						onClick={() => dispatch(decrementQty({ _id, size, color }))}>
						<MinusCircleIcon viewbox='0 0 24 24' width={24} height={24} />
					</button>

					<p className={styles.qty}>{quantity}</p>
					<button
						className={styles.qtyBtn}
						onClick={() => dispatch(incrementQty({ _id, size, color }))}>
						<PlusCircleIcon />
					</button>
				</div>

				<button
					className={styles.remove}
					onClick={() => dispatch(removeItem({ _id, size, color }))}>
					<span className={styles.removeBtn}>
						<CrossCircleIcon />
					</span>
					Remove
				</button>
			</div>
			<h5 className={styles.price}>€ {price}</h5>
		</article>
	)
}

export default CartMenuItem
