import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { PencilIcon, TrashIcon, XIcon } from '@heroicons/react/solid';

// Architect
import client from '../../services/architect.service';

// Types
import { Contact } from '../../types';

// Components
import {
	Container,
	Text,
	Form,
	Input,
	Button,
	Image,
} from '../../components';

type InputProps = {
	key: number;
	name: keyof Contact;
	label: string;
	type: string;
}

const inputs : InputProps[] = [
	{
		key: 0,
		name: 'firstName',
		label: 'First name',
		type: 'text',
	},
	{
		key: 1,
		name: 'lastName',
		label: 'Last name',
		type: 'text',
	},
	{
		key: 2,
		name: 'phone',
		label: 'Phone',
		type: 'text',
	},
	{
		key: 3,
		name: 'email',
		label: 'Email',
		type: 'email',
	},
];

const contactDefault : Contact = {
	firstName: '',
	lastName: '',
	phone: '',
	email: '',
	pictureUrl: '',
};

export const PhonebookProfileContainer = (props : any) => {
	const {
		match,
		handleError,
		handleSuccess,
	} = props;

	const [contact, setContact] = useState<Contact>(contactDefault);
	const [editMode, setEditMode] = useState<boolean>(true);
	const [formData, setFormData] = useState<Contact>(contactDefault);
	const history = useHistory();

	const contactId : string = match?.params.id;

	const handleUpdate = (data : Contact) => {
		setContact(data);
		setFormData(data);
		setEditMode(false);
	};

	const getContact = () : void => {
		client.contacts
			.get(contactId)
			.then(handleUpdate)
			.catch(({ message }) => handleError(message));
	};

	const deleteContact = () : void => {
		client.contacts
			.delete(contactId)
			.then(() => {
				handleSuccess('Contact has been removed.');
				history.push('/contacts');
			})
			.catch(({ message }) => handleError(message));
	};

	const editContact = (e : any) : void => {
		e.preventDefault();
		client.contacts
			.update(contactId, {
				firstName: formData?.firstName || '',
				lastName: formData?.lastName || '',
				phone: formData?.phone || '',
				email: formData?.email || '',
			})
			.then(() => {
				handleSuccess('Contact has been updated!');
				getContact();
			})
			.catch(({ message }) => handleError(message));
	};

	useEffect(() => getContact(), []);

	return editMode ? (
		<Form
			onSubmit={editContact}
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
			<Image
				src={contact?.pictureUrl}
				className="rounded-full w-80 m-10"
			/>
			{inputs.map(inputProps => (
				<Input
					{...inputProps}
					onChange={(e : any) => {
						setFormData({
							...formData,
							[e.currentTarget.name]: e.currentTarget.value,
						});
					}}
					onInvalid={(e : any) => {
						e.preventDefault();
						handleError(`${inputProps.label} input is not valid.`);
					}}
					defaultValue={contact[inputProps.name] as string}
					required
					className="my-2 w-80"
				/>
			))}
			<Button
				type="submit"
				variant="blank"
				className="my-2 w-80 justify-center"
			>
				<PencilIcon className="h-5 w-5 mr-2" />
				Edit
			</Button>
			<Button
				onClick={() => setEditMode(false)}
				variant="blank"
				className="my-2 w-80 justify-center"
			>
				<XIcon className="h-5 w-5 mr-2" />
				Cancel
			</Button>
		</Form>
	) : (
		<Container
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
			<Image
				src={contact?.pictureUrl}
				className="rounded-full w-80 m-10"
			/>
			<Text
				className="text-2xl text-gray-700 font-medium py-2"
			>
				{contact?.firstName}
				{' '}
				{contact?.lastName}
			</Text>
			<Text
				className="text-lg text-gray-500 font-medium py-2"
			>
				{contact?.email}
			</Text>
			<Text
				className="text-lg text-gray-500 font-medium py-2"
			>
				{contact?.phone}
			</Text>
			<Button
				onClick={() => setEditMode(true)}
				variant="blank"
				className="my-2 w-80 justify-center"
			>
				<PencilIcon className="h-5 w-5 mr-2" />
				Edit
			</Button>
			<Button
				onClick={deleteContact}
				variant="blank"
				className="my-2 w-80 justify-center"
			>
				<TrashIcon className="h-5 w-5 mr-2" />
				Remove
			</Button>
		</Container>
	);
};
