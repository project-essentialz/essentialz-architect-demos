import React, { useState } from 'react';

import styles from '../../styles/todo.module.css';

type CreateTaskFormProps = {
	onAddClicked: (input : string) => void;
}

const CreateTaskForm = (props : CreateTaskFormProps) : JSX.Element => {
	const [inputValue, setInputValue] = useState('');

	const {
		onAddClicked,
	} = props;

	return (
		<div className="input-wrapper">
			<div className="container">
				<input type="text" placeholder="Add task..." onKeyUp={e => setInputValue(e.currentTarget.value)} className={styles.todoInput} />
				<input className="op-button" type="button" defaultValue="Add" onClick={() => onAddClicked(inputValue)} />
			</div>
		</div>
	);
};

export default CreateTaskForm;
