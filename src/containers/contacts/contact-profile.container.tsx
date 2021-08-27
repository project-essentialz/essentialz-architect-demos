import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Styles
import styles from '../../styles/contact.module.css';

// Architect
import { ArchitectWrapper } from '../../services/api.service';

// Types
import { Contact } from '../../types/types';

// Components
import {
	ContactElement,
	Form,
	Input,
	Button,
	Image,
} from '../../components';

export const ContactProfileContainer = (props : any) => {
	const { match } = props;
	const crud = new ArchitectWrapper('contacts');

	const [contact, setContact] = useState<Contact>();
	const [editMode, setEditMode] = useState<boolean>(false);
	const [firstName, setFirstName] = useState<string | undefined>(contact?.firstName);
	const [lastName, setLastName] = useState<string | undefined>(contact?.lastName);
	const [phone, setPhone] = useState<string | undefined>(contact?.phone);
	const [email, setEmail] = useState<string | undefined>(contact?.email);
	const history = useHistory();

	const contactId : string = match?.params.id;

	const getContact = () : void => {
		crud.read({
			onSuccess: (data : any) => setContact(data[0]),
			onError: (error : any) => console.error(error),
		});
	};

	const deleteContact = () : void => {
		crud.delete({
			id: contactId,
			onSuccess: (data : any) => history.push('/contacts'),
			onError: (error : any) => console.error(error),
		});
	};

	const editContact = () : void => {
		crud.update({
			id: contactId,
			description: {
				firstName,
				lastName,
				phone,
				email,
			},
			onSuccess: (data : any) => getContact(),
			onError: (error : any) => console.error(error),
		});
		setEditMode(false);
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
					<p className={styles.contactProfileText}>{contact?.firstName}</p>
					<p className={styles.contactProfileText}>{contact?.lastName}</p>
					<p className={styles.contactProfileText}>{contact?.phone}</p>
					<p className={styles.contactProfileText}>{contact?.email}</p>
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
