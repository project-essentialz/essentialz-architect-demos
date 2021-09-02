import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { PlusCircleIcon } from '@heroicons/react/solid';

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
	placeholder: string;
	required: boolean;
}

const inputs : InputField[] = [
	{
		name: 'firstName',
		type: 'text',
		placeholder: 'First name',
		required: true,
	},
	{
		name: 'lastName',
		type: 'text',
		placeholder: 'Last name',
		required: true,
	},
	{
		name: 'email',
		type: 'email',
		placeholder: 'Email',
		required: true,
	},
	{
		name: 'phone',
		type: 'text',
		placeholder: 'Phone',
		required: true,
	},
	{
		name: 'picture',
		type: 'file',
		placeholder: 'Contact picture upload',
		required: false,
	},
];

export const CreateContactFormContainer = (props : any) => {
	const {
		handleError,
		handleLoading,
		handleSuccess,
	} = props;
	const [formData, setFormData] = useState<Record<string, any>>({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		picture: '',
	});
	const history = useHistory();

	const handleInput = (e: ChangeEvent<HTMLInputElement>) : void => {
		setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.files ? e.currentTarget.files[0] : e.currentTarget.value });
	};

	const createContact = async (e : any) => {
		e.preventDefault();
		handleLoading('Creating contact...');

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
			handleSuccess('Contact has been created.');
			history.push('/contacts');
		} catch ({ message }) {
			handleError(message);
		}
	};

	return (
		<Form
			onSubmit={createContact}
			className={`
		items-center
		pt-6
		pb-8
		mb-4
		mt-10
		col-span-1
		flex
		flex-col
		bg-white
		rounded-lg
		shadow
		divide-y
		divide-gray-200
		`}
		>
			{inputs.map((inputProps : InputField) => (
				<Input
					{...inputProps}
					onChange={handleInput}
					onInvalid={(e) => {
						e.preventDefault();
						handleError(`${inputProps.placeholder} input is not valid.`);
					}}
					className="my-2 w-80"
				/>
			))}
			<Button
				value="Create"
				type="submit"
				variant="blank"
				className="my-2 w-80 justify-center"
			>
				<PlusCircleIcon className="h-5 w-5 mr-2" />
				Create
			</Button>
		</Form>
	);
};
