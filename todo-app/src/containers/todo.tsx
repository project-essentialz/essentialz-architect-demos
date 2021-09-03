import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';

import {
	Container,
	Text,
	ModalForm,
	TaskBlock,
} from '../components';

import { Task } from '../types';

import client from '../services/architect.service';

export const TodoApp = () : React.ReactElement => {
	const [tasks, setTasks] = useState<Task[]>([]);

	const getTasks = () : void => {
		client.tasks
			.getAll()
			.then(setTasks)
			.catch(console.error);
	};

	const deleteTask = (id : string) : void => {
		client.tasks
			.delete(id)
			.then(getTasks)
			.catch(console.error);
	};

	const createTask = (description : string) : void => {
		client.tasks
			.create({ description })
			.then(getTasks)
			.catch(console.error);
	};

	const updateTask = (id : string, description : string) : void => {
		client.tasks
			.update(id, { description })
			.then(getTasks)
			.catch(console.error);
	};

	useEffect(() => getTasks(), []);

	return (
		<Container
			variant="default"
			flex
			flexDirection="flex-col"
			width="default"
			centered
		>
			<Container
				variant="blank"
				flex
				flexDirection="flex-row"
				spaceBetween
				centered
			>
				<Text
					fontSize="2xl"
				>
					Your tasks
				</Text>
				<ModalForm
					onSubmit={createTask}
				/>
			</Container>
			<Container
				variant="blank"
				overflow="overflow-scroll"
				height="lg"
				centered
			>
				{tasks.map(task => (
					<TaskBlock
						key={v4()}
						task={task}
					/>
				))}
			</Container>
		</Container>
	);
};
