import React from 'react';

// Styles
import styles from '../../styles/contact.module.css';

// Components
import { Image } from './image.component';
import { Button } from './button.component';

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
		<>
			<div
				className={styles.textWrapper}
			>
				<Image
					size={100}
					src={pictureUrl}
				/>
			</div>
			<div
				className={styles.textWrapper}
			>
				{`${firstName} ${lastName}`}
			</div>
			<div
				className={styles.textWrapper}
			>
				{phone}
			</div>
			<div
				className={styles.textWrapper}
			>
				{email}
			</div>
			<div
				className={styles.textWrapper}
			>
				<Button
					value="View"
					location={`/contact/${id}`}
				/>
			</div>
		</>
	);
};
