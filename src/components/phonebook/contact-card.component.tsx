import React from 'react';
import { Link } from 'react-router-dom';

import { PencilIcon } from '@heroicons/react/solid';

import {
	Image,
	Container,
} from '..';

import { Contact } from '../../types';

type PhonebookElementProps = {
	contact: Contact;
};

export const ContactCard = (props : PhonebookElementProps) => {
	const {
		contact,
	} = props;

	return (
		<>
			<Container className="flex-1 flex flex-col p-8">
				<Image
					className="w-38 h-32 flex-shrink-0 mx-auto rounded-full"
					src={contact.pictureUrl}
					alt=""
				/>
				<h3 className="mt-6 text-gray-900 text-sm font-medium">{`${contact.firstName} ${contact.lastName}`}</h3>
				<dl className="mt-1 flex-grow flex flex-col justify-between">
					<dd className="text-gray-500 text-sm">
						{contact.phone}
					</dd>
					<dd className="text-gray-500 text-sm">
						{contact.email}
					</dd>
				</dl>
			</Container>
			<Container>
				<Container className="-mt-px flex divide-x divide-gray-200">
					<Container className="w-0 flex-1 flex">
						<Link
							to={`/contacts/${contact.id}`}
							className="relative
								-mr-px w-0 flex-1
								inline-flex
								items-center
								justify-center
								py-4
								text-sm
								text-gray-700
								font-medium
								border
								border-transparent
								rounded-bl-lg
								hover:text-gray-500"
						>
							<PencilIcon className="h-6 w-6" />
							<span className="ml-3">Edit</span>
						</Link>
					</Container>
				</Container>
			</Container>
		</>
	);
};
