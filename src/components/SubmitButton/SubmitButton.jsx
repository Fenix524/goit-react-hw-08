import css from './SubmitButton.module.css'

const SubmitButton = ({ children }) => {
	return (
		<button className={css.submitBtn} type='submit'>
			{children}
		</button>
	)
}

export default SubmitButton
