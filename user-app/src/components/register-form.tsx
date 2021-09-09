import React, { useState } from 'react';

import {
	PlusCircleIcon,
	RefreshIcon,
} from '@heroicons/react/solid';

import {
	Input,
	InputProps,
	Button,
	FormWrapper,
	Footer,
} from '.';

import { FormProps } from '../types/form';
import {
	ArchitectAuthProvider,
	ArchitectCredentials,
} from 'architect-sdk/lib/core/auth';

const registerInputProps : InputProps[] = [
	{
		key: 0,
		label: 'Email address',
		placeholder: 'Your email address...',
		type: 'email',
		name: 'email',
		required: true,
	},
	{
		key: 1,
		label: 'Password',
		placeholder: 'Your password...',
		type: 'password',
		name: 'password',
		required: true,
	},
];

type Form = {
	provider: ArchitectAuthProvider;
	credentials: ArchitectCredentials;
};

export const RegisterForm = (props : FormProps) : React.ReactElement => {
	const {
		onSetForm,
		onSubmit,
	} = props;
	const [formData, setFormData] = useState<Form>({
		provider: 'email' as ArchitectAuthProvider,
		credentials: {} as ArchitectCredentials,
	});
	const [isLoading, setisLoading] = useState<boolean>(false);

	const handleInput = (inputName : string, inputValue : string) => {
		setFormData(pre => ({ ...pre, credentials: { ...pre.credentials, [inputName]: inputValue } }));
	};

	return (
		<FormWrapper
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit(
					formData.credentials,
					formData.provider,
					setisLoading,
				);
			}}
		>
			{registerInputProps.map(inputProps => (
				<Input
					{...inputProps}
					onChange={e => handleInput(inputProps.name || '', e.currentTarget.value)}
				/>
			))}
			<Button
				type="submit"
				disabled={isLoading}
				variant={isLoading ? 'blank' : 'default'}
			>
				{isLoading ? <RefreshIcon className="w-6 h-6 mr-2 pb-1 animate-spin" /> : <PlusCircleIcon className="w-6 h-6 mr-2 pb-1" /> }
				{' '}
				Register
			</Button>
			<Footer
				label="or login"
			>
				<Button
					variant="blank"
					onClick={onSetForm}
				>
					Login
				</Button>
			</Footer>
		</FormWrapper>
	);
};
