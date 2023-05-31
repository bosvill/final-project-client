import React, { useState } from 'react'
import styles from './Carousel.module.css'
import IconButton from '../../UI/IconButton/IconButton'
import LazyLoadingImage from '../LazyLoadingImage'
import ChevronLeft from '../../icons/ChevronLeft'
import ChevronRight from '../../icons/ChevronRight'

const Carousel = ({ gallery }) => {
	const [slide, setSlide] = useState(0)
	console.log(gallery)
	const nextSlide = () => {
		setSlide(slide === gallery.length - 1 ? 0 : slide + 1)
	}

	const prevSlide = () => {
		setSlide(slide === 0 ? gallery.length - 1 : slide - 1)
	}
	return (
		<>
			<div className={styles.previews}>
				{gallery.map((p, index) => (
					<IconButton
						key={index}
						type='button'
						onClick={() => setSlide(index)}
						className= {slide === index
                        ? [`${styles.btn}`, `${styles.active}`].join('')
                        : `${styles.btn}`}>
                            
						 <img
							key={p?._id}
							src={p?.url}
							alt={p?.public_id}
							className={styles.preview}/>
                
						
					</IconButton>
				))}
			</div>
			<div className={styles.carousel}>
				<ChevronLeft onClick={prevSlide} className={styles.arrowLeft} />
				{gallery.length
					? gallery.map((image, index) => (
							<img
								key={image?._id}
								src={image?.url}
								alt={image?.public_id}
								className={
									slide === index
										? `${styles.slide}`
										: [`${styles.slide}`, `${styles.hidden}`].join(' ')
								}
							/>
					  ))
					: null}
				<ChevronRight onClick={nextSlide} className={styles.arrowRight} />
			</div>
		</>
	)
}

export default Carousel
