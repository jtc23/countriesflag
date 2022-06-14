export type CountryContextProps ={
	countryList:  any[],
	region:string,
	countryListByName:any[],
	// setCountryByName:Dispatch<React.SetStateAction<any[]>>;
	setCountryByNameFilter:(data:string)=>void;
	setCountryList:(data:any[])=>void;
	setRegion:(data:string)=>void;
  }

