import React, { useEffect, useState } from 'react';

import styles from '../../styles/todo.module.css';

import { Task } from '../../types/types';

type TaskElementProps = {
	task: Task;
	isInEditMode?: boolean
	onUpdateClicked: any;
	onDeleteClicked: any;
};

const TaskElement = (props : TaskElementProps) => {
	const [inputValue, setInputValue] = useState('');

	const {
		task,
		isInEditMode = false,
		onUpdateClicked,
		onDeleteClicked,
	} = props;

	useEffect(() => {
		console.log(task);
	}, [task]);

	return (
		<div className={styles.todoElement}>
			<div className="container bg-dark">
				<div className={`data-container ${isInEditMode && 'hidden'}`}>
					<input className={styles.todoField} value={task.task || ''} readOnly />
					<input className="op-button" type="button" defaultValue="Remove" onClick={() => onDeleteClicked(task)} />
					<input className="op-button" type="button" defaultValue="Edit" onClick={() => onEditClicked(task)} />
				</div>
				<div className={`data-container ${isInEditMode && 'hidden'}`}>
					<input className={styles.todoInput} defaultValue={task.task} onKeyUp={e => setInputValue(e.currentTarget.value)} />
					<input className="op-button" type="button" defaultValue="Save" onClick={() => onUpdateClicked(task) } />
					<input className="op-button" type="button" defaultValue="Cancel" onClick={() => onCancel(task)} />
				</div>
			</div>
		</div>
	);
};

export default TaskElement;
