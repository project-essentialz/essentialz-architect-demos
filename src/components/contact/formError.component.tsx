import React from 'react';

// Styles
import styles from '../../styles/contact.module.css';

type FormErrorProps = {
	message: string;
}

export const FormError = (props : FormErrorProps) => {
	const {
		message,
	} = props;
	return (
		<p
			className={styles.formError}
		>
			{message}
		</p>
	);
};
