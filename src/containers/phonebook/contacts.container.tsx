import React, { useState, useEffect } from 'react';

// Architect
import client from '../../services/architect.service';

// Types
import { Contact } from '../../types';

// Components
import {
	ContactCard,
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

export const ContactsContainer = () => {
	const [contacts, setContacts] = useState<Contact[]>([]);

	const getContacts = () => {
		client.contacts
			.getAll()
			.then(setContacts)
			.catch(console.error);
	};

	useEffect(() => getContacts(), []);

	return (
		<div className="container mx-auto mt-40">
			<div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 mb-10">
				<div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
					<div className="ml-4 mt-4">
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							Contacts
						</h3>
					</div>
					<div className="ml-4 mt-4 flex-shrink-0">
						{/* eslint-disable-next-line max-len */}
						<button
							type="button"
							className="relative
								inline-flex
								items-center
								px-4
								py-2
								border
								border-transparent
								shadow-sm
								text-sm
								font-medium
								rounded-md
								text-white
								bg-indigo-600
								hover:bg-indigo-700
								focus:outline-none
								focus:ring-2
								focus:ring-offset-2
								focus:ring-indigo-500"
						>
							New
							contact
						</button>
					</div>
				</div>
			</div>
			<ul
				className="grid
					grid-cols-1
					gap-6
					sm:grid-cols-2
					md:grid-cols-3
					lg:grid-cols-4"
			>
				{contacts.map((contact : Contact) => (
					<li
						className="col-span-1
							flex
							flex-col
							text-center
							bg-white
							rounded-lg
							shadow
							divide-y
							divide-gray-200"
					>
						<ContactCard
							contact={contact}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};
