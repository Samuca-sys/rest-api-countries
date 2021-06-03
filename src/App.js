import { useCallback, useEffect, useState } from 'react';
import { CardContainer } from './components/CardContainer';
import { Header } from './components/Header';
import { Search } from './components/Search';

import axios from 'axios';

import './global.css';
import { api } from './services/api';

function App() {
	const [search, setSearch] = useState('');
	const [countries, setCountries] = useState([]);
	// const [isLoading, setIsLoading] = useState(true);

	const fetchCountries = useCallback(async () => {
		let searchTags;
		const searchTemp = 'Germany, Brazil';
		searchTags = searchTemp.split(', ');
		const searchResults = [];
		try {
			await api.get('all').then((response) => {
				// searchTags.forEach((tag) => {
				// 	const result = response.data.filter((country) =>
				// 		country.name.includes(tag.charAt(0) + tag.slice(1))
				// 	);
				// 	result.forEach((country) => {
				// 		searchResults.push(country);
				// 	});
				// });
				setCountries(response.data);
			});
			// console.log(searchResults);
		} catch (error) {
			console.log(error, 'Error getting countries');
		}
	});

	useEffect(() => {
		fetchCountries();
	}, [search]);

	return (
		<div className='App'>
			<Header />
			<Search />
			<CardContainer items={countries} />
		</div>
	);
}

export default App;
