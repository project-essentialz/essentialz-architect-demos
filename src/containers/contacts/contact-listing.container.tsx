import React, { useState, useEffect } from 'react';

// Architect
import client from '../../services/architect.service';

// Types
import { Contact } from '../../types';

// Components
import {
	ContactElement,
} from '../../components';
import { Table, ContentProps } from '../../components';

const fields : ContentProps[] = [
	{
		fieldName: '',
	},
	{
		fieldName: 'Name',
	},
	{
		fieldName: 'Phone',
	},
	{
		fieldName: 'Other',
	},
];

export const ContactListingContainer = () => {
	const [contacts, setContacts] = useState<Contact[]>([]);

	const getContacts = () => {
		client.contacts
			.getAll()
			.then(setContacts)
			.catch(console.error);
	};

	useEffect(() => getContacts(), []);

	return (
		<div>
			<Table
				fields={fields}
			>
				{contacts.map((contact : Contact) => (
					<ContactElement
						id={contact.id || ''}
						firstName={contact.firstName}
						lastName={contact.lastName}
						phone={contact.phone}
						email={contact.email}
						pictureUrl={contact.pictureUrl}
					/>
				))}
			</Table>
		</div>
	);
};
