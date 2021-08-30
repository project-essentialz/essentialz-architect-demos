import React from 'react';

// Components
import { Image } from '..';
import { Link } from 'react-router-dom';

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
			<div>
				<Image
					width={100}
					src={pictureUrl}
				/>
			</div>
			<div>
				{`${firstName} ${lastName}`}
			</div>
			<div>
				{phone}
			</div>
			<div>
				{email}
			</div>
			<div>
				<Link to={`/contact/${id}`}>
					View
				</Link>
			</div>
		</>
	);
};
