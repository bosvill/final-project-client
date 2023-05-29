import React from 'react'
import { Link } from 'react-router-dom'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styles from './ShoppingCart.module.css'
import CartIcon from '../icons/CartIcon'
import CloseIcon from '../icons/CloseIcon'
import Button from '../UI/Button'

const ShoppingCart = () => {
	return (
		<div>
			<DropdownMenu.Root modal={true}>
				<DropdownMenu.Trigger className={styles.iconBtn}>
					<CartIcon />
				</DropdownMenu.Trigger>
				<DropdownMenu.Portal>
					<DropdownMenu.Content sideOffset={10} loop={true} className={styles.cart}>
						<DropdownMenu.Label className={styles.label}>
							Your Cart (0)
							<div className={styles.rightslot}>
								<CloseIcon  className={styles.iconBtn} />
							</div>
						</DropdownMenu.Label>
						<DropdownMenu.Separator className={styles.separator}/>
						<DropdownMenu.Item className={styles.label}>
							Estimated Total
							<div className={styles.rightslot}>0</div>
						</DropdownMenu.Item>
						<DropdownMenu.Item className='DropdownMenuItem'>
							<Button children='View Cart' />
						</DropdownMenu.Item>
						<DropdownMenu.Item className={styles.link}>
							<Link to='/'>Continue shopping</Link>
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
		</div>
	)
}

export default ShoppingCart
