import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { logOut } from '../../redux/auth/operations'
import Container from '../Container/Container'
import css from './Header.module.css'

const Header = () => {
	const { isLoggedIn } = useAuth()
	const dispatch = useDispatch()
	return (
		<div className={css.Header}>
			<Container>
				<div className={css.headerWraper}>
					<Link to='/' className={css.logo}>
						CntsBooK
					</Link>
					<nav className={css.navBox}>
						{isLoggedIn && (
							<Link to='/contacts' className={css.navItem}>
								Contacts
							</Link>
						)}
						<div className={css.loginBox}>
							{isLoggedIn ? (
								<button
									className={css.navItem}
									onClick={() => {
										dispatch(logOut())
									}}
								>
									Log out
								</button>
							) : (
								<>
									<Link to='/login' className={css.navItem}>
										Log in
									</Link>
									<Link to='/register' className={css.navItem}>
										Sign up
									</Link>
								</>
							)}
						</div>
					</nav>
				</div>
			</Container>
		</div>
	)
}

export default Header
