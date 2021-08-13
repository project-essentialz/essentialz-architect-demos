import React from 'react';

// Styles
import styles from '../../styles/contact.module.css';

export const TableRow = (props : any) => {
	return (
		<li
			className={`${styles.tableInner} ${styles.tableRow}`}
		>
			{props.children}
		</li>
	);
};
