import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Components
import { Card } from '../components/card.component';
import { CardHeader } from '../components/card-header.component';
import { CardBody } from '../components/card-body.component';
import { ContactForm } from '../components/forms/contact-form.component';

// Services
import architect from '../services/architect.service';

// Types
import { Contact } from '../types';

export const EditPage: React.FC = () => {
	const params = useParams<{id: string}>();

	const [contact, setContact] = useState<Contact | undefined>();

	useEffect(() => {
		if (params.id) {
			architect.contacts.get(params.id)
				.then(setContact)
				.catch(console.log);
		}
	}, [params]);

	return (
		<Card>
			<CardHeader title="Edit contact" />
			<CardBody className="px-7 pb-7">
				{contact && (<ContactForm contact={contact} />)}
			</CardBody>
		</Card>
	);
};
