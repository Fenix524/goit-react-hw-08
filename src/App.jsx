import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import { fetchContacts } from './redux/contacts/operations'
import './utils/alerts/PopupMessage'

function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchContacts())
	}, [dispatch])

	return (
		<>
			<div>
				<h1>Phonebook</h1>
				<ContactForm />
				<SearchBox />
				<ContactList />
			</div>
			<ToastContainer />
		</>
	)
}

export default App
