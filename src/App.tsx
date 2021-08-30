import React from 'react';

import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';

import {
	TodoAppContainer,
	ContactListingContainer,
	CreateContactFormContainer,
	ContactProfileContainer,
} from './containers/index';

export const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/contacts" component={ContactListingContainer} />
				<Route exact path="/contacts/create" component={CreateContactFormContainer} />
				<Route exact path="/contact/:id" component={ContactProfileContainer} />
			</Switch>
			<Switch>
				<Route exact path="/todo" component={TodoAppContainer} />
			</Switch>
		</Router>
	);
};
