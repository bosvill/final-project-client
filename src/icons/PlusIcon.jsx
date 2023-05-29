import React from 'react'
import styles from './Icon.module.css'

const PlusIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className={styles.svg}>
			<path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
		</svg>
	)
}

export default PlusIcon
