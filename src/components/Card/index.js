import { useHistory } from 'react-router';

import './styles.css';

export function Card({ country, setCurrentCountry }) {
	const { name, flag, population, region, capital } = country;

	let history = useHistory();

	function handleClickOnCard() {
		setCurrentCountry(country);
		history.push(`/details`);
	}
	return (
		<div className='card--container' onClick={handleClickOnCard}>
			<img src={flag} alt={name} />
			<div className='card--info'>
				<h4>{name}</h4>
				<p>
					Population: <span>{population}</span>
				</p>
				<p>
					Region: <span>{region}</span>
				</p>
				<p>
					Capital: <span>{capital}</span>
				</p>
			</div>
		</div>
	);
}
