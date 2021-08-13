import React from 'react';

// Styles
import styles from '../../styles/contact.module.css';

export const Table = (props : any) => {
	return (
		<ul
			className={styles.tableWrapper}
		>
			{props.children}
		</ul>
	);
};
