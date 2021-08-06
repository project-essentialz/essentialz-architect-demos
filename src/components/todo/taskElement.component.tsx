import React, { useState } from 'react';

import styles from '../../styles/todo.module.css';

import { Task } from '../../types/types';

type TaskElementProps = {
	task: Task;
	isInEditMode?: boolean;
	onUpdateClicked: (id : string, input : string) => void;
	onDeleteClicked: (id : string) => void;
	onEditClicked: (id : string) => void;
	onCancel: () => void;
};

const TaskElement = (props : TaskElementProps) => {
	const [inputValue, setInputValue] = useState('');

	const {
		task,
		isInEditMode,
		onUpdateClicked,
		onDeleteClicked,
		onEditClicked,
		onCancel,
	} = props;

	return (
		<div className={styles.todoElement}>
			<div className="container bg-dark">
				{isInEditMode ? (
					<div className="data-container">
						<input className={styles.todoInput} defaultValue={task.task} onKeyUp={e => setInputValue(e.currentTarget.value)} />
						<input className="op-button" type="button" defaultValue="Save" onClick={() => onUpdateClicked(task.id, inputValue)} />
						<input className="op-button" type="button" defaultValue="Cancel" onClick={() => onCancel()} />
					</div>
				) : (
					<div className="data-container">
						<input className={styles.todoField} value={task.task || ''} readOnly />
						<input className="op-button" type="button" defaultValue="Remove" onClick={() => onDeleteClicked(task.id)} />
						<input className="op-button" type="button" defaultValue="Edit" onClick={() => onEditClicked(task.id)} />
					</div>
				)}
			</div>
		</div>
	);
};

export default TaskElement;
