import { lazy } from 'react'
import { useSelector } from 'react-redux'
import SplitRouter from './SplitRouter'
import ComingSoon from '../pages/ComingSoon'
import Main from '../layouts/Main'
import StoreLayout from '../layouts/StoreLayout'
import ErrorBoundary from '../pages/ErrorBoundary'
import Store from '../pages/store'
import Login from '../pages/user/Login'
import ForgotPassword from '../pages/user/ForgotPassword'
import Signup from '../pages/user/Signup'
import Contact from '../pages/user/Contact'
import Profile from '../pages/user/Profile'
import Orders from '../pages/user/Orders'
import Checkout from '../pages/user/Checkout'
import Cart from '../pages/user/Cart'
import ProductDetails from '../pages/product/ProductDetails'
import { productLoader } from '../utils/loaders'
import About from '../pages/About/About'
import Filter from '../components/Filter/Filter'
import Brand from '../components/Brand/Brand'
import WishList from '../components/WishList'
import PrivateRoute from '../features/app/PrivateRoute'
import Shipping from '../pages/Shipping/Shipping'

const Home = lazy(() => import('../pages/Home'))

const mainRoutes = {
	path: '/',
	element: <Main />,
	errorElement: <ErrorBoundary />,
	children: [
		{
			path: '/',
			element: (
				<SplitRouter>
					<Home />
				</SplitRouter>
			)
		},

		{
			path: 'sign-in',
			element: (
				<SplitRouter>
					<Login />
				</SplitRouter>
			)
		},
		{
			path: 'forgot-password',
			element: (
				<SplitRouter>
					<ForgotPassword />
				</SplitRouter>
			)
		},

		{
			path: 'sign-up',
			element: (
				<SplitRouter>
					<Signup />
				</SplitRouter>
			)
		},

		{
			path: '/contact-us',
			element: (
				<SplitRouter>
					<Contact />
				</SplitRouter>
			)
		},
		{
			path: '/my-profile',
			element: (
				<PrivateRoute>
					<Profile />
				</PrivateRoute>
			)
		},
		{
			path: '/my-order',
			element: (
				<SplitRouter>
					<Orders />
				</SplitRouter>
			)
		},
		{
			path: '/shipping',
			element: (
				<SplitRouter>
					<Shipping />
				</SplitRouter>
			)
		},

		{
			path: '/about',
			element: (
				<SplitRouter>
					<About />
				</SplitRouter>
			)
		},

		{
			path: '/cart',
			element: <Cart />
		},
		{
			path: '/cart/checkout',
			element: (
				<PrivateRoute>
					<Checkout />
				</PrivateRoute>
			)
		},
		{
			path: '/wishlist',
			element: (
				<PrivateRoute>
					<WishList />
				</PrivateRoute>
			)
		},
		{
			path: '/product/:pid',
			element: <ProductDetails />,
			loader: productLoader
		},
		{
			element: <StoreLayout />,
			children: [
				{ path: ':store', element: <Store /> } /*  ,
				{
					path: ':store/:brand',
					element: (
						<SplitRouter>
							<Brand />
						</SplitRouter>
					)
				} */,
				{
					path: ':store/:brand/:fid',
					element: (
						<SplitRouter>
							<Filter />
						</SplitRouter>
					)
				}
			]
		},
		{
			path: '*',
			element: (
				<SplitRouter>
					<ComingSoon />
				</SplitRouter>
			)
		}
	]
}

export default mainRoutes
