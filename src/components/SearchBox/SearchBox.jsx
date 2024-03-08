import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../redux/filters/filters.slice'
import { selectFilter } from '../../redux/filters/selectors'
import css from './SearchBox.module.css'

const SearchBox = () => {
	const dispatch = useDispatch()
	const searchFilters = useSelector(selectFilter)

	return (
		<div className={css.SearchBox}>
			<p className={css.text}>Find contacts by name</p>
			<input
				className={css.input}
				type='text'
				value={searchFilters}
				onChange={evt => {
					dispatch(setFilter(evt.target.value))
				}}
			/>
		</div>
	)
}

export default SearchBox
