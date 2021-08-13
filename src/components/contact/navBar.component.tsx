import React from 'react';

// Styles
import styles from '../../styles/contact.module.css';

// Components
import { Button } from './button.component';

export const NavBar = () => {
	return (
		<div
			className={styles.nav}
		>
			<div
				className={styles.navWrapper}
			>
				<Button
					value="Create"
					location="/contacts/create"
				/>
			</div>
			<div
				className={styles.navWrapper}
			>
				<Button
					value="Listing"
					location="/contacts"
				/>
			</div>
		</div>
	);
};
