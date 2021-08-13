import React, { MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';

// Styles
import styles from '../../styles/contact.module.css';

// Types
type ButtonProps = {
	value: string;
	onClick?: () => void;
	location?: string;
	margin?: number;
}

export const Button = (props : ButtonProps) => {
	const {
		value,
		onClick = (e : MouseEvent<HTMLInputElement>) => {},
		location,
		margin = 10,
	} = props;

	const history = useHistory();

	const handleClick = (e : MouseEvent<HTMLInputElement>) => {
		if (location) {
			onClick(e);
			history.push(location);
		}
		onClick(e);
	};

	return (
		<div
			className={styles.contactInputContainer}
		>
			<input
				className={styles.contactButton}
				type="button"
				value={value}
				style={{ margin }}
				onClick={e => handleClick(e)}
			/>
		</div>
	);
};
