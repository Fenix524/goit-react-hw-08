import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Container from './Container/Container'
import Header from './Header/Header'

export const Layout = () => {
	return (
		<Container>
			<Header />
			<Suspense fallback={null}>
				<Outlet />
			</Suspense>
			<ToastContainer />
		</Container>
	)
}
