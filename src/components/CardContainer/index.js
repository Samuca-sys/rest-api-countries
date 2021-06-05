import { Card } from '../Card';

import './styles.css';

export function CardContainer({ countries, setCurrentCountry }) {
	return (
		<div className='cardContainer'>
			{countries &&
				countries.map((country, index) => (
					<Card
						key={index}
						country={country}
						setCurrentCountry={setCurrentCountry}
					/>
				))}
		</div>
	);
}
