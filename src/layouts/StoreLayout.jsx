import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import styles from './StoreLayout.module.css'

const StoreLayout = () => {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<Sidebar className={styles.sidebar} />
				<Outlet />
			</div>
		</main>
	)
}

export default StoreLayout
