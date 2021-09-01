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
				key: uuid(),
			},
		]);
	};

	const onSuccess = (message : string, timeout = 3,) => {
		setHandlers(pre => [
			...pre, {
				timeout,
				message,
				variant: 'success',
				key: uuid(),
			},
		]);
	};

	const onError = (error : string, timeout = 3) => {
		setHandlers(pre => [
			...pre, {
				timeout,
				message: error,
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
					<Route
						exact
						path="/"
						render={
							(props : any) => (
								<HomeContainer {...props} handleLoading={onLoading} handleError={onError} handleSuccess={onSuccess} />
							)
						}
					/>
				</Switch>
				<Switch>
					<Route
						exact
						path="/contacts"
						render={
							(props : any) => (
								<ContactsContainer {...props} handleLoading={onLoading} handleError={onError} handleSuccess={onSuccess} />
							)
						}
					/>
					<Route
						exact
						path="/contacts/create"
						render={
							(props : any) => (
								<CreateContactFormContainer {...props} handleLoading={onLoading} handleError={onError} handleSuccess={onSuccess} />
							)
						}
					/>
					<Route
						exact
						path="/contacts/:id"
						render={
							(props : any) => (
								<PhonebookProfileContainer {...props} handleLoading={onLoading} handleError={onError} handleSuccess={onSuccess} />
							)
						}
					/>
				</Switch>
				<Switch>
					<Route
						exact
						path="/todo"
						render={
							(props : any) => (
								<TodoAppContainer {...props} handleLoading={onLoading} handleError={onError} handleSuccess={onSuccess} />
							)
						}
					/>
				</Switch>
			</Router>
		</>
	);
};
