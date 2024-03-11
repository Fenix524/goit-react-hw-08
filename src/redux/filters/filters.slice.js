import { createSlice } from '@reduxjs/toolkit'

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
export const filterReducer = filtersSlice.reducer
