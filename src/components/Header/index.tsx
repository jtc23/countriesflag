import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import  './style.less';

import { ThemeContext } from '../../context/ThemeContext';

import Mode from './mode';
//import DarkModeSharpIcon from 'material-ui/svg-icons/action/DarkModeSharp';
//import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';

const Header= (props:React.PropsWithChildren<{}>)=>{
	const { darkMode, switchTheme } = useContext(ThemeContext);

	return (
		<header className='head' >
			<div>
				<Link to='/'>
					<h1>Where in the world?</h1>
				</Link>
				<button className='dark-mode' onClick={switchTheme}>
				   <Mode isDarkMode={darkMode} />
				</button>
			</div>
		</header>
	);
}
export default Header