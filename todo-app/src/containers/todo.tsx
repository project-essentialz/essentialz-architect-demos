import React, { useState, useEffect } from 'react';

import {
	Container,
	Text,
	ModalForm,
	TaskBlock,
	Header,
	Body,
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
		<Container>
			<Header>
				<Text
					fontSize="2xl"
				>
					Your tasks
				</Text>
				<ModalForm
					onSubmit={createTask}
				/>
			</Header>
			<Body>
				{tasks.map(task => (
					<TaskBlock
						key={task.id}
						task={task}
						onUpdate={updateTask}
						onDelete={deleteTask}
					/>
				))}
			</Body>
		</Container>
	);
};
