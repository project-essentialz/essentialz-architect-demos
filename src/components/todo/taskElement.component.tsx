import React, { ChangeEvent, useState } from 'react';

import styles from '../../styles/todo.module.css';

import { Task } from '../../types/types';

type TaskElementProps = {
	task: Task;
	onUpdate: (id: string, description: string) => void
	onDelete: (id: string) => void
};

const TaskElement = (props : TaskElementProps) => {
	const {
		task,
		onUpdate,
		onDelete,
	} = props;

	const [inputValue, setInputValue] = useState(task.description);
	const [edit, setEdit] = useState<boolean>(false);

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const onUpdateClick = () => {
		onUpdate(task.id, inputValue);
		setEdit(false);
	};

	const onDeleteClick = () => {
		onDelete(task.id);
	};

	return (
		<div className={styles.todoElement}>
			<div className="container bg-dark">
				<div className="data-container">
					<input
						className={edit ? styles.todoInput : styles.todoField}
						value={inputValue}
						onChange={onInputChange}
						readOnly={!edit}
					/>
					{edit ? (
						<>
							<input
								className="op-button"
								type="button"
								defaultValue="Save"
								onClick={onUpdateClick}
							/>
							<input
								className="op-button"
								type="button"
								defaultValue="Cancel"
								onClick={() => setEdit(false)}
							/>
						</>
					) : (
						<>
							<input
								className="op-button"
								type="button"
								defaultValue="Remove"
								onClick={onDeleteClick}
							/>
							<input
								className="op-button"
								type="button"
								defaultValue="Edit"
								onClick={() => setEdit(true)}
							/>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default TaskElement;
