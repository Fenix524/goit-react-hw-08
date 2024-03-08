import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://65e3a6ab88c4088649f5fba6.mockapi.io'

export const fetchContacts = createAsyncThunk(
	'contacts/fetchAllContacts',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('/contacts')
			console.log(response.data)
			return response.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message)
		}
	}
)

export const addContact = createAsyncThunk(
	'contacts/addContact',
	async ({ id, name, phone }, thunkAPI) => {
		try {
			const response = await axios.post('/contacts', { id, name, phone })
			console.log(response.data)
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
			console.log(response.data)
			return response.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message)
		}
	}
)
