import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactList from '../../components/ContactList/ContactList'
import SearchBox from '../../components/SearchBox/SearchBox'
import { addContact, fetchContacts } from '../../redux/contacts/operations'
import css from './ContactsPage.module.css'

const ContactsPage = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchContacts())
	}, [dispatch])

	const createContact = values => {
		const { contactname, contactphone } = values
		dispatch(addContact({ name: contactname, phone: contactphone }))
	}
	return (
		<>
			<div className={css.ContactsPage}>
				<h1>Phonebook</h1>
				<ContactForm onSubmit={createContact} />
				<SearchBox />
				<ContactList />
			</div>
		</>
	)
}

export default ContactsPage
