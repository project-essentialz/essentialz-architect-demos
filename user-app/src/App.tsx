import React, { useState } from 'react';

import {
	Auth,
	User,
} from './containers';

import client from './services/architect';
import { ArchitectAuthProviders } from 'architect-sdk/lib/core/auth';

const App = () : React.ReactElement => {
	const [isAuthenthicated, setIsAuthenthicated] = useState<boolean>(client.isAuthenticated());

	const handleLogin = (
		email : string,
		password : string,
		provider : ArchitectAuthProviders,
		event : React.FormEvent<HTMLFormElement>,
		setLoading: (value : boolean) => void,
	) => {
		event.preventDefault();
		setLoading(true);
		client.login({
			email,
			password,
		}, provider)
			.then(() => {
				setLoading(false);
				setIsAuthenthicated(client.isAuthenticated());
			})
			.catch(() => setLoading(false));
	};

	const handleRegister = (
		email : string,
		password : string,
		provider : ArchitectAuthProviders,
		event : React.FormEvent<HTMLFormElement>,
		setLoading: (value : boolean) => void,
	) => {
		event.preventDefault();
		setLoading(true);
		client.users.create({
			email,
			password,
			provider,
		})
			.then(() => setLoading(false))
			.catch(() => setLoading(false));
	};

	const getCurrentUser = async () => {
		const userId = client.getUserId() || '';
		const user = await client.users.get(userId);
		return user;
	};

	const logoutUser = () => {
		client.logout()
			.then(() => setIsAuthenthicated(client.isAuthenticated()));
	};

	return isAuthenthicated ? (
		<User
			onLoad={getCurrentUser}
			onLogout={logoutUser}
		/>
	) : (
		<Auth
			onLogin={handleLogin}
			onRegister={handleRegister}
		/>
	);
};

export default App;
