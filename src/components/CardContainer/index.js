export function CardContainer({ items }) {
	return (
		<div>
			{items && items.map((item, index) => <h1 key={index}>{item.name}</h1>)}
		</div>
	);
}
