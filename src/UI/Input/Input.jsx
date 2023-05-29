import React from 'react'
import styles from './Input.module.css'

const Input = ({ name, label, register, errors, rules, ...props }) => {
	/* const errorMessages = errors.message
	console.log(errorMessages) */
	
	return (
		<div className={styles.fitem}>
			{errors ? (
				<span className={styles.error}>{errors.message} </span>
			) : (
				<label htmlFor={name} className={styles.label}>
					{label}
				</label>
			)}

			<input
				className={styles.input}
				name={name}
				aria-label={label}
				{...props}
				{...(register && register(name, rules))}
			/>
		</div>
	)
}

export default Input
