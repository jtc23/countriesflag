import React, { useContext, useState, useEffect } from 'react';
import { useParams,useHistory  } from 'react-router-dom';

import { CountryContext } from '../context/CountryContext';

import CountryDescription from '../components/CountryDetails';
import Wrapper from '../components/Wrapper';
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import './style.less'
import { CountryProps} from './type'




const CountryDetails= (props:React.PropsWithChildren<{}>)=>{
	const { code } = useParams<{code?: string}>();
	const history = useHistory();
	const { countryList } = useContext(CountryContext);

	const contextCountry = countryList.find((item:any) => item.cca3 === code);

	const [country, setCountry] = useState(contextCountry);

	function filterData (data:CountryProps):any  {
			let currencylist = data.currencies.map(item=>item.name)
			let languagelist = data.languages.map(item=>item.name)
			return {
				...data,
				currencylist,
				languagelist
			}
	}

	useEffect(() => {
		window.scrollTo(0, 0);

		async function fetchCountry() {
			const response = await fetch(`https://restcountries.com/v2/alpha/${code}`);
			const data = await response.json();
			setCountry(filterData(data));
		}

		if (contextCountry) {
			setCountry(filterData(contextCountry));
		} else {
			fetchCountry();
		}
	}, [code]);

	return (
		<Wrapper>
			<Button className='back' onClick={() => history.push('/')}>
			<FontAwesomeIcon icon={faArrowLeftLong} className='icon'/> Back
			</Button>
			<CountryDescription {...country} />
		</Wrapper>
	);
}


export default CountryDetails;