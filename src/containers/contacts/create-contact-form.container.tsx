import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

// Architect
import client from '../../services/architect.service';

// Types
import { Contact } from '../../types';

// Components
import {
	Form,
	Input,
	Button,
} from '../../components';

type InputField = {
	name: string;
	type: string;
	label: string;
	errorMessage: string;
	hasError: boolean;
	validationRule: (input : string) => boolean;
}

const inputs : InputField[] = [
	{
		name: 'firstName',
		type: 'text',
		label: 'First name',
		errorMessage: 'First name is required',
		hasError: false,
		validationRule: (input) => {
			if (input.length === 0) {
				return true;
			}
			return false;
		},
	},
	{
		name: 'lastName',
		type: 'text',
		label: 'Last name',
		errorMessage: 'Last name is required',
		hasError: false,
		validationRule: (input) => {
			if (input.length === 0) {
				return true;
			}
			return false;
		},
	},
	{
		name: 'email',
		type: 'email',
		label: 'Email',
		errorMessage: 'Email is not valid',
		hasError: false,
		validationRule: (input) => {
			const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return !emailRe.test(input.toLowerCase());
		},
	},
	{
		name: 'phone',
		type: 'text',
		label: 'Phone',
		errorMessage: 'Phone is not valid',
		hasError: false,
		validationRule: (input) => {
			const phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
			return !phoneRe.test(input);
		},
	},
	{
		name: 'picture',
		type: 'file',
		label: 'Upload contact picture',
		errorMessage: '',
		hasError: false,
		validationRule: () => { return false; },
	},
];

export const CreateContactFormContainer = () => {
	const [data, setData] = useState<InputField[]>(inputs);
	const [formData, setFormData] = useState<Record<string, any>>({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		picture: '',
	});
	const history = useHistory();

	const validateInput = () : boolean => {
		let validated = true;
		for (const [i, input] of Object.entries(inputs)) {
			input.hasError = input.validationRule(formData[Object.keys(formData)[Number(i)]]);
			if (input.hasError) { validated = false; }
		}
		return validated;
	};

	const handleInput = (e: ChangeEvent<HTMLInputElement>) : void => {
		setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.files ? e.currentTarget.files[0] : e.currentTarget.value });
	};

	const createContact = async () => {
		const validated = validateInput();
		if (!validated) {
			setData(inputs);
			return;
		}

		const resource : Contact = {
			firstName: formData.firstName,
			lastName: formData.lastName,
			email: formData.email,
			phone: formData.phone,
			pictureUrl: 'https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png',
			meta: {},
		};

		try {
			if (formData.picture) {
				const { url } = await client.files.upload(formData.picture);
				resource.pictureUrl = url;
			}
			await client.contacts.create(resource);
			history.push('/contacts');
		} catch {
			console.log('Error');
		}
	};

	return (
		<Form>
			{data.map((input : InputField) => (
				<Input
					name={input.name}
					label={input.label}
					type={input.type}
					onChange={handleInput}
				/>
			))}
			<Button
				value="Create"
				onClick={createContact}
			>
				Create
			</Button>
		</Form>
	);
};
