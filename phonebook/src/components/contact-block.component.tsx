/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Contact } from '../types';
import { ContactImage } from './contact-image.component';

import { MailIcon, PhoneIcon } from '@heroicons/react/outline';

type ContactBlockProps = {
	contact: Contact
}

export const ContactBlock: React.FC<ContactBlockProps> = (props) => {
	const { contact } = props;

	return (
		<a href="#" className="block hover:bg-gray-50">
			<div className="flex items-center px-4 py-4 sm:px-6">
				<div className="min-w-0 flex-1 flex items-center">
					<div className="flex-shrink-0">
						<img className="h-12 w-12 rounded-full" src={contact.pictureUrl} />
					</div>
					<div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
						<div>
							<p className="text-sm font-medium text-indigo-600 truncate">Ricardo Cooper</p>
							<p className="mt-2 flex items-center text-sm text-gray-500">
								<MailIcon className="flex-shrink-0 mr-1.5 h-5 w-5" />
								<span className="truncate">{contact.email}</span>
							</p>
							<p className="mt-2 flex items-center text-sm text-gray-500">
								<PhoneIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" />
								{contact.phone}
							</p>
						</div>
						<div className="hidden md:block">
							<div>
								<p className="text-sm text-gray-900">
									Created at
									{' '}
									{' '}
									<time dateTime="2020-01-07">January 7, 2020</time>
								</p>

							</div>
						</div>
					</div>
				</div>
				<div>
					<svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
					</svg>
				</div>
			</div>
		</a>
	);
};
