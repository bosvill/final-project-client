import React from 'react'
import { Form } from 'react-router-dom'
import Button from '../UI/Button'
import styles from './StoreLayout.module.css'

const Sidebar = () => {
	return (
		<aside className={styles.sidebar}>
			<Form className='center-y'>{/* <Dropdown /> */}</Form>
			<Button type='submit' children='Filter' />
		</aside>
	)
}

export default Sidebar
