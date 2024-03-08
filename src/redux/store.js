import { configureStore } from '@reduxjs/toolkit'
import { contactReducer } from './contacts/contacts.slice'
import { filterReducer } from './filters/filters.slice'

export const store = configureStore({
	reducer: {
		contacts: contactReducer,
		filters: filterReducer,
	},
})
