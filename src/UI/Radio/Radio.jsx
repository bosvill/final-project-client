import React from 'react'
import styles from './Radio.module.css'

const Radio = ({ name, value, label, ...props }) => {
	return (
		
			<div className={styles.item}>
				<input type='radio' name={name} value={value} className={styles.input} {...props} />
				<label htmlFor={value} className={styles.label}>
					{label}
				</label>
			</div>
	
	)
}

export default Radio
