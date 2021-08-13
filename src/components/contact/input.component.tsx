import React, { ChangeEvent } from 'react';

// Styles
import styles from '../../styles/contact.module.css';

// Components
import { FormError } from './formError.component';

type InputProps = {
	name: string;
	label: string;
	type: string;
	value?: string;
	margin?: number,
	errorMessage?: string;
	showError?: boolean;
	onChange: (e : ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props : InputProps) => {
	const {
		name,
		label,
		type,
		value = '',
		margin = 25,
		errorMessage,
		showError,
		onChange,
	} = props;
	return (
		<div
			key={name}
			className={styles.contactInputContainer}
		>
			<label
				htmlFor={name}
				className={styles.contactInputLabel}
			>
				{label}
			</label>
			<input
				id={name}
				style={{ marginBottom: margin }}
				className={type === 'file' ? styles.contactFileInput : styles.contactInput}
				defaultValue={value}
				name={name}
				type={type}
				placeholder={label}
				onChange={(e : ChangeEvent<HTMLInputElement>) => onChange(e)}
			/>
			{errorMessage && showError && (
				<FormError
					message={errorMessage}
				/>
			)}
		</div>
	);
};
