import React from 'react'
import styles from './IconButton.module.css'

const IconButton = ({ children, ...props }) => {
	return (
		<button {...props} className={styles.btn}>
			{children}
		</button>
	)
}

export default IconButton
