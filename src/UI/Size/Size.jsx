import React from 'react'
import { v4 } from 'uuid'
import styles from './Size.module.css'

const Size = ({ sizes, name, rules, register, ...props }) => {
	return (
		<div className={styles.content}>
			{/* <label htmlFor='Size' className={styles.label}>
				Size
			</label> */}
			<select name='size' className={styles.select} {...register && register('size', rules)}>
				<option value="" className={styles.default}>Select Size</option>
				{sizes.length
					? sizes.map(el => (
							<option key={v4()} value={el} className={styles.option}>
								{el}
							</option>
					  ))
					: null}
			</select>
		</div>
	)
}

export default Size
