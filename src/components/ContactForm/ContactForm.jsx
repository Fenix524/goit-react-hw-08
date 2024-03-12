/* eslint-disable react/prop-types */
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import css from './ContactForm.module.css'

import { useId } from 'react'
import TextField from '../TextField/TextField'

const ContactForm = ({
	initialValues = {
		contactname: '',
		contactphone: '',
	},
	onSubmit,
}) => {
	const contactNameId = useId()
	const contactPhoneId = useId()

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

	const handleSubmit = (values, actions) => {
		// console.log('Submit contact form', values)
		onSubmit(values)
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
					<TextField
						fieldSettings={{
							fieldTitle: 'Name',
							fieldId: contactNameId,
							fieldName: 'contactname',
						}}
					/>
					<TextField
						fieldSettings={{
							fieldTitle: 'Phone number',
							fieldId: contactPhoneId,
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
