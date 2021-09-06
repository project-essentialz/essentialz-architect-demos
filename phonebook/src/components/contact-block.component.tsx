/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import { ContactImage } from './contact-image.component';

// Icons
import { MailIcon, PhoneIcon, ChevronRightIcon } from '@heroicons/react/outline';

// Types
import { Contact } from '../types';

type ContactBlockProps = {
	contact: Contact
}

export const ContactBlock: React.FC<ContactBlockProps> = (props) => {
	const { contact } = props;

	return (
		<Link to={`/contacts/${contact.id}`} className="block hover:bg-gray-50">
			<div className="flex items-center px-4 py-4 sm:px-6">
				<div className="min-w-0 flex-1 flex items-center">
					<div className="flex-shrink-0">
						<ContactImage className="h-12 w-12 rounded-full" src={contact.pictureUrl} />
					</div>
					<div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
						<div>
							<p className="text-sm font-medium text-indigo-600 truncate">
								{`${contact.firstName} ${contact.lastName}`}
							</p>
							<p className="mt-2 flex items-center text-sm text-gray-500">
								<PhoneIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" />
								<span className="truncate">{contact.phone}</span>
							</p>
						</div>
						<div className="hidden md:block">
							<div>
								<p className="text-sm text-gray-900 sm:h-5 ">
									{/* Created at */}
									{/* {' '} */}
									{/* <time dateTime="2020-01-07">{contact.createdAt}</time> */}
								</p>
								<p className="mt-2 flex items-center text-sm text-gray-500">
									<MailIcon className="flex-shrink-0 mr-1.5 h-5 w-5" />
									<span className="truncate">{contact.email}</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<ChevronRightIcon className="h-5 w-5 text-gray-400" />
				</div>
			</div>
		</Link>
	);
};
