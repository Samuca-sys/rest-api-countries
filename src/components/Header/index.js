import { IoMoonOutline } from 'react-icons/io5';
import { useTheme } from '../../contexts/ThemeContext';

import './styles.css';

export function Header() {
	const { toggleMode } = useTheme();
	return (
		<header>
			<h2>Where in the world?</h2>
			<div className='header--button' onClick={toggleMode}>
				<IoMoonOutline />
				<h4>Dark Mode</h4>
			</div>
		</header>
	);
}
