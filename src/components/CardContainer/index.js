import { Card } from '../Card';

import './styles.css';

export function CardContainer({ countries }) {
	return (
		<div className='cardContainer'>
			{countries &&
				countries.map((country, index) => (
					<Card key={index} country={country} />
				))}
		</div>
	);
}
