import { useEffect, useState } from 'react';

export const useDarkMode = ()=> {
	const [darkMode, setDarkMode] = useState<boolean>(false);

	useEffect(() => {
		const mq = window.matchMedia('(prefers-color-scheme: dark)');
		mq.addEventListener('change', () => setDarkMode(mq.matches));
		setDarkMode(mq.matches);
		return () => {
			mq.removeEventListener('change',()=>{});
		};
	}, []);

	const switchDarkMode = ():void => {
		setDarkMode(!darkMode);
	};

	return [darkMode, switchDarkMode];
};
