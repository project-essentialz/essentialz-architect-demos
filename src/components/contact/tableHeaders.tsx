import React from 'react';

// Styles
import styles from '../../styles/contact.module.css';

export const TableHeaders = (props : any) => {
	return (
		<li
			className={`${styles.tableInner} ${styles.tableHeader}`}
		>
			{props.children}
		</li>
	);
};
