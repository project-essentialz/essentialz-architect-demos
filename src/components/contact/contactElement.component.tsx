import React from 'react';

// Styles
import styles from '../../styles/contact.module.css';

type ContactElementProps = {
	id: string;
	firstName: string;
	lastName: string;
	pictureUrl: string;
	email: string;
	phone: string;
};

export const ContactElement = (props : ContactElementProps) => {
	const {
		id,
		firstName,
		lastName,
		pictureUrl,
		email,
		phone,
	} = props;

	return (
		<tr>
			<td>
				<img
					src={pictureUrl}
					alt="contact"
					className={styles.contactImage}
				/>
			</td>
			<td>
				{firstName}
				{' '}
				{lastName}
			</td>
			<td>
				{phone}
			</td>
			<td>
				{email}
			</td>
			<td>
				<a
					href={`/contact/${id}`}
				>
					View
				</a>
			</td>
		</tr>
	);
};
