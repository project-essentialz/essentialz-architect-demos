import React, { useState, FormEvent } from 'react';

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

export const RegisterForm = (props : FormProps) : React.ReactElement => {
	const {
		onSetForm,
		onSubmit,
	} = props;
	const [formData, setFormData] = useState<Record<string, string>>({
		email: '',
		password: '',
		provider: 'email',
	});
	const [isFormDisabled, setIsFormDisabled] = useState<boolean>(false);

	const handleInput = (e : React.FormEvent<HTMLInputElement>, inputName : string) => {
		setFormData({ ...formData, [inputName]: e.currentTarget.value });
	};

	const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsFormDisabled(true);
		onSubmit(formData.email, formData.password, formData.provider as ArchitectAuthProvider);
	};

	return (
		<FormWrapper
			onSubmit={handleSubmit}
		>
			{registerInputProps.map(inputProps => (
				<Input
					{...inputProps}
					onChange={e => handleInput(e, inputProps.name || '')}
				/>
			))}
			<Button
				type="submit"
				disabled={isFormDisabled}
				variant={isFormDisabled ? 'blank' : 'default'}
			>
				{isFormDisabled ? <RefreshIcon className="w-6 h-6 mr-2 pb-1 animate-spin" /> : <PlusCircleIcon className="w-6 h-6 mr-2 pb-1" /> }
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
