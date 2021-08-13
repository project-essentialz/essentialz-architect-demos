import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Styles
import styles from '../../styles/contact.module.css';

// Architect
import client from '../../services/architect';

// Types
import { Contact } from '../../types/types';

// Components
import { ContactElement } from '../../components';

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
			.then(() => history.push('/contacts'));
	};

	const editContact = () : void => {
		client.contacts
			.update(contactId, {
				firstName,
				lastName,
				phone,
				email,
			})
			.then(getContact);
		setEditMode(false);
	};

	useEffect(() => getContact(), []);

	return (
		<>
			<ContactElement.NavBar />
			{editMode ? (
				<ContactElement.FormWrapper
					padding={30}
				>
					<ContactElement.Input
						value={contact?.firstName}
						name="firstName"
						label="First name"
						type="text"
						onChange={(e) => {
							setFirstName(e.currentTarget.value);
						}}
					/>
					<ContactElement.Input
						value={contact?.lastName}
						name="lastName"
						label="Last name"
						type="text"
						onChange={(e) => {
							setLastName(e.currentTarget.value);
						}}
					/>
					<ContactElement.Input
						value={contact?.phone}
						name="phone"
						label="Phone"
						type="text"
						onChange={(e) => {
							setPhone(e.currentTarget.value);
						}}
					/>
					<ContactElement.Input
						value={contact?.email}
						name="email"
						label="Email"
						type="text"
						onChange={(e) => {
							setEmail(e.currentTarget.value);
						}}
					/>
					<ContactElement.Button
						value="Save"
						onClick={editContact}
					/>
					<ContactElement.Button
						value="Cancel"
						onClick={() => setEditMode(false)}
					/>
				</ContactElement.FormWrapper>
			) : (
				<ContactElement.FormWrapper
					padding={50}
				>
					<ContactElement.Image
						src={contact?.pictureUrl || ''}
						size={300}
						centered
					/>
					<p className={styles.contactProfileText}>{contact?.firstName}</p>
					<p className={styles.contactProfileText}>{contact?.lastName}</p>
					<p className={styles.contactProfileText}>{contact?.phone}</p>
					<p className={styles.contactProfileText}>{contact?.email}</p>
					<ContactElement.Button
						value="Edit"
						onClick={() => setEditMode(true)}
					/>
				</ContactElement.FormWrapper>
			)}
			<ContactElement.FormWrapper>
				<ContactElement.Button
					value="Delete"
					onClick={deleteContact}
				/>
			</ContactElement.FormWrapper>
		</>
	);
};
