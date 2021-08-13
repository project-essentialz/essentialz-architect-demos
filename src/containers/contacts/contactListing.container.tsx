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
			<ContactElement.NavBar />
			<ContactElement.Table>
				<ContactElement.TableHeaders>
					<div> </div>
					<div>Name</div>
					<div>Phone</div>
					<div>Email</div>
					<div>Other</div>
				</ContactElement.TableHeaders>
				{contacts.map((contact : Contact) => (
					<ContactElement.TableRow
						key={contact.id}
					>
						<ContactElement.ContactElement
							id={contact.id || ''}
							firstName={contact.firstName}
							lastName={contact.lastName}
							phone={contact.phone}
							email={contact.email}
							pictureUrl={contact.pictureUrl}
						/>
					</ContactElement.TableRow>
				))}
			</ContactElement.Table>
		</div>
	);
};
