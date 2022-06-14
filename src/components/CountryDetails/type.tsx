// interface nameTYPE{
// 	common:string;
// 	official:string;
// 	nativeName:any;
// }
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
    cca3:string;
    subregion:string;
    area:string;
    currencylist:string[];
	languagelist:string[];
	borders:string[],
	nativeName:string,
	topLevelDomain:string,
}