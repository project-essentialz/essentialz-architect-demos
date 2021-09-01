import React from 'react';
import { Link } from 'react-router-dom';
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
			<div className="flex-1 flex flex-col p-8">
				<img
					className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
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
			</div>
			<div>
				<div className="-mt-px flex divide-x divide-gray-200">
					<div className="w-0 flex-1 flex">
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
								/>
							</svg>
							<span className="ml-3">Edit</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
