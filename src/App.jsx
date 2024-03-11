import { lazy, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import { Layout } from './components/Layout'
import { PrivateRoute } from './components/PrivateRoute'
import { RestrictedRoute } from './components/RestrictedRoute'
import { useAuth } from './hooks/useAuth'
import { refreshUser } from './redux/auth/operations'
import './utils/alerts/PopupMessage'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'))

function App() {
	const dispatch = useDispatch()
	const { isRefreshing } = useAuth

	useEffect(() => {
		dispatch(refreshUser())
	}, [dispatch])

	return isRefreshing ? (
		<b className='wrapper'>Restoring previous session, please wait...</b>
	) : (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route
						path='/register'
						element={
							<RestrictedRoute
								redirectTo='/contacts'
								component={<RegisterPage />}
							/>
						}
					/>
					<Route
						path='/login'
						element={
							<RestrictedRoute
								redirectTo='/contacts'
								component={<LoginPage />}
							/>
						}
					/>
					<Route
						path='/contacts'
						element={
							<PrivateRoute redirectTo='/login' component={<ContactsPage />} />
						}
					/>
				</Route>
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</>
	)
}

export default App
