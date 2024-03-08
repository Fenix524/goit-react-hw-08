import { createSlice } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'

const initialState = {
	name: '',
}

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFilter(state, { payload }) {
			return { ...state, name: payload }
		},
	},
})

export const { setFilter } = filtersSlice.actions

const persistConfig = {
	key: 'filters',
	storage,
}

export const filterReducer = persistReducer(persistConfig, filtersSlice.reducer)
