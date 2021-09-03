import React from 'react';

import {
	BlankCard,
	Image,
} from '..';

import { Contact } from '../../types';

type PhonebookElementProps = {
	contact: Contact;
	footer?: JSX.Element;
};

export const ContactCard = (props : PhonebookElementProps) => {
	const {
		contact,
		footer,
	} = props;

	return (
		<BlankCard
			body={(
				<>
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
				</>
			)}
			footer={footer}
		/>
	);
};
