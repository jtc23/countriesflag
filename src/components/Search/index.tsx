import React, { useContext, useState, useEffect } from 'react';

import useDebounce from '../../hooks/useDebounce';

import  './style.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSearch} from '@fortawesome/free-solid-svg-icons'

import { CountryContext } from '../../context/CountryContext';

export default function Search() {
	const { setCountryByNameFilter } = useContext(CountryContext);
	const [value, setValue] = useState('');
	const debounceValue = useDebounce(value, 500);
	
	function handleChange(event) {
		const country = event.target.value.trim();
		setValue(country);
	}

	useEffect(() => {
		setCountryByNameFilter(debounceValue);
	}, [debounceValue]);

	return (
		<div className='searchwrapper'>
			<label className='labelstyle'>
				<FontAwesomeIcon icon={faSearch} className='icon'/>
				<input type='search' value={value} onChange={handleChange} placeholder='Search for a country...'/>
			</label>
		</div>
	);
}
