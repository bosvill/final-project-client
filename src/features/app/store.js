import { configureStore } from '@reduxjs/toolkit'
import apiSlice from '../api/apiSlice.js'
import uploadSlice from '../upload/uploadSlice.js'
import authSlice from '../auth/authSlice.js'
import updateSlice from '../update/updateSlice.js'
import { cartReducer } from './cartSlice.js'

const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		upload: uploadSlice,
		update: updateSlice,
		auth: authSlice,
		cart: cartReducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store
