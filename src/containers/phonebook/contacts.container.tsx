import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Architect
import client from '../../services/architect.service';

// Types
import { Contact } from '../../types';

// Components
import {
	Container,
	ContactCard,
	Button,
	ListElement,
	List,
} from '../../components';

export const ContactsContainer = (props : any) => {
	const {
		handleError,
	} = props;
	const [contacts, setContacts] = useState<Contact[]>([]);

	const getContacts = () => {
		client.contacts
			.getAll()
			.then(setContacts)
			.catch(({ message }) => handleError(message));
	};

	useEffect(() => getContacts(), []);

	return (
		<Container className="container mx-auto mt-40">
			<Container className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 mb-10">
				<Container className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
					<Container className="ml-4 mt-4">
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							Contacts
						</h3>
					</Container>
					<Container className="ml-4 mt-4 flex-shrink-0">
						{/* eslint-disable-next-line max-len */}
						<Button
							variant="purple"
						>
							<Link
								to="/contacts/create"
							>
								New
								contact
							</Link>
						</Button>
					</Container>
				</Container>
			</Container>
			<List
				className="grid
					grid-cols-1
					gap-6
					sm:grid-cols-2
					md:grid-cols-3
					lg:grid-cols-4"
			>
				{contacts.map((contact : Contact) => (
					<ListElement
						variant="grid"
						element={(
							<ContactCard
								contact={contact}
							/>
						)}
					/>
				))}
			</List>
		</Container>
	);
};
