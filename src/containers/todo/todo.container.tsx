import React, { useState, useEffect } from 'react';

// Architect client
import architect from '../../services/architect';

// Types
import { Task } from '../../types/types';

// Components
import {
	Todo,
	Wrapper,
	Container,
} from '../../components/index';

export const TodoAppContainer = () => {
	const [tasks, setTasks] = useState<Task[]>([]);

	const getTasks = () : void => {
		architect.tasks
			.getAll()
			.then(setTasks)
			.catch(console.error);
	};

	const deleteTask = (id : string) : void => {
		architect.tasks
			.delete(id)
			.then(getTasks)
			.catch(console.error);
	};

	const createTask = (description : string) : void => {
		architect.tasks
			.create({ description })
			.then(getTasks)
			.catch(console.error);
	};

	const updateTask = (id : string, description : string) : void => {
		architect.tasks
			.update(id, { description })
			.then(getTasks)
			.catch(console.error);
	};

	useEffect(() => getTasks(), []);

	return (
		<Wrapper>
			<Container>
				{tasks.map(task => (
					<Todo.TaskElement
						key={task.id}
						task={task}
						onUpdate={updateTask}
						onDelete={deleteTask}
					/>
				))}
			</Container>
			<Todo.CreateTaskForm
				onSubmit={createTask}
			/>
		</Wrapper>
	);
};
