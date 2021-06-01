import { IoMoonOutline } from 'react-icons/io5';

import './styles.css';

export function Header() {
	return (
		<header>
			<h2>Where in the world?</h2>
			<div className='header--button'>
				<IoMoonOutline />
				<h4>Dark Mode</h4>
			</div>
		</header>
	);
}
