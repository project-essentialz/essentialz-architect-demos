import React, { useState } from 'react';
import { v4 } from 'uuid';

import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';

import {
	Navbar,
	Handler,
	ModalProps,
} from './components';
import {
	HomeContainer,
	TodoAppContainer,
	ContactsContainer,
	CreateContactFormContainer,
	PhonebookProfileContainer,
} from './containers/index';

export const App = () => {
	const [handlers, setHandlers] = useState<ModalProps[]>([]);

	const onLoading = (message : string, timeout = 3,) => {
		setHandlers(pre => [
			...pre, {
				timeout,
				message,
				variant: 'loading',
				key: v4(),
			},
		]);
	};

	const onSuccess = (message : string, timeout = 3,) => {
		setHandlers(pre => [
			...pre, {
				timeout,
				message,
				variant: 'success',
				key: v4(),
			},
		]);
	};

	const onError = (error : string, timeout = 3) => {
		setHandlers(pre => [
			...pre, {
				timeout,
				message: error,
				variant: 'error',
				key: v4(),
			},
		]);
	};

	return (
		<>
			<Navbar />
			<Handler data={handlers} />
			<Router>
				<Switch>
					<Route exact path="/" render={HomeContainer} />
				</Switch>
				<Switch>
					<Route exact path="/contacts" render={ContactsContainer} />
					<Route exact path="/contacts/create" render={CreateContactFormContainer} />
					<Route exact path="/contacts/:id" render={PhonebookProfileContainer} />
				</Switch>
				<Switch>
					<Route exact path="/todo" render={TodoAppContainer} />
				</Switch>
			</Router>
		</>
	);
};