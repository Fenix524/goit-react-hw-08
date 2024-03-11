import { Form, Formik } from 'formik'
import { useId } from 'react'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { register } from '../../redux/auth/operations'
import { MESSAGE_TYPES } from '../../redux/constants'
import { showMessage } from '../../utils/alerts/PopupMessage'
import SubmitButton from '../SubmitButton/SubmitButton'
import TextField from '../TextField/TextField'
import Title from '../Title/Title'
import css from './RegisterForm.module.css'

const RegisterForm = () => {
	// Generate unique IDs for all fields
	const dispatch = useDispatch()
	const nameFieldId = useId()
	const emailFieldId = useId()
	const passwordFieldId = useId()
	const confirmPasswordFieldId = useId()

	const initialValues = {
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	}

	const validationSchema = yup.object().shape({
		name: yup.string().trim().required('Name is required'),
		email: yup
			.string()
			.email('Invalid email format')
			.required('Email is required'),
		password: yup
			.string()
			.min(7, 'Password must be at least 7 characters long')
			.required('Password is required'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password')], 'Passwords must match')
			.required('Confirm password is required'),
	})

	const handleSubmit = ({ name, email, password }, actions) => {
		console.log({ name, email, password })
		dispatch(register({ name: name, email: email, password: password }))
			.unwrap()
			.then(() => {
				showMessage(MESSAGE_TYPES.SUCCESS, 'Successful registration')
			})
			.catch(error => {
				if (error.response.status === 400) {
					showMessage(
						MESSAGE_TYPES.ERROR,
						'The user with this mail already exists'
					)
					return
				}
				showMessage(MESSAGE_TYPES.ERROR, 'Something went wrong')
			})
	}

	return (
		<div className={css.formWrapper}>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form className={css.form}>
					<div className={css.title}>
						<Title>Sign Up</Title>
					</div>
					<TextField
						fieldSettings={{
							fieldTitle: 'Name',
							fieldId: nameFieldId,
							fieldName: 'name',
							fieldType: 'text',
						}}
					/>
					<TextField
						fieldSettings={{
							fieldTitle: 'Email',
							fieldId: emailFieldId,
							fieldName: 'email',
							fieldType: 'email',
						}}
					/>
					<TextField
						fieldSettings={{
							fieldTitle: 'Password',
							fieldId: passwordFieldId,
							fieldName: 'password',
							fieldType: 'password',
						}}
					/>
					<TextField
						fieldSettings={{
							fieldTitle: 'Confirm Password',
							fieldId: confirmPasswordFieldId,
							fieldName: 'confirmPassword',
							fieldType: 'password',
						}}
					/>
					<div className={css.submitBtn}>
						<SubmitButton>Submit</SubmitButton>
					</div>
				</Form>
			</Formik>
		</div>
	)
}

export default RegisterForm
