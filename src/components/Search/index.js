import { IoMdSearch } from 'react-icons/io';
import { FaChevronDown } from 'react-icons/fa';

import './styles.css';

export function Search() {
	return (
		<>
			<div className='search--container'>
				<div className='search--bar'>
					<div className='search--barIcon'>
						<IoMdSearch size={18} />
					</div>
					<input
						type='text'
						placeholder='Search for a country'
						aria-label='search'
					/>
				</div>
				<div className='search--dropdown'>
					<span>Filter by Region</span>
					<FaChevronDown size={18} />
					{/* <div className='search--dropdownMenu'>
						<span>Africa</span>
						<span>America</span>
						<span>Europe</span>
						<span>Oceania</span>
					</div> */}
				</div>
			</div>
		</>
	);
}
