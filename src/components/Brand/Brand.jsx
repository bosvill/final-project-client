import React from 'react'; 
import { useParams } from 'react-router-dom';
import styles from './Brand.module.css'
import ProductCard from '../ProductCard/ProductCard';
import { useDisplayBrandQuery } from '../../features/brand/brandApi';

const Brand = () => {
    const { store } = useParams()
	const { filter } = useParams()
    
    const { data: brandData, isLoading: isBrandsLoading } = useDisplayBrandQuery(filter)
    return (
        <section className={styles.filter}>
			<header className={styles.filterHeader}>{brand.title}</header>
			<div className={styles.filterWrapper}>

			<a href={brand.website} target='_blank' rel='noopener noreferrer'>
				<img src={brand.logo?.url} alt={brand.title} className={styles.filterImg} />
			</a>
			<p className={styles.description}> {brand.description}</p>
			</div>
			<section>
{filteredProducts.map(el=><ProductCard key={el.id} product={el}/>)}
			</section>
		</section>
    );
}

export default Brand;
