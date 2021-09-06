import React, { useState, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';

// Components
import { Card } from '../components/card.component';
import { CardHeader } from '../components/card-header.component';
import { CardBody } from '../components/card-body.component';

import { ContactForm } from '../components/forms/contact-form.component';

// Services
import architect from '../services/architect.service';

// Types
import { Contact } from '../types';

export const CreatePage: React.FC = () => {
	const [formData, setFormData] = useState<Record<string, any>>({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		picture: '',
	});
	const history = useHistory();

	const handleInput = (e: ChangeEvent<HTMLInputElement>) : void => {
		setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.files ? e.currentTarget.files[0] : e.currentTarget.value });
	};

	const createContact = async (e : any) => {
		e.preventDefault();
		// handleLoading('Creating contact...');

		const resource : Contact = {
			firstName: formData.firstName,
			lastName: formData.lastName,
			email: formData.email,
			phone: formData.phone,
			pictureUrl: 'https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png',
			meta: {},
		};

		try {
			if (formData.picture) {
				const { url } = await architect.files.upload(formData.picture);
				resource.pictureUrl = url;
			}
			await architect.contacts.create(resource);
			// handleSuccess('Contact has been created.');
			history.push('/contacts');
		} catch ({ message }) {
			// handleError(message);
		}
	};

	return (
		<Card>
			<CardHeader title="New contact" />
			<CardBody className="px-7 pb-7">
				<ContactForm />

			</CardBody>
		</Card>
	);
};
