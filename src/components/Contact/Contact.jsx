/* eslint-disable react/prop-types */
import css from './Contact.module.css'

import { BsTelephoneFill } from 'react-icons/bs'
import { FaPencilAlt, FaUser } from 'react-icons/fa'
import { FaTrashCan } from 'react-icons/fa6'

const Contact = ({ id, name, number, onContactDelete, openModal }) => {
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
			<div className={css.navBox}>
				<button
					className={css.changeBtn}
					onClick={() => {
						openModal({ id, name, number })
					}}
				>
					<FaPencilAlt size={25} />
				</button>
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
		</div>
	)
}

export default Contact
