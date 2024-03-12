import { createSlice } from '@reduxjs/toolkit'
import { MESSAGE_TYPES } from '../constants'
import {
	addContact,
	changeContact,
	deleteContact,
	fetchContacts,
} from './operations'

const initialState = {
	items: [],
	isLoading: false,
	error: null,
	popupMessage: { text: null, type: MESSAGE_TYPES.INFO },
}

export const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		popupMessageReset(state) {
			state.popupMessage = initialState.popupMessage
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchContacts.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.isLoading = false
				state.error = null
				state.items = action.payload
			})
			.addCase(fetchContacts.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
			.addCase(addContact.fulfilled, (state, { payload }) => {
				state.popupMessage = {
					text: `Контакт ${payload.name} успішно додано`,
					type: MESSAGE_TYPES.SUCCESS,
				}
				state.items.push(payload)
				// console.log(payload)
			})
			.addCase(addContact.rejected, (state, { payload }) => {
				state.popupMessage = {
					text: `При створенні контакту ${payload.name} сталася помилка: 
				${payload}`,
					type: MESSAGE_TYPES.ERROR,
				}
			})
			.addCase(deleteContact.fulfilled, (state, { payload }) => {
				state.popupMessage = {
					text: `Контакт ${payload.name} успішно видалено`,
					type: MESSAGE_TYPES.SUCCESS,
				}
				state.items = state.items.filter(contact => contact.id !== payload.id)
			})
			.addCase(deleteContact.rejected, (state, { payload }) => {
				state.popupMessage = {
					text: `При видаленні контакту ${payload.name} сталася помилка: 
				${payload}`,
					type: MESSAGE_TYPES.ERROR,
				}
			})
			.addCase(changeContact.pending, state => {
				state.isLoading = true
			})
			.addCase(changeContact.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.error = null
				const updatedIndex = state.items.findIndex(
					item => item.id === payload.id
				)
				if (updatedIndex !== -1) {
					state.items[updatedIndex] = payload
				}
				state.popupMessage = {
					text: `Контакт ${payload.name} успішно оновлено`,
					type: MESSAGE_TYPES.SUCCESS,
				}
			})
			.addCase(changeContact.rejected, (state, { payload }) => {
				state.isLoading = false
				state.error = payload
				state.popupMessage = {
					text: `При оновленні контакту сталася помилка: ${payload}`,
					type: MESSAGE_TYPES.ERROR,
				}
			})
	},
})

export const { popupMessageReset } = contactsSlice.actions
export const contactReducer = contactsSlice.reducer
