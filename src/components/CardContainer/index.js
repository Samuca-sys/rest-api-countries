import { Card } from '../Card';

import './styles.css';

export function CardContainer({ countries, setCurrentCountry }) {
	return (
		<div className='cardContainer'>
			{countries.length === 0 ? (
				<h2>Country not found.</h2>
			) : (
				countries.map((country, index) => (
					<Card
						key={index}
						country={country}
						setCurrentCountry={setCurrentCountry}
					/>
				))
			)}
		</div>
	);
}
