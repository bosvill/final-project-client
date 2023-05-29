import './App.css'
import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, stopLoading } from './features/auth/authSlice.js'
import routes from './routes/routes.js'
import Fallback from './pages/Fallback'

function App() {
	// grab user credentials from state
	const dispatch = useDispatch()
	const { isLoading } = useSelector(state => state.auth)

	useEffect(() => {
		const token = localStorage.getItem('accessToken')

		if (token?.length) {
			dispatch(fetchUser(token))
		} else {
			dispatch(stopLoading())
		}
	}, [dispatch])

	return (
		<>
			<RouterProvider router={routes} fallbackElement={<Fallback />} />
			<Toaster
				position='top-center'
				reverseOrder={false}
				containerClassName='toaster'
				toastOptions={{
					// Define default options
					className: '',
					duration: 10000,
					style: {
						background: '#363636',
						color: '#fff',
						borderRadius: 'none'
					},

					// Default options for specific types
					success: {
						duration: 10000,
						theme: {
							primary: 'green',
							secondary: 'black'
						}
					}
				}}
			/>
		</>
	)
}

export default App
