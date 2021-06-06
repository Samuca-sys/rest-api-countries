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
		if (search === '') {
			const searchTemp =
				'Germany, United States of America, Brazil, Iceland, Åland, Afghanistan, Albania, Algeria';
			searchTags = searchTemp.split(', ');
		} else {
			searchTags = search.split(', ');
		}
		const searchResults = [];
		try {
			await api.get('all').then((response) => {
				searchTags.forEach((tag) => {
					const result = response.data.filter((country) =>
						country.name.includes(tag.charAt(0).toUpperCase() + tag.slice(1))
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
	}, [search]);

	useEffect(() => {
		fetchCountries();
	}, [fetchCountries]);

	const fetchCountriesByRegion = async (region) => {
		try {
			await api.get(`/region/${region}`).then((response) => {
				const searchResults = response.data;
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
			console.log(error, 'Error getting countries by region');
		}
	};

	return (
		<>
			<Header />
			<BrowserRouter>
				<Switch>
					<Route path='/' exact={true}>
						<Search
							search={search}
							setSearch={setSearch}
							fetchCountries={fetchCountries}
							fetchCountriesByRegion={fetchCountriesByRegion}
						/>
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
