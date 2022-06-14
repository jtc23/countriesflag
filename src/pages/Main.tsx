import React from "react";

import CountriesList from '../components/CountriesList';
import Filters from '../components/Filter';

const Main: React.FC<{}> = () => {
    return (
        <>
            <Filters />
            <CountriesList/>
        </>
    );
};


export default Main;
