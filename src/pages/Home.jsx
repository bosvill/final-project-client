import React from 'react'
import { useDisplayStoresQuery } from '../features/store/storeApi'
import Fallback from './Fallback'
import StoreCard from '../components/StoreCard'

const Home = () => {
	const { data: storeData, loading } = useDisplayStoresQuery({})
	console.log(storeData)
	const stores = storeData?.data || []

	return (
		<>
			
			<main className='container'>
				{loading ? (
					<Fallback />
				) : (
					stores.map(el => (
						<StoreCard
							path={el.title.toLowerCase()}
							img={el.thumbnail.url}
							store={el.title}
							key={el._id}
						/>
					))
				)}
			</main>
		</>
	)
}

export default Home
