import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter,
	Route,
} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import {
	TodoAppContainer,
	ContactListingContainer,
	CreateContactFormContainer,
	ContactProfileContainer,
} from './containers/index';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Route exact path="/todo" component={TodoAppContainer} />
			<Route exact path="/contacts" component={ContactListingContainer} />
			<Route exact path="/contacts/create" component={CreateContactFormContainer} />
			<Route exact path="/contact/:id" component={ContactProfileContainer} />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
