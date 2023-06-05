import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Popover from '@radix-ui/react-popover'
import styles from './CartMenu.module.css'
import CartIcon from '../../icons/CartIcon'
import CloseIcon from '../../icons/CloseIcon'
import Button from '../../UI/Button'
import CartMenuItem from './CartMenuItem'
import { getSubTotal } from '../../utils/cart'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'

const CartMenu = () => {
	const navigate = useNavigate()
	const { cart } = useSelector(state => state.cart)
	//console.log(cart)
	const subtotal = getSubTotal(cart).totalPrice
	const totalQty = getSubTotal(cart).totalQuantity
	
	return (
		<div>
			<Popover.Root modal={true}>
				<Popover.Trigger className={styles.iconBtn}>
					<div className={styles.badgeBtn}>
						{cart.length >= 1 ? (
							<span className={styles.badge}>{totalQty}</span>
						) : null}
						<CartIcon />
					</div>
				</Popover.Trigger>
				<Popover.Portal>
					<Popover.Content sideOffset={20} className={styles.cart}>
						<div className={styles.label} key={v4()}>
							Your Bag ( {totalQty} )
							<div className={styles.rightslot}>
								<CloseIcon className={styles.iconBtn} />
							</div>
						</div>
						<hr className={styles.separator} />
						{!cart.length ? (
							<div key={v4()}>
								<h6 className={styles.cartEmpty}>Your shopping bag is currently empty</h6>
								<Button children='Start shopping' onClick={() => navigate('..')} />
							</div>
						) : (
							cart.map(el => (
								<>
									<div key={v4()} className={styles.item}>
										<CartMenuItem key={v4()} {...el} />
									</div>
									<hr className={styles.separator} key={v4()} />
								</>
							))
						)}
						{cart.length >= 1 ? (
							<>
								<div className={styles.label}>
									Estimated Total
									<div className={styles.rightslot}>€ {subtotal}</div>
								</div>
								<div className='PopoverItem'>
									<Button children='Checkout' onClick={() => navigate('/cart')} />
								</div>
								<div className={styles.link}>
									<Link to='..'>Continue shopping</Link>
								</div>
							</>
						) : null}
					</Popover.Content>
				</Popover.Portal>
			</Popover.Root>
		</div>
	)
}

export default CartMenu
