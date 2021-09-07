import React, { useState } from 'react';

import {
	Header,
	Container,
	LoginForm,
	RegisterForm,
} from '../components';

import {
	ArchitectAuthProviders,
} from 'architect-sdk/lib/core/auth';

type AuthProps = {
	onLogin: (email : string, password : string, provider : ArchitectAuthProviders, e : React.FormEvent<HTMLFormElement>, setLoading : (value : boolean) => void) => void;
	onRegister: (email : string, password : string, provider : ArchitectAuthProviders, e : React.FormEvent<HTMLFormElement>, setLoading : (value : boolean) => void) => void;
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
