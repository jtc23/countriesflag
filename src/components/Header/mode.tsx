import React ,{FC}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMoon 	} from '@fortawesome/free-solid-svg-icons'
import { faMoon as Moon	} from '@fortawesome/free-regular-svg-icons'
interface ModeType{
    isDarkMode:boolean;
}
const Mode:FC<ModeType> = (props) =>{
	return (
		<>
			{props.isDarkMode ? <FontAwesomeIcon icon={faMoon} className='icon'/> : <FontAwesomeIcon icon={Moon} className='icon'/>}
			{props.isDarkMode ? 'Light Mode' : 'Dark Mode'}
		</>
	);
}
export default Mode