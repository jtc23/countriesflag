type CountryState={
    countryList: any[],
	countryListByName: any[],
	inputSearch: string,
}


type flagTYPE={
	svg:string;
	png:string;
}
export type CountryProps ={
	name: string;
    flags:flagTYPE;
    capital:string[];
    population:string;
    region:string;
    alpha3Code:string;
}

