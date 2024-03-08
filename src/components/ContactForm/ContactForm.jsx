/* eslint-disable react/prop-types */
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import css from './ContactForm.module.css'

import { nanoid } from '@reduxjs/toolkit'
import { useId } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/contacts/operations'

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
	const onSubmit = (values, actions) => {
		const { contactname, contactphone } = values
		dispatch(
			addContact({ id: nanoid(), name: contactname, phone: contactphone })
		)

		actions.resetForm()
	}

	return (
		<div className='ContactForm'>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={FeedbackSchema}
			>
				<Form className={css.form}>
					<div>
						<label className={css.label} htmlFor={contactNameId}>
							Імя
						</label>
						<Field
							className={css.field}
							type='text'
							id={contactNameId}
							name='contactname'
						/>
						<ErrorMessage
							className={css.errorMessage}
							name='contactname'
							component='span'
						/>
					</div>
					<div>
						<label className={css.label} htmlFor={contactPhoneId}>
							Номер телефону
						</label>
						<Field
							className={css.field}
							type='text'
							id={contactPhoneId}
							name='contactphone'
						/>

						<ErrorMessage
							className={css.errorMessage}
							name='contactphone'
							component='span'
						/>
					</div>

					<button className={css.btn} type='submit'>
						Submit
					</button>
				</Form>
			</Formik>
		</div>
	)
}

export default ContactForm
