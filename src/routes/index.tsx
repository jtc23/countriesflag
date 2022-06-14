import React ,{ FC }from 'react';
import {  Switch, Route } from 'react-router-dom';
// import {RouteConfig} from 'react-router-config'

import Main from '../pages/Main';
import CountryDetails from '../pages/CountryDetails';

const Routers:FC = () => (
	<Switch>
		<Route path='/country/:code' component={CountryDetails} />
		<Route path='/' component={Main } />
		<Route path='*' component={Main } />
	</Switch>
);

 


export default Routers;
