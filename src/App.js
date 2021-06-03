import { useCallback, useEffect, useState } from 'react';

import { CardContainer } from './components/CardContainer';
import { Header } from './components/Header';
import { Search } from './components/Search';

import './global.css';
import { api } from './services/api';

function App() {
	const [search, setSearch] = useState('');
	const [countries, setCountries] = useState([]);

	const fetchCountries = useCallback(async () => {
		let searchTags;
		const searchTemp =
			'Germany, United States of America, Brazil, Iceland, Åland, Afghanistan, Albania, Algeria';
		searchTags = searchTemp.split(', ');
		const searchResults = [];
		try {
			await api.get('all').then((response) => {
				searchTags.forEach((tag) => {
					const result = response.data.filter((country) =>
						country.name.includes(tag.charAt(0) + tag.slice(1))
					);
					result.forEach((country) => {
						searchResults.push(country);
					});
				});
				setCountries(searchResults);
			});
		} catch (error) {
			console.log(error, 'Error getting countries');
		}
	});

	useEffect(() => {
		fetchCountries();
	}, [search]);

	return (
		<>
			<Header />
			<Search />
			<CardContainer countries={countries} />
		</>
	);
}

export default App;
