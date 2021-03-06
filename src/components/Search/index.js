import { useRef, useState } from 'react';

import { IoMdSearch } from 'react-icons/io';
import { FaChevronDown } from 'react-icons/fa';

import './styles.css';

export function Search({
	search,
	setSearch,
	fetchCountries,
	fetchCountriesByRegion,
}) {
	const searchRef = useRef(null);

	const [dropdown, setDropdown] = useState(false);
	const [filter, setFilter] = useState('Filter by Region');

	const handleDropdown = () => {
		setDropdown(!dropdown);
	};

	const handleSearch = () => {
		setFilter('Filter by Region');
		setSearch(searchRef.current.value);
		fetchCountries();
	};

	const handleFilter = (region) => {
		setFilter(region);
		fetchCountriesByRegion(region);
	};

	return (
		<>
			<div className='search--container'>
				<div className='search--bar'>
					<div className='search--barIcon'>
						<IoMdSearch size={18} />
					</div>
					<input
						ref={searchRef}
						onChange={handleSearch}
						type='text'
						placeholder='Search for a country...'
						aria-label='search'
						value={search}
					/>
				</div>
				<div className='search--dropdown' onClick={handleDropdown}>
					<span>{filter}</span>
					<FaChevronDown size={18} />
					<div className={`search--dropdownMenu ${dropdown ? '' : 'hidden'}`}>
						<span onClick={() => handleFilter('Africa')}>Africa</span>
						<span onClick={() => handleFilter('Americas')}>Americas</span>
						<span onClick={() => handleFilter('Asia')}>Asia</span>
						<span onClick={() => handleFilter('Europe')}>Europe</span>
						<span onClick={() => handleFilter('Oceania')}>Oceania</span>
					</div>
				</div>
			</div>
		</>
	);
}
