import React, { useState } from 'react';

import {
	Text,
	Input,
	Button,
} from '.';

import {
	BriefcaseIcon,
	PencilIcon,
	TrashIcon,
	CheckIcon,
	XIcon,
} from '@heroicons/react/solid';

import { Task } from '../types';

type TaskBlockProps = {
	task: Task;
	onDelete: (id : string) => void;
	onUpdate: (id: string, description : string) => void;
};

export const TaskBlock = (props : TaskBlockProps) : React.ReactElement => {
	const {
		task,
		onDelete,
		onUpdate,
	} = props;

	const [editMode, setEditMode] = useState<boolean>(false);
	const [input, setInput] = useState<string>(task.description);

	const handleInput = (e : React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.currentTarget.value);
	};

	return (
		<div
			className="mt-3 mb-3"
		>
			<div
				className={`
					border-2
					border-solid
					border-grey
					bg-white
					rounded-xl
					p-2
					justify-between
				`}
			>
				<div className="flex items-center">
					<div className="ml-3 w-full">
						<div
							className="w-11/12 flex"
						>
							{editMode ? (
								<>
									<PencilIcon className="w-6 h-6 float-left mr-5 mt-4" />
									<Input
										value={input}
										placeholder="Your task..."
										maxLength={40}
										onChange={handleInput}
									/>
								</>
							) : (
								<>
									<BriefcaseIcon className="w-6 h-6 float-left mr-5" />
									<Text
										fontSize="lg"
									>
										{task.description}
									</Text>
								</>
							)}
						</div>
					</div>
					<div
						className={`
							flex
							flex-row
							border-2
							border-solid
							border-grey
							bg-white
							rounded-xl
							p-2
						`}
					>
						{editMode ? (
							<>
								<Button
									onClick={() => onUpdate(task.id, input)}
								>
									<CheckIcon className="w-6" />
								</Button>
								<Button
									variant="error"
									onClick={() => {
										setEditMode(false);
										setInput(task.description);
									}}
								>
									<XIcon className="w-6" />
								</Button>
							</>
						) : (
							<>
								<Button
									variant="warning"
									onClick={() => setEditMode(true)}
								>
									<PencilIcon className="w-6" />
								</Button>
								<Button
									variant="error"
									onClick={() => onDelete(task.id)}
								>
									<TrashIcon className="w-6" />
								</Button>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
