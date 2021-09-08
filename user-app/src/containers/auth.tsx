import React, { useState } from 'react';

import {
	Header,
	Container,
	LoginForm,
	RegisterForm,
} from '../components';

import {
	ArchitectAuthProviders,
	ArchitectCredentials,
} from 'architect-sdk/lib/core/auth';

type AuthProps = {
	onLogin: (credentials : ArchitectCredentials, provider : ArchitectAuthProviders, setLoading : (value : boolean) => void) => void;
	onRegister: (credentials : ArchitectCredentials, provider : ArchitectAuthProviders, setLoading : (value : boolean) => void) => void;
}

export const Auth = (props : AuthProps) : React.ReactElement => {
	const {
		onLogin,
		onRegister,
	} = props;

	const [loginForm, setLoginForm] = useState<boolean>(true);

	const handleFormChange = () => setLoginForm(pre => !pre);

	return (
		<Container>

			<Header />

			{loginForm ? (
				<LoginForm
					onSubmit={onLogin}
					onSetForm={handleFormChange}
				/>
			) : (
				<RegisterForm
					onSubmit={onRegister}
					onSetForm={handleFormChange}
				/>
			)}

		</Container>
	);
};
