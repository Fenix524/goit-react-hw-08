import { Link } from 'react-router-dom'
import css from './LoginPage.module.css'
import LoginForm from '../../components/LoginForm/LoginForm'

const LoginPage = () => {
	const formSubmit = () => {}

	return (
		<div className={css.LoginPage}>
			<LoginForm onSubmit={formSubmit} />
		</div>
	)
}

export default LoginPage
