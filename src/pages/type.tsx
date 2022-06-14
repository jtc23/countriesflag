type nameTYPE={
	common:string;
	official:string;
	nativeName:any;
}
type flagTYPE={
	svg:string;
	png:string;
}
// interface currencyDetail{
// 	name:string;
// 	symbol:string;
// }
type currencyTYPE ={
	[key: string]: string
}
type languageTYPE={
	[key: string]: string
}
export type CountryProps ={
	name: nameTYPE;
    flag:flagTYPE;
    capital:string[];
    population:string;
    region:string;
    alpha3Code:string;
	currencies:currencyTYPE[];
	languages: languageTYPE[];
}
