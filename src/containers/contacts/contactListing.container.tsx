import React, { useState, useEffect } from 'react';

// Architect
import client from '../../services/architect';

// Types
import { Contact } from '../../types/types';

// Components
import {
	ContactElement,
} from '../../components';

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
			<a
				href="/contacts/create"
			>
				Create
			</a>
			<table>
				<tr>
					<th> </th>
					<th>Name</th>
					<th>Phone</th>
					<th>Email</th>
					<th>Other</th>
				</tr>
				{contacts.map((contact : Contact) => (
					<ContactElement.ContactElement
						id={contact.id || ''}
						firstName={contact.firstName}
						lastName={contact.lastName}
						phone={contact.phone}
						email={contact.email}
						pictureUrl={contact.pictureUrl}
					/>
				))}
			</table>
		</div>
	);
};
