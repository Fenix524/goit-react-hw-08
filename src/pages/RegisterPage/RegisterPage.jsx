import RegisterForm from '../../components/RegisterForm/RegisterForm'

const RegisterPage = () => {
	const formSubmit = () => {}
	return (
		<>
			<RegisterForm onSubmit={formSubmit} />
		</>
	)
}

export default RegisterPage
