import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Styles
import styles from '../../styles/contact.module.css';

// Architect
import client from '../../services/architect';

// Types
import { Contact } from '../../types/types';

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
		<div>
			{editMode ? (
				<div
					className={styles.contactFormContainer}
				>
					<div
						className={styles.contactInputContainer}
					>
						<input className={styles.contactInput} defaultValue={contact?.firstName} onChange={e => setFirstName(e.currentTarget.value)} />
					</div>
					<div
						className={styles.contactInputContainer}
					>
						<input className={styles.contactInput} defaultValue={contact?.lastName} onChange={e => setLastName(e.currentTarget.value)} />
					</div>
					<div
						className={styles.contactInputContainer}
					>
						<input className={styles.contactInput} defaultValue={contact?.phone} onChange={e => setPhone(e.currentTarget.value)} />
					</div>
					<div
						className={styles.contactInputContainer}
					>
						<input className={styles.contactInput} defaultValue={contact?.email} onChange={e => setEmail(e.currentTarget.value)} />
					</div>
					<div
						className={styles.contactInputContainer}
					>
						<input className={styles.contactButton} type="button" value="Save" onClick={editContact} />
					</div>
					<div
						className={styles.contactInputContainer}
					>
						<input className={styles.contactButton} type="button" value="Cancel" onClick={() => setEditMode(false)} />
					</div>
				</div>
			) : (
				<div
					className={styles.contactFormContainer}
				>
					<p className={styles.contactProfileText}>{contact?.firstName}</p>
					<p className={styles.contactProfileText}>{contact?.lastName}</p>
					<p className={styles.contactProfileText}>{contact?.phone}</p>
					<p className={styles.contactProfileText}>{contact?.email}</p>
					<div
						className={styles.contactInputContainer}
					>
						<input className={styles.contactButton} type="button" value="Edit" onClick={() => setEditMode(true)} />
					</div>
				</div>
			)}
			<div
				className={styles.contactFormContainer}
			>
				<div
					className={styles.contactInputContainer}
				>
					<input className={styles.contactButton} type="button" value="Delete" onClick={deleteContact} />
				</div>
			</div>
		</div>
	);
};
