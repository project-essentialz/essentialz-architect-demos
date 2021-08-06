import React, { ChangeEvent, useState } from 'react';

import styles from '../../styles/todo.module.css';

type CreateTaskFormProps = {
	onSubmit: (input : string) => void;
}

const CreateTaskForm = (props : CreateTaskFormProps) : JSX.Element => {
	const { onSubmit } = props;

	const [inputValue, setInputValue] = useState<string>('');

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const onAddClick = () => {
		if (inputValue.length > 0) {
			onSubmit(inputValue);
			setInputValue('');
		}
	};

	return (
		<div className="input-wrapper">
			<div className="container">
				<input
					type="text"
					placeholder="Add task..."
					value={inputValue}
					onChange={onInputChange}
					className={styles.todoInput}
				/>
				<input
					className="op-button"
					type="button"
					defaultValue="Add"
					onClick={onAddClick}
				/>
			</div>
		</div>
	);
};

export default CreateTaskForm;
