import React, { useState } from 'react';

import {
	LoginIcon,
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
} from 'architect-sdk/lib/core/auth';

const loginInputProps : InputProps[] = [
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

export const LoginForm = (props : FormProps) : React.ReactElement => {
	const {
		onSetForm,
		onSubmit,
	} = props;
	const [formData, setFormData] = useState<Record<string, string>>({
		email: '',
		password: '',
		provider: 'email',
	});
	const [isLoading, setisLoading] = useState<boolean>(false);

	const handleInput = (e : React.FormEvent<HTMLInputElement>, inputName : string) => {
		setFormData({ ...formData, [inputName]: e.currentTarget.value });
	};

	return (
		<FormWrapper
			onSubmit={(e) => {
				onSubmit(
					formData.email,
					formData.password,
					formData.provider as ArchitectAuthProvider,
					e,
					setisLoading,
				);
			}}
		>
			{loginInputProps.map(inputProps => (
				<Input
					{...inputProps}
					onChange={e => handleInput(e, inputProps.name || '')}
				/>
			))}
			<Button
				type="submit"
				disabled={isLoading}
				variant={isLoading ? 'blank' : 'default'}
			>
				{isLoading ? <RefreshIcon className="w-6 h-6 mr-2 pb-1 animate-spin" /> : <LoginIcon className="w-6 h-6 mr-2 pb-1" /> }
				{' '}
				Login
			</Button>
			<Footer
				label="or register"
			>
				<Button
					variant="blank"
					onClick={onSetForm}
				>
					Register
				</Button>
			</Footer>
		</FormWrapper>
	);
};
