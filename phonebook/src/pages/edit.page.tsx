import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

// Components
import { Card } from '../components/card.component';
import { CardHeader } from '../components/card-header.component';
import { CardBody } from '../components/card-body.component';
import { ContactForm } from '../components/forms/contact-form.component';

// Services
import architect from '../services/architect.service';

// Types
import { Contact, ContactFormData } from '../types';

export const EditPage: React.FC = () => {
	const history = useHistory();
	const params = useParams<{id: string}>();
	const [contact, setContact] = useState<Contact | undefined>();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (params.id) {
			architect.contacts.get(params.id)
				.then(setContact)
				.catch(() => {});
		}
	}, [params]);

	const updateContact = async (data: ContactFormData) => {
		if (loading) return;
		// TODO Loading and error handling
		const { file, ...contact } = data;
		setLoading(true);
		try {
			if (file) {
				const { url } = await architect.files.upload(file);
				(contact as Contact).pictureUrl = url;
			}
			await architect.contacts.update(contact.id, contact);
			history.push('/');
		} catch {
			setLoading(false);
		}
	};

	return (
		<Card>
			<CardHeader title="Edit contact" />
			<CardBody className="px-7 pb-7">
				{contact && (<ContactForm contact={contact} handleSubmit={updateContact} />)}
			</CardBody>
		</Card>
	);
};
