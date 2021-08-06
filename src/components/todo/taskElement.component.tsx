import React, { useEffect, useState } from 'react';

import styles from '../../styles/todo.module.css';

import { Task } from '../../types/types';

type TaskElementProps = {
	task: Task;
	menuId: string;
	menuIdStateController: any;
	updateAPI: any;
	deleteAPI: any;
};

const TaskElement = (props : TaskElementProps) => {
	const [inputValue, setInputValue] = useState('');

	const {
		task,
		menuId,
		menuIdStateController,
		updateAPI,
		deleteAPI,
	} = props;

	useEffect(() => {
		console.log(task);
	}, [task]);

	return (
		<div className={styles.todoElement}>
			<div className="container bg-dark">
				<div className={`data-container ${menuId === task.id && 'hidden'}`}>
					<input className={styles.todoField} value={task.task || ''} readOnly />
					<input className="op-button" type="button" defaultValue="Remove" onClick={() => deleteAPI(task.id)} />
					<input className="op-button" type="button" defaultValue="Edit" onClick={() => { setInputValue(task.task); menuIdStateController(task.id); }} />
				</div>
				<div className={`data-container ${menuId !== task.id && 'hidden'}`}>
					<input className={styles.todoInput} defaultValue={task.task} onKeyUp={e => setInputValue(e.currentTarget.value)} />
					<input className="op-button" type="button" defaultValue="Save" onClick={() => { updateAPI(task.id, inputValue); menuIdStateController(0); }} />
					<input className="op-button" type="button" defaultValue="Cancel" onClick={() => { setInputValue(''); menuIdStateController(0); }} />
				</div>
			</div>
		</div>
	);
};

export default TaskElement;
