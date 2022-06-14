import React, { useContext, useEffect,FC } from 'react';

import { CountryContext } from '../../context/CountryContext';

import Country from './CountryComponent';

import  './style.less';

import {CountryProps } from './type'


const CountriesList = (props:React.PropsWithChildren<{}>)=>{
	const {countryList, countryListByName,region, setCountryList} = useContext(CountryContext);
	const _countryList :Array<any>=
		countryListByName.length > 0 ? filterRegion(region,countryListByName) : filterRegion(region,countryList);

	function filterRegion(region:string, countryList:CountryProps[]) {
		if (!countryList || countryList.length===0) return [];
		if (region ==='all') return countryList
		const res = countryList.filter(item=> item.region.toLowerCase() === region.toLowerCase())
		return res
	}
	useEffect(() => {
		const fetchCountries = () => {
			fetch('https://restcountries.com/v2/all')
				.then((response) => response.json())
				.then((data) => {
					setCountryList(data);
				})
				.catch((error) => {
				});
		};

		fetchCountries();
	}, []);

	return (
		<div className='wrapper'>
			<div className='countrygrid'>
				{ _countryList.map(({ name, flags, capital, population, region,alpha3Code }:CountryProps)=> (
					<Country
						key={alpha3Code}
						name={name}
						flags={flags}
						capital={capital}
						population={population}
						region={region}
						alpha3Code={alpha3Code}
					/>
				))}
			</div>
		</div>
	);
}

export default CountriesList