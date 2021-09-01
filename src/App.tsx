import React, { useState } from 'react';
import { uuid } from 'uuidv4';

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
	PhonebookListingContainer,
	CreatePhonebookFormContainer,
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
				key: uuid(),
			},
		]);
	};

	const onError = (error : any, timeout = 3) => {
		setHandlers(pre => [
			...pre, {
				timeout,
				message: error.message,
				variant: 'error',
				key: uuid(),
			},
		]);
	};

	return (
		<>
			<Navbar />
			<Handler data={handlers} />
			<Router>
				<Switch>
					<Route exact path="/" render={(props : any) => <HomeContainer {...props} handleLoading={onLoading} handleError={onError} />} />
				</Switch>
				<Switch>
					<Route exact path="/phonebook" component={PhonebookListingContainer} />
					<Route exact path="/phonebook/create" component={CreatePhonebookFormContainer} />
					<Route exact path="/contact/:id" component={PhonebookProfileContainer} />
				</Switch>
				<Switch>
					<Route exact path="/todo" render={(props : any) => <TodoAppContainer {...props} handleLoading={onLoading} handleError={onError} />} />
				</Switch>
			</Router>
		</>
	);
};
