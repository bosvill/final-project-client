import React from 'react'
import styles from './StoreSkeleton.module.css'

const StoreSkeleton = () => {
	return (
		<main className={styles.main}>
			<nav>
				{[1, 2, 3, 4, 5].map(el => (
					<div key={el} className={styles.link}></div>
				))}
			</nav>
			<section className={styles.container}>
				<aside className={styles.sidebar}>
					{[1, 2, 3, 4].map(el => (
						<div key={el} className={styles.side}></div>
					))}
				</aside>
				<section className={styles.section}>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(el => (
						<div className={styles.card} key={el}></div>
					))}
				</section>
			</section>
		</main>
	)
}

export default StoreSkeleton
