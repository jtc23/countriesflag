import React, { useState, createContext, ReactNode, FC } from 'react';
import {CountryContextProps} from './type'
const countryDefaultValue:CountryContextProps= {
	countryList: [] as any[],
	countryListByName:[] as any[],
	region:'all',
	setCountryByNameFilter:()=>{},
	setCountryList:()=>{},
	setRegion:()=>{},
};
	
export const CountryContext  = createContext<CountryContextProps>(countryDefaultValue)




export const CountryProvider = ({children}:{children:ReactNode})=>{
	const [countryList, setCountryList] = useState<any[]>([]);
	const [countryListByName, setCountryByName] = useState<any[]>([]);
	const [inputSearch, setInputSearch] = useState<string>('');
	const [region, setRegion] = useState<string>('all');

	const  setCountryByNameFilter = (countryName:string)=> {
		if (countryName ==='') {
			setCountryByName(countryList)
			setInputSearch('')
		}
		const countryListByName = countryList.filter((country:any) =>
			country.name.toLowerCase().includes(countryName.toLowerCase())
		);
		setCountryByName(countryListByName)
		setInputSearch(countryName)
		
	}

	

	return <CountryContext.Provider 
				value={{  
					countryList,
					countryListByName,
					region,
					setCountryByNameFilter,
					setCountryList,
					setRegion,
				}}>
				{children}
			</CountryContext.Provider>;
}

