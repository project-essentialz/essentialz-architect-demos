import React from 'react';

import {
	Auth,
	User,
} from './containers';

import client from './services/architect';
import { ArchitectAuthProviders } from 'architect-sdk/lib/core/auth';

const App = () : React.ReactElement => {
	const handleLogin = (
		email : string,
		password : string,
		provider : ArchitectAuthProviders,
	) => {
		client.login({
			email,
			password,
		}, provider)
			.then(() => window.location.reload());
	};

	const handleRegister = (
		email : string,
		password : string,
		provider : ArchitectAuthProviders,
	) => {
		client.users.create({
			email,
			password,
			provider,
		}).then(() => handleLogin(email, password, provider));
	};

	const getCurrentUser = async () => {
		const userId = client.getUserId() || '';
		const user = await client.users.get(userId);
		return user;
	};

	const logoutUser = () => {
		client.logout()
			.then(() => window.location.reload());
	};

	return client.isAuthenticated() ? (
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
