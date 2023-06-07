import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import Fallback from '../../pages/Fallback'

const PrivateRoute = ({ children }) => {
	const { pathname } = useLocation()
	const { user, isLoading } = useSelector(state => state.auth)
const isAuth = Object.keys(user).length ? true : false

	if (isLoading) {
		return <Fallback />
	}

	if (!isLoading && !isAuth) {
		return <Navigate replace to='/sign-in' state={{ path: pathname }} />
	}

	return children
}

export default PrivateRoute
