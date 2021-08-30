import React from 'react';

import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';

import { Navbar } from './components';
import {
	HomeContainer,
	TodoAppContainer,
	PhonebookListingContainer,
	CreatePhonebookFormContainer,
	PhonebookProfileContainer,
} from './containers/index';

export const App = () => {
	return (
		<>
			<Navbar />
			<Router>
				<Switch>
					<Route exact path="/" component={HomeContainer} />
				</Switch>
				<Switch>
					<Route exact path="/phonebook" component={PhonebookListingContainer} />
					<Route exact path="/phonebook/create" component={CreatePhonebookFormContainer} />
					<Route exact path="/contact/:id" component={PhonebookProfileContainer} />
				</Switch>
				<Switch>
					<Route exact path="/todo" component={TodoAppContainer} />
				</Switch>
			</Router>
		</>
	);
};
