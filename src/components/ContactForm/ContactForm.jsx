/* eslint-disable react/prop-types */
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import css from './ContactForm.module.css'

import { nanoid } from '@reduxjs/toolkit'
import { useId } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/contacts/operations'
import TextField from '../TextField/TextField'

const ContactForm = () => {
	const contactNameId = useId()
	const contactPhoneId = useId()

	const initialValues = {
		contactname: '',
		contactphone: '',
	}

	const FeedbackSchema = Yup.object().shape({
		contactname: Yup.string()
			.min(3, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
		contactphone: Yup.string()
			.min(3, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
	})

	const dispatch = useDispatch()
	const handleSubmit = (values, actions) => {
		const { contactname, contactphone } = values
		dispatch(addContact({ name: contactname, phone: contactphone }))

		actions.resetForm()
	}

	return (
		<div className='ContactForm'>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={FeedbackSchema}
			>
				<Form className={css.form}>
					{/* Use the TextField component for name and phone fields */}
					<TextField
						fieldSettings={{
							fieldTitle: 'Name',
							fieldId: useId(),
							fieldName: 'contactname',
						}}
					/>
					<TextField
						fieldSettings={{
							fieldTitle: 'Phone number',
							fieldId: useId(),
							fieldName: 'contactphone',
							fieldType: 'tel',
						}}
					/>

					<button className={css.btn} type='submit'>
						Submit
					</button>
				</Form>
			</Formik>
		</div>
	)
}

export default ContactForm
