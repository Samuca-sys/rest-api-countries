import './styles.css';

export function Country({ currentCountry }) {
	const {
		flag,
		name,
		nativeName,
		topLevelDomain,
		population,
		currencies,
		region,
		languages,
		subregion,
		capital,
		borders,
	} = currentCountry;

	return (
		<div className='country--container'>
			<img src={flag} alt={name} />
			<section>
				<div>
					<h1>{name}</h1>
					<div className='country--info'>
						<div>
							<p>
								Native Name: <span>{nativeName}</span>
							</p>
							<p>
								Population: <span>{population}</span>
							</p>
							<p>
								Region: <span>{region}</span>
							</p>
							<p>
								Sub Region: <span>{subregion}</span>
							</p>
							<p>
								Capital: <span>{capital}</span>
							</p>
						</div>

						<div>
							<p>
								Top Level Domain: <span>{topLevelDomain}</span>
							</p>
							<p>
								Currencies:{' '}
								{Object.keys(currencies).map((currency, index) => (
									<span key={index}>{currencies[currency].name}</span>
								))}
							</p>
							<p>
								Languages:{' '}
								{Object.keys(languages).map((language, index) => (
									<span key={index}>
										{(index ? ', ' : '') + languages[language].name}
									</span>
								))}
							</p>
						</div>
					</div>
					<div className='country--borders'>
						<p>Border Countries:</p>
						<div className='country--borderTags'>
							{borders.length > 0 ? (
								borders.map((border, index) => (
									<span key={index}>{border}</span>
								))
							) : (
								<span>None</span>
							)}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
