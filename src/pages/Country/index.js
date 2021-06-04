import { Header } from '../../components/Header';

import { CgArrowLeft } from 'react-icons/cg';

import { useHistory } from 'react-router-dom';

import './styles.css';

export function Country({ currentCountry }) {
	const history = useHistory();

	function handleClickOnBack() {
		history.push('/');
	}
	return (
		<div>
			<Header />
			<div>
				<div onClick={handleClickOnBack}>
					{CgArrowLeft}
					<span>Back</span>
				</div>
				<p>{currentCountry.name}</p>
			</div>
		</div>
	);
}
