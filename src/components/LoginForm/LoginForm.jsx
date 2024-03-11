import { Form, Formik } from 'formik'
import { useId } from 'react'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { logIn } from '../../redux/auth/operations'
import { MESSAGE_TYPES } from '../../redux/constants'
import { showMessage } from '../../utils/alerts/PopupMessage'
import SubmitButton from '../SubmitButton/SubmitButton'
import TextField from '../TextField/TextField'
import Title from '../Title/Title'
import css from './LoginForm.module.css'

const LoginForm = () => {
	const dispatch = useDispatch()
	const emailFieldId = useId()
	const passwordFieldId = useId()

	const initialValues = {
		email: '',
		password: '',
	}

	const validationSchema = yup.object().shape({
		email: yup
			.string()
			.email('Invalid email format')
			.required('Email is required'),
		password: yup
			.string()
			.min(8, 'Password must be at least 8 characters long')
			.required('Password is required'),
	})

	const handleSubmit = ({ email, password }) => {
		dispatch(
			logIn({
				email: email,
				password: password,
			})
		)
			.unwrap()
			.then(() => {
				showMessage(MESSAGE_TYPES.SUCCESS, 'Successful registration')
			})
			.catch(() => {
				showMessage(
					MESSAGE_TYPES.ERROR,
					'Login or password is incorrect, please try again'
				)
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
						<Title>Login</Title>
					</div>

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
					<div className={css.submitBtn}>
						<SubmitButton>Submit</SubmitButton>
					</div>
				</Form>
			</Formik>
		</div>
	)
}

export default LoginForm
