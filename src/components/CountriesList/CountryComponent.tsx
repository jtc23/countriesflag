import React ,{ FC }from 'react';
import { Link } from 'react-router-dom';
import {CountryProps } from './type'
import './style.less';
// interface nameTYPE{
// 	common:string;
// 	official:string;
// 	nativeName:any;
// }


const Country:FC<CountryProps>=({ name, flags, capital, population, region, alpha3Code }:CountryProps) =>{
	return (
		<Link to={`country/${alpha3Code}`} className='countrywrapper'>
			<img src={flags.svg} alt='Flag country' />
			<div>
				<h2>{name}</h2>
				<p>
					<strong>Population: </strong>
					{new Intl.NumberFormat().format(Number(population))}
				</p>
				<p>
					<strong>Capital: </strong>
					{capital}
				</p>
				<p>
					<strong>Region: </strong>
					{region}
				</p>
			</div>
		</Link>
	);
}
export default Country