import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { popupMessageReset } from '../../redux/contacts/contacts.slice'
import { deleteContact } from '../../redux/contacts/operations'
import {
	contactArrByFilters,
	selectContacts,
	selectContactsPopup,
} from '../../redux/contacts/selectors'
import { showMessage } from '../../utils/alerts/PopupMessage'
import Contact from '../Contact/Contact'
import ContactChangeModal from '../ContactChangeModal/ContactChangeModal'
import css from './ContactList.module.css'

const ContactList = () => {
	const dispatch = useDispatch()
	const { error, isLoading } = useSelector(selectContacts)
	const contactArr = useSelector(contactArrByFilters)
	const message = useSelector(selectContactsPopup)
	const [isVisibleModal, setVisibleModal] = useState(false)
	const [changeContactData, setChangeContactData] = useState({})

	useEffect(() => {
		showMessage(message.type, message.text)
		dispatch(popupMessageReset())
	}, [message])

	const openModal = userData => {
		// console.log('Open change form', userData)
		setChangeContactData(userData)
		setVisibleModal(true)
	}

	const closeModal = () => {
		setChangeContactData({})
		setVisibleModal(false)
	}

	return (
		<>
			{isLoading && <b>Loading tasks...</b>}
			{error && <b>{error}</b>}
			<ul className={css.ContactList}>
				{contactArr.map(({ id, name, number }) => (
					<Contact
						key={id}
						id={id}
						name={name}
						number={number}
						onContactDelete={() => dispatch(deleteContact(id))}
						openModal={openModal}
					/>
				))}
			</ul>
			{isVisibleModal && (
				<ContactChangeModal
					contactData={changeContactData}
					closeModal={closeModal}
				/>
			)}
		</>
	)
}

export default ContactList
