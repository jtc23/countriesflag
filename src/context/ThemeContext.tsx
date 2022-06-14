import React, { createContext, Context , useEffect, ReactNode , FC} from 'react';

import { useDarkMode } from '../hooks/useDarkMode';

interface ThemeStateProps {
	children: ReactNode;
  }


export const ThemeContext:Context<any>  = createContext('theme');
const {Provider} = ThemeContext;

export const ThemeProvider= ({ children }:{children:ReactNode})=>{
	const [darkMode, switchTheme] = useDarkMode();

	useEffect(() => {
		const html:any = document.querySelector('html');
		html.classList.toggle('dark', darkMode);
	}, [darkMode]);

	return <Provider value={{ darkMode, switchTheme }}>{children}</Provider>;
}

