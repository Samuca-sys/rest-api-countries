import './styles.css';

export function Card({ country }) {
	console.log(country);
	const { name, flag, population, region, capital } = country;
	return (
		<div className='card--container'>
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
