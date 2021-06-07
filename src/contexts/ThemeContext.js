import { createContext, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
	const [isDark, setIsDark] = useState(false);

	const toggleMode = () => {
		setIsDark(!isDark);
	};

	useEffect(() => {
		const html = document.body.parentNode;
		if (isDark) {
			html.classList.add('dark-mode');
		} else {
			html.classList.remove('dark-mode');
		}
	}, [isDark]);

	return (
		<ThemeContext.Provider value={{ toggleMode }}>
			{children}
		</ThemeContext.Provider>
	);
}

export const useTheme = () => {
	return useContext(ThemeContext);
};
