import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Components
import { Card } from '../components/card.component';
import { CardHeader } from '../components/card-header.component';
import { CardBody } from '../components/card-body.component';

import { ContactForm } from '../components/forms/contact-form.component';

// Services
import architect from '../services/architect.service';

// Types
import { Contact, ContactFormData } from '../types';

export const CreatePage: React.FC = () => {
	const history = useHistory();
	const [loading, setLoading] = useState(false);

	const createContact = async (data : ContactFormData) => {
		if (loading) return;
		// handleLoading('Creating contact...');
		const { file, ...newContact } = data;
		setLoading(true);
		try {
			if (file) {
				const { url } = await architect.files.upload(file);
				(newContact as Contact).pictureUrl = url;
			}
			await architect.contacts.create(newContact);
			// handleSuccess('Contact has been created.');
			history.push('/');
		} catch ({ message }) {
			// handleError(message);
			setLoading(false);
		}
	};

	return (
		<Card>
			<CardHeader title="New contact" />
			<CardBody className="px-7 pb-7">
				<ContactForm handleSubmit={createContact} />

			</CardBody>
		</Card>
	);
};
