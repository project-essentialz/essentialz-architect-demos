import React, { ChangeEvent, useState } from 'react';

import {
	Container,
	Input,
	Button,
} from '..';

import { Task } from '../../types';

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
		<div>
			<Container
				className="bg-dark"
			>
				<Input
					value={inputValue}
					onChange={onInputChange}
					readOnly={!edit}
				/>
				<Button
					className="op-button"
					onClick={edit ? onUpdateClick : onDeleteClick}
				>
					{edit ? 'Save' : 'Remove'}
				</Button>
				<Button
					className="op-button"
					onClick={() => setEdit(pre => !pre)}
				>
					{edit ? 'Cancel' : ' Edit'}
				</Button>
			</Container>
		</div>
	);
};

export default TaskElement;
