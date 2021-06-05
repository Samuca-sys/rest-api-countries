import { Card } from '../Card';

import './styles.css';

export function CardContainer({ countries, setCurrentCountry }) {
	return (
		<>
			{countries.length === 0 ? (
				<div className='notFound--container'>
					<h2>Country not found.</h2>
				</div>
			) : (
				countries.map((country, index) => (
					<div className='cardContainer'>
						<Card
							key={index}
							country={country}
							setCurrentCountry={setCurrentCountry}
						/>
					</div>
				))
			)}
		</>
	);
}
