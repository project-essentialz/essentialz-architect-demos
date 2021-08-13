import React from 'react';

// Styles
import styles from '../../styles/contact.module.css';

// Types
type FormWrapperProps = {
	padding?: number;
	margin?: number;
}

export const FormWrapper = (props : any | FormWrapperProps) => {
	const {
		children,
		padding = 10,
		margin = 10,
	} = props;
	return (
		<form
			className={styles.contactFormContainer}
			style={{ padding, marginBottom: margin, marginTop: margin }}
		>
			{children}
		</form>
	);
};
