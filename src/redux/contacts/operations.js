import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const fetchContacts = createAsyncThunk(
	'contacts/fetchAllContacts',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('/contacts')
			// console.log(response.data)
			return response.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message)
		}
	}
)

export const addContact = createAsyncThunk(
	'contacts/addContact',
	async ({ name, phone }, thunkAPI) => {
		try {
			const response = await axios.post('/contacts', {
				name: name,
				number: phone,
			})
			// console.log(response.data)
			return response.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message)
		}
	}
)

export const deleteContact = createAsyncThunk(
	'contacts/deleteContact',
	async (contactId, thunkAPI) => {
		try {
			const response = await axios.delete(`/contacts/${contactId}`)
			// console.log(response.data)
			return response.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message)
		}
	}
)
