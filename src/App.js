import { useCallback, useEffect, useState } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { CardContainer } from './components/CardContainer';
import { Country } from './pages/Country';
import { Header } from './components/Header';
import { Search } from './components/Search';

import './global.css';

import { api } from './services/api';
function App() {
	const [search, setSearch] = useState('');
	const [currentCountry, setCurrentCountry] = useState(null);
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
				searchResults.forEach(async (country) => {
					for (let i = 0; i < country.borders.length; i++) {
						await api.get(`alpha/${country.borders[i]}`).then((response) => {
							country.borders[i] = response.data.name;
						});
					}
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
			<BrowserRouter>
				<Switch>
					<Route path='/' exact={true}>
						<Header />
						<Search />
						<CardContainer
							countries={countries}
							setCurrentCountry={setCurrentCountry}
						/>
					</Route>
					<Route path='/details'>
						{currentCountry && <Country currentCountry={currentCountry} />}
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
