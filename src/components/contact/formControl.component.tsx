import React from 'react';

// Styles
import styles from '../../styles/contact.module.css';

export const FormControl = (props : any) => {
	return (
		<div
			className={styles.formControl}
		>
			{props.children}
		</div>
	);
};
