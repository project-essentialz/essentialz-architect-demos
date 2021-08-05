import React, { useState } from 'react';

import styles from '../../styles/todo.module.css';

type CreateTaskFormProps = {
	createAPI: any;
}

const CreateTaskForm = (props : CreateTaskFormProps) : JSX.Element => {
	const [inputValue, setInputValue] = useState('');

	const {
		createAPI,
	} = props;

	return (
		<div className="input-wrapper">
			<div className="container">
				<input type="text" placeholder="Add task..." onKeyUp={e => setInputValue(e.currentTarget.value)} className={styles.todoInput} />
				<input className="op-button" type="button" defaultValue="Add" onClick={() => createAPI(inputValue)} />
			</div>
		</div>
	);
};

export default CreateTaskForm;
