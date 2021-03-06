import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from 'react-router-dom';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from './context/ThemeContext';


//const history = createBrowserHistory();
//const store = configureStore(history);

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider>
			<Router>
				<App />
			</Router>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
