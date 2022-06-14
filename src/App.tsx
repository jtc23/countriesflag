import React, { FC } from "react";
import { CountryProvider } from './context/CountryContext';
import Routes from './routes';
import './app.less'


//import Main from "./pages/Main";
import Header from './components/Header';

const App:FC = () => {
    
    return (
        <>
            <Header />
                <main>
                    <CountryProvider>
                        <Routes />
                    </CountryProvider>
                </main>
        </>
    );
};



export default App;

