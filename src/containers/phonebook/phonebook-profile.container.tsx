import React, { useState, useEffect, FormEventHandler } from 'react';
import { useHistory } from 'react-router-dom';

// Architect
import client from '../../services/architect.service';

// Types
import { Contact } from '../../types';

// Components
import {
	Container,
	Form,
	Input,
	Button,
	Image,
	Text,
} from '../../components';

type InputProps = {
	key: number;
	value: string;
	name: string;
	label: string;
	type: string;
}

const getInputProps = (data : Contact) : InputProps[] => {
	return [
		{
			key: 0,
			value: data.firstName,
			name: 'firstName',
			label: 'First name',
			type: 'text',
		},
		{
			key: 1,
			value: data.lastName,
			name: 'lastName',
			label: 'Last name',
			type: 'text',
		},
		{
			key: 2,
			value: data.phone,
			name: 'phone',
			label: 'Phone',
			type: 'text',
		},
		{
			key: 3,
			value: data.email,
			name: 'email',
			label: 'Email',
			type: 'email',
		},
	];
};

export const PhonebookProfileContainer = (props : any) => {
	const {
		match,
		handleError,
		handleSuccess,
	} = props;

	const [contact, setContact] = useState<Contact>();
	const [editMode, setEditMode] = useState<boolean>(false);
	const [formData, setFormData] = useState<Contact>({
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
		pictureUrl: '',
	});
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
		handleSuccess('Contact has been removed.');
		client.contacts
			.delete(contactId)
			.then(() => history.push('/contacts'))
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
				getContact();
			})
			.catch(({ message }) => handleError(message));
		handleSuccess('Contact has been updated!');
	};

	useEffect(() => getContact(), []);

	return (
		<>
			{editMode ? (
				<Form
					onSubmit={editContact}
				>
					{getInputProps(formData).map(inputProps => (
						<Input
							{...inputProps}
							onChange={(e) => {
								setFormData({
									...formData,
									[inputProps.name]: e.currentTarget.value,
								});
							}}
						/>
					))}
					<Button
						type="submit"
					>
						Edit
					</Button>
					<Button
						onClick={() => setEditMode(false)}
					>
						Cancel
					</Button>
				</Form>
			) : (
				<Container>
					<Image
						src={contact?.pictureUrl || ''}
						width={300}
					/>
					<Text>{contact?.firstName}</Text>
					<Text>{contact?.lastName}</Text>
					<Text>{contact?.phone}</Text>
					<Text>{contact?.email}</Text>
					<Button
						onClick={() => setEditMode(true)}
					>
						Edit
					</Button>
				</Container>
			)}
			<Container>
				<Button
					onClick={deleteContact}
				>
					Remove
				</Button>
			</Container>
		</>
	);
};
