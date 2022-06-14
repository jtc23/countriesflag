import { Button } from '@material-ui/core';
import React from 'react';

import BorderCountries from '../BorderCountries';
//import CurrencyList from '../CurrencyList'
import './style.less';
import {CountryProps} from './type'


export default function CountryDetail(props:CountryProps) {
	return (
		<div className='countrydetail'>
			<img src={props.flags?props.flags.svg:''} alt='Flag of the country' />
			<div className='details'>
				<h1>{props.name?props.name:''}</h1>
				<div className='grid'>
                    <section>
						<p>
							<strong>Native Name: </strong>
							{props.nativeName?props.nativeName:''}
						</p>
						<p>
							<strong>Population: </strong>
							{new Intl.NumberFormat().format(Number(props.population?props.population:'0'))}
						</p>
                        <p>
							<strong>Region: </strong>
							{props.region?props.region:''}
						</p>
						<p>
							<strong>Sub Region: </strong>
							{props.subregion?props.subregion:''}
						</p>
                        <p>
							<strong>Capital: </strong>
							{props.capital?props.capital:''}
						</p>
						
					</section>
					<section>
						<p>
							<strong>Top Level Domain: </strong>
							{ props.topLevelDomain?props.topLevelDomain:''}
						</p>
						<p>
							<strong>Currencies: </strong>
							{ props.currencylist?props.currencylist.join(', '):''}
						</p>
					
						<p>
							<strong>Languages: </strong>
							{ props.languagelist?props.languagelist.join(', '):''}
						</p>
						
					</section>
					
				</div>

				{props.borders? <BorderCountries countries={props.borders} />:'' }
			</div>
		</div>
	);
}
