import { configureStore } from '@reduxjs/toolkit'
import apiSlice from '../api/apiSlice.js'
import uploadSlice from '../upload/uploadSlice.js'
import authSlice from '../auth/authSlice.js'
import updateSlice from '../update/updateSlice.js'
import { cartReducer } from './cartSlice.js'
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
	key: 'root',
	storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, cartReducer)

  export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		upload: uploadSlice,
		update: updateSlice,
		auth: authSlice,
		cart: persistedReducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(apiSlice.middleware)
})

 export const persistor = persistStore(store)
