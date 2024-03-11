import { ErrorMessage, Field } from 'formik'
import PropTypes from 'prop-types'
import css from './TextField.module.css'

const TextField = ({
	fieldSettings: {
		fieldTitle = 'Form field',
		fieldId,
		fieldName,
		fieldType = 'text',
	},
}) => {
	return (
		<div className={css.fieldWrapper}>
			<label className={css.title} htmlFor={fieldId}>
				{fieldTitle}
			</label>
			<Field
				className={css.field}
				type={fieldType}
				name={fieldName}
				id={fieldId}
			/>
			<ErrorMessage
				className={css.fieldError}
				name={fieldName}
				component='span'
			/>
		</div>
	)
}

TextField.propTypes = {
	fieldSettings: PropTypes.shape({
		fieldTitle: PropTypes.string,
		fieldId: PropTypes.string.isRequired,
		fieldName: PropTypes.string.isRequired,
		fieldType: PropTypes.string,
	}).isRequired,
}

export default TextField
