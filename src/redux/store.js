import { configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistStore,
} from 'redux-persist'
import { authReducer } from './auth/auth.slice'
import { contactReducer } from './contacts/contacts.slice'
import { filterReducer } from './filters/filters.slice'

export const store = configureStore({
	reducer: {
		contacts: contactReducer,
		filters: filterReducer,
		auth: authReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
