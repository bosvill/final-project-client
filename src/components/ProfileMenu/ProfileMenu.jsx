import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../features/auth/authSlice'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import ProfileIcon from '../../icons/ProfileIcon'
import OrderIcon from '../../icons/OrderIcon'
import LoginIcon from '../../icons/LoginIcon'
import LogoutIcon from '../../icons/LogoutIcon'
import ContactIcon from '../../icons/ContactIcon'
import styles from './ProfileMenu.module.css'

const ProfileMenu = () => {
	const dispatch = useDispatch()
	const { user } = useSelector(state => state.auth)

	return (
		<div>
			<DropdownMenu.Root modal={true}>
				<DropdownMenu.Trigger className={styles.iconbtn}>
					<ProfileIcon />
				</DropdownMenu.Trigger>
				<DropdownMenu.Portal>
					<DropdownMenu.Content sideOffset={10} loop={true} className={styles.profile}>
						{Object.keys(user).length ? (
							<DropdownMenu.Item className={styles.menu}>
								<div className={styles.user}>
											<h6 className={styles.name}>{user?.name}</h6>
											<p>{user?.email}</p>
										</div>
							</DropdownMenu.Item>
						) : (
							<DropdownMenu.Item className={styles.menu}>
								<Link to='/sign-in' className={styles.item}>
									<LoginIcon />
									<p>Login</p>
								</Link>
							</DropdownMenu.Item>
						)}

						<DropdownMenu.Separator className={styles.separator} />
						<DropdownMenu.Item className={styles.menu}>
							<Link to='/my-profile' key='profile' className={styles.item}>
								<ProfileIcon />
								<p>Profile</p>
							</Link>
						</DropdownMenu.Item>
						<DropdownMenu.Separator className={styles.separator} />
						<DropdownMenu.Item className={styles.menu}>
							<Link to='/my-order' key='order' className={styles.item}>
								<OrderIcon />
								<p>Orders</p>
							</Link>
						</DropdownMenu.Item>
						<DropdownMenu.Separator className={styles.separator} />
						<DropdownMenu.Item className={styles.menu}>
							<Link to='/contact-us' key='contact' className={styles.item}>
								<ContactIcon />
								<p>Contact</p>
							</Link>
						</DropdownMenu.Item>
						{/* <DropdownMenu.Arrow className={styles.arrow}/> */}
						{Object.keys(user).length !== 0 ? (
							<>
								<DropdownMenu.Separator className={styles.separator} />
								<DropdownMenu.Item className={styles.menu}>
									<button className={styles.item} onClick={() => dispatch(logout())}>
										<LogoutIcon />
										<p>Logout</p>
									</button>
								</DropdownMenu.Item>
							</>
						) : null}
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
		</div>
	)
}

export default ProfileMenu
