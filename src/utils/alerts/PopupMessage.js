import { toast } from 'react-toastify'
import { MESSAGE_TYPES } from '../../redux/constants'

const messageTypesValues = Object.values(MESSAGE_TYPES)

export function showMessage(type, text) {
	console.log('IN FUNCTION')
	if (!messageTypesValues.includes(type)) return
	toast[type](text)
}
