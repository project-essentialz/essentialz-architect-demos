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
		console.log(email, password, provider);
	};

	return client.isAuthenticated() ? (
		<User />
	) : (
		<Auth
			onLogin={handleLogin}
			onRegister={handleRegister}
		/>
	);
};

export default App;
