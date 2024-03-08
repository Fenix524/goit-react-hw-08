import { createSelector } from '@reduxjs/toolkit'
import { selectFilter } from '../filters/selectors'

export const selectContacts = state => state.contacts
export const selectContactsPopup = state => state.contacts.popupMessage
export const selectContactsList = state => state.contacts.items
console.log(selectContactsList)

export const contactArrByFilters = createSelector(
	[selectContactsList, selectFilter],
	(contactArr, filterText) => {
		console.log(contactArr, filterText)
		return contactArr.filter(contact =>
			contact.name?.toLowerCase().includes(filterText?.toLowerCase())
		)
	}
)
