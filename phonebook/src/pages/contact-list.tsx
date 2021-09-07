import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import { Button } from '../components/button.component';
import { Card } from '../components/card.component';
import { CardHeader } from '../components/card-header.component';
import { CardBody } from '../components/card-body.component';
import { ContactBlock } from '../components/contact-block.component';

// Types
import { Contact } from '../types';

// Services
import architect from '../services/architect.service';

// Routes
import { routes } from '../routes';

export const ContactList: React.FC = () => {
	const [contacts, setContacts] = useState<Contact[]>([]);
	const [loading, setLoading] = useState(false);

	const deleteContact = (id: string) => {
		if (loading) return;
		architect
			.contacts
			.delete(id)
			.then(() => setContacts(pre => pre.filter(contact => contact.id !== id)))
			.then(() => setLoading(false));
	};

	useEffect(() => {
		architect.contacts
			.getAll()
			.then(setContacts)
			.catch(() => {});
	}, []);

	return (
		<Card>
			<CardHeader title="Contacts">
				<Link to={routes.create}>
					<Button>Create new contact</Button>
				</Link>
			</CardHeader>
			<CardBody>
				<ul className="divide-y divide-gray-200">
					{
						contacts.map(contact => (
							<li key={`contact-${contact.id}`}>
								<ContactBlock contact={contact} deleteContact={deleteContact} />
							</li>
						))
					}
				</ul>
			</CardBody>
		</Card>
	);
};
