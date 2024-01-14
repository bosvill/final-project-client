import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: []
	},
	reducers: {
		addToCart: (state, action) => {
			const itemInCart = state.cart.find(
				item =>
					item._id === action.payload._id &&
					item.color === action.payload.color &&
					item.size === action.payload.size
			)
			if (itemInCart) {
				itemInCart.quantity++
			} else {
				state.cart.push({ ...action.payload, quantity: 1 })
			}
		},
		incrementQty: (state, action) => {
			console.log(action.payload)
			const item = state.cart.find(
				item =>
					item._id === action.payload._id &&
					item.color === action.payload.color &&
					item.size === action.payload.size
			)
			item.quantity++
		},
		decrementQty: (state, action) => {
			const item = state.cart.find(
				item =>
					item._id === action.payload._id &&
					item.color === action.payload.color &&
					item.size === action.payload.size
			)
			if (item.quantity === 1) {
				item.quantity = 1
			} else {
				item.quantity--
			}
		},
		removeItem: (state, action) => {
			console.log(action)
			const removeItem = state.cart.filter(
				item =>
					item._id !== action.payload._id ||
					item.color !== action.payload.color ||
					item.size !== action.payload.size
			)
			state.cart = removeItem
		},
		removeAll: state => []
	}
})

export const cartReducer = cartSlice.reducer
export const { addToCart, incrementQty, decrementQty, removeItem, removeAll } = cartSlice.actions
