import React from 'react';
import Search from '../Search';
import FilterRegion from '../FilterRegion';
import './style.less'

export default function Filters() {
	return (
		<div className='filterwrapper'>
			<Search />
			<FilterRegion/>
		</div>
	);
}
