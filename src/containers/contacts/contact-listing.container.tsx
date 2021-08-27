import React, { useState, useEffect } from 'react';

// Architect
import { ArchitectWrapper } from '../../services/api.service';

// Types
import { Contact } from '../../types/types';

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
	const crud = new ArchitectWrapper('contacts');

	const getContacts = () => {
		crud.read({
			onSuccess: (data : any) => setContacts(data),
			onError: (error : any) => console.log(error),
		});
	};

	useEffect(() => getContacts(), []);

	return (
		<div>
			<Table
				fields={fields}
			>
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
			</Table>
		</div>
	);
};
