import React, { ChangeEvent, useState } from 'react';
import {
	ClipboardListIcon,
	PencilIcon,
	TrashIcon,
	XIcon,
	CheckIcon,
} from '@heroicons/react/solid';

import {
	Container,
	Input,
	Button,
	ListElement,
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

	const onCanelClick = () => {
		setInputValue(task.description);
		setEdit(false);
	};

	return (
		<Container
			className="bg-dark"
		>
			<ListElement
				element={edit ?
					<Input maxLength={50} defaultValue={inputValue} onChange={onInputChange} className="w-full h-8 mt-1" /> :
					<h3 className="pt-2 text-sm font-medium">{inputValue}</h3>}
				icon={<ClipboardListIcon className="w-5" />}
				button={(
					<>
						<Button variant="warning">
							{edit ? <CheckIcon onClick={onUpdateClick} className="w-5" /> : <PencilIcon onClick={() => setEdit(true)} className="w-5" />}
						</Button>
						<Button variant="error" className="mr-5">
							{edit ? <XIcon onClick={onCanelClick} className="w-5" /> : <TrashIcon onClick={onDeleteClick} className="w-5" />}
						</Button>
					</>
				)}
			/>
		</Container>
	);
};

export default TaskElement;
