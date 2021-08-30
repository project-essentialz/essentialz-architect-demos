import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Architect
import client from '../../services/architect.service';

// Types
import { Contact } from '../../types/types';

// Components
import {
	Form,
	Input,
	Button,
	Image,
} from '../../components';

export const ContactProfileContainer = (props : any) => {
	const { match } = props;

	const [contact, setContact] = useState<Contact>();
	const [editMode, setEditMode] = useState<boolean>(false);
	const [firstName, setFirstName] = useState<string | undefined>(contact?.firstName);
	const [lastName, setLastName] = useState<string | undefined>(contact?.lastName);
	const [phone, setPhone] = useState<string | undefined>(contact?.phone);
	const [email, setEmail] = useState<string | undefined>(contact?.email);
	const history = useHistory();

	const contactId : string = match?.params.id;

	const getContact = () : void => {
		client.contacts
			.get(contactId)
			.then(setContact)
			.catch(console.error);
	};

	const deleteContact = () : void => {
		client.contacts
			.delete(contactId)
			.then(() => history.push('/contacts'))
			.catch(console.error);
	};

	const editContact = () : void => {
		client.contacts
			.update(contactId, {
				firstName,
				lastName,
				phone,
				email,
			})
			.then(() => {
				getContact();
				setEditMode(false);
			})
			.catch(console.error);
	};

	useEffect(() => getContact(), []);

	return (
		<>
			{editMode ? (
				<Form>
					<Input
						value={contact?.firstName}
						name="firstName"
						label="First name"
						type="text"
						onChange={(e) => {
							setFirstName(e.currentTarget.value);
						}}
					/>
					<Input
						value={contact?.lastName}
						name="lastName"
						label="Last name"
						type="text"
						onChange={(e) => {
							setLastName(e.currentTarget.value);
						}}
					/>
					<Input
						value={contact?.phone}
						name="phone"
						label="Phone"
						type="text"
						onChange={(e) => {
							setPhone(e.currentTarget.value);
						}}
					/>
					<Input
						value={contact?.email}
						name="email"
						label="Email"
						type="text"
						onChange={(e) => {
							setEmail(e.currentTarget.value);
						}}
					/>
					<Button
						onClick={editContact}
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
				<Form>
					<Image
						src={contact?.pictureUrl || ''}
						width={300}
					/>
					<p>{contact?.firstName}</p>
					<p>{contact?.lastName}</p>
					<p>{contact?.phone}</p>
					<p>{contact?.email}</p>
					<Button
						onClick={() => setEditMode(true)}
					>
						Edit
					</Button>
				</Form>
			)}
			<Form>
				<Button
					onClick={deleteContact}
				>
					Remove
				</Button>
			</Form>
		</>
	);
};
