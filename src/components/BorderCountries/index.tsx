import React ,{FC, useEffect, useContext,useState}from 'react';
import { Link } from 'react-router-dom';
import { CountryContext } from '../../context/CountryContext';
import  './style.less';
import {CountryProps } from './type' 

const  BorderCountries =( props:{ countries:string[] } )=> {
	const [borders, setBorders] = useState<CountryProps[]>([]);

	useEffect(() => {
		  async function fetchCountries (){
			 const response = await fetch(`https://restcountries.com/v2/all`);
			 const data = await response.json();
			 let borders:any[]=[]
			 props.countries.forEach(item=>{
				 console.log(item)
				 const res=data.find((country:any) => country.alpha3Code === item)
				 console.log(res)
				 borders.push(res)
	 
			 })
			 setBorders(borders)
		};
		fetchCountries()

	}, []);

	return (
		<div className='bordercountrywrapper'>
			<section>
				<div>
					<strong>Border Countries:</strong>
				</div>
				<div className='list-countries'>
					{borders.length>0?borders.map(item => 
						<Link className='country'   key={item.alpha3Code} to={`/country/${item.alpha3Code}`}>
							{item.name}
						</Link>
					):''}
				</div>
			</section>
		</div>
	);
}
export default BorderCountries