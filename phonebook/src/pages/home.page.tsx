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

// const contacts: Contact[] = [
// 	{
// 		id: '852f5822-1c81-4f86-a7a3-0091610a6e2b',
// 		pictureUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// 		// pictureUrl: 'https://static.remove.bg/remove-bg-web/a4391f37bcf9559ea5f1741ac3cee53c31ab75cc/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg',
// 		firstName: 'James',
// 		lastName: 'Dean',
// 		phone: '+38164555333',
// 		email: 'james.dean@gmail.com',
// 	},
// 	{
// 		id: '00c5c79d-995c-4cdf-828b-8d43bedc0e3d',
// 		pictureUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// 		firstName: 'Kristen',
// 		lastName: 'Ramos',
// 		phone: '+38164555333',
// 		email: 'kristen.ramos@gmail.com',
// 	},
// 	{
// 		id: '8caa1616-28d7-48c1-89b6-95500fd9b39b',
// 		pictureUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// 		firstName: 'Ted',
// 		lastName: 'Fox',
// 		phone: '+38164555333',
// 		email: 'ted.fox@gmail.com',
// 	},
// ];

export const HomePage: React.FC = () => {
	const [contacts, setContacts] = useState<Contact[]>([]);

	useEffect(() => {
		architect.contacts
			.getAll()
			.then(setContacts)
			.catch(console.error);
	}, []);

	return (
		<Card>
			<CardHeader title="Contacts">
				<Link to="/contacts/create">
					<Button>Create new contact</Button>
				</Link>
			</CardHeader>
			<CardBody>
				<ul className="divide-y divide-gray-200">
					{
						contacts.map(contact => (
							<li key={`contact-${contact.id}`}>
								<ContactBlock contact={contact} />
							</li>
						))
					}
				</ul>
			</CardBody>
		</Card>
	);
};
