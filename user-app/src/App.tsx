import React, { useState } from 'react';

import {
	Auth,
	User,
} from './containers';

import client from './services/architect';
import { ArchitectAuthProviders, ArchitectCredentials } from 'architect-sdk/lib/core/auth';

const App = () : React.ReactElement => {
	const [isAuthenthicated, setIsAuthenthicated] = useState<boolean>(client.isAuthenticated());

	const handleLogin = (
		credentials : ArchitectCredentials,
		provider : ArchitectAuthProviders,
		setLoading: (value : boolean) => void,
	) => {
		setLoading(true);
		client.login(credentials, provider)
			.then(() => {
				setLoading(false);
				setIsAuthenthicated(client.isAuthenticated());
			})
			.catch(() => setLoading(false));
	};

	const handleRegister = (
		credentials : ArchitectCredentials,
		provider : ArchitectAuthProviders,
		setLoading: (value : boolean) => void,
	) => {
		setLoading(true);
		client.users.create({
			...credentials,
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
