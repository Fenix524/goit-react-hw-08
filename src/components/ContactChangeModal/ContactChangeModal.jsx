import { useDispatch } from 'react-redux'
import { changeContact } from '../../redux/contacts/operations'
import ContactForm from '../ContactForm/ContactForm'
import css from './ContactChangeModal.module.css'

const ContactChangeModal = ({
	contactData: { id, name, number },
	closeModal,
}) => {
	const dispatch = useDispatch()

	const onChangeContact = values => {
		const { contactname, contactphone } = values
		dispatch(changeContact({ id: id, name: contactname, number: contactphone }))
		closeModal()
	}

	return (
		<div className={css.ContactChangeModal}>
			<div className={css.formWrapper}>
				<button
					className={css.closeBtn}
					onClick={() => {
						closeModal()
					}}
				>
					Close
				</button>
				<ContactForm
					initialValues={{ contactname: name, contactphone: number }}
					onSubmit={onChangeContact}
				/>
			</div>
		</div>
	)
}

export default ContactChangeModal
