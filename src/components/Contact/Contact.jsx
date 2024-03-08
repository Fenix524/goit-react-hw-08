/* eslint-disable react/prop-types */
import css from './Contact.module.css'

import { BsTelephoneFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { FaTrashCan } from 'react-icons/fa6'

const Contact = ({ id, name, number, onContactDelete }) => {
	return (
		<div className={css.Contact} id={id}>
			<div>
				<div className={css.row}>
					<FaUser />
					<p>{name}</p>
				</div>
				<div className={css.row}>
					<BsTelephoneFill />
					<p>{number}</p>
				</div>
			</div>
			<button
				className={css.deleteBtn}
				onClick={() => {
					onContactDelete(id)
				}}
			>
				<FaTrashCan />
				<p>Delete</p>
			</button>
		</div>
	)
}

export default Contact
