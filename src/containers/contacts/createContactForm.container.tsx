import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

// Styles
import styles from '../../styles/contact.module.css';

// Architect
import client from '../../services/architect';

// Types
import { Contact } from '../../types/types';

type InputField = {
	name: string;
	type: string;
	label: string;
}

const inputs : InputField[] = [
	{
		name: 'firstName',
		type: 'text',
		label: 'First name',
	},
	{
		name: 'lastName',
		type: 'text',
		label: 'Last name',
	},
	{
		name: 'email',
		type: 'email',
		label: 'Email',
	},
	{
		name: 'phone',
		type: 'text',
		label: 'Phone',
	},
	{
		name: 'pictureSrc',
		type: 'file',
		label: 'Upload contact picture',
	},
];

export const CreateContactFormContainer = () => {
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [picture, setPicture] = useState<File>();
	const history = useHistory();

	const handleInput = (inputName: string, e: ChangeEvent<HTMLInputElement>) : void => {
		inputName === 'firstName' && setFirstName(e.currentTarget.value);
		inputName === 'lastName' && setLastName(e.currentTarget.value);
		inputName === 'email' && setEmail(e.currentTarget.value);
		inputName === 'phone' && setPhone(e.currentTarget.value);
		inputName === 'pictureSrc' && (e.currentTarget.files && setPicture(e.currentTarget.files[0]));
	};

	const validateInput = () : boolean => {
		const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (firstName.length === 0 ||
			lastName.length === 0 ||
			email.length === 0 ||
			phone.length === 0 ||
			!emailRe.test(String(email).toLowerCase())) {
			return false;
		}
		return true;
	};

	const createContact = () => {
		if (!validateInput()) { return; }
		const resource : Contact = {
			firstName,
			lastName,
			email,
			phone,
			pictureUrl: 'https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png',
			meta: {},
		};
		picture && client.files
			.upload(picture)
			.then((data) => {
				resource.pictureUrl = data.url;
			})
			.catch(console.error);
		client.contacts
			.create(resource)
			.then(() => history.push('/contacts'))
			.catch(console.error);
	};

	return (
		<form
			className={styles.contactFormContainer}
		>
			{inputs.map((input : InputField) => (
				<div
					className={styles.contactInputContainer}
				>
					<label
						htmlFor={input.name}
						className={styles.contactInputLabel}
					>
						{input.label}
					</label>
					<input
						id={input.name}
						className={input.type === 'file' ? styles.contactFileInput : styles.contactInput}
						name={input.name}
						type={input.type}
						placeholder={input.label}
						onChange={(e : ChangeEvent<HTMLInputElement>) => handleInput(input.name, e)}
					/>
				</div>
			))}
			<div
				className={styles.contactInputContainer}
			>
				<input
					onClick={() => createContact()}
					type="button"
					value="Create"
					className={styles.contactButton}
				/>
			</div>
		</form>
	);
};
