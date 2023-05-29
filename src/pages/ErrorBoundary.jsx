import React from 'react'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

const ErrorBoundary = () => {
	const error = useRouteError()

	if (isRouteErrorResponse(error)) {
		if (error.status === 404) {
			return <div>This page doesn't exist!</div>
		}

		if (error.status === 401) {
			return <div>You aren't authorized to see this</div>
		}

		if (error.status === 503) {
			return <div>Looks like our API is down</div>
		}

		if (error.status === 418) {
			return <div>🫖</div>
		}
	}
	return (
		<div className=''>
			<h3 className=''>Oops.. Something went wrong</h3>
			<h3>
				{error.status}
				{error.message}
			</h3>
		</div>
	)
}

export default ErrorBoundary
