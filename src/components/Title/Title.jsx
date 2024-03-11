import css from './Title.module.css'

const Title = ({ children }) => {
	return <div className={css.Title}>{children}</div>
}

export default Title
