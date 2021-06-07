import { CgArrowLeft } from 'react-icons/cg';

import { useHistory } from 'react-router-dom';

import './styles.css';
export function ReturnToHomeButton() {
	const history = useHistory();

	function handleClickOnBack() {
		history.push('/');
	}

	return (
		<button className='returnToHome--button' onClick={handleClickOnBack}>
			<CgArrowLeft size={18} />
			<span>Back</span>
		</button>
	);
}
