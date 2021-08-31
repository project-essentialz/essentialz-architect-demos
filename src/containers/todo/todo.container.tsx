import React, { useState, useEffect } from 'react';

// Architect
import client from '../../services/architect.service';

// Types
import { Task } from '../../types';

// Components
import {
	Todo,
	Container,
	List,
	Showcase,
} from '../../components/index';

export const TodoAppContainer = () : React.ReactElement => {
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
		<Showcase
			code={Todo.CODE_SHOWCASE}
			component={(
				<Container
					className="w-full lg:p-32 md:p-10 p-1"
				>
					<Container>
						<p
							className="float-left text-2xl mr-10 pt-1"
						>
							Your Todo List
						</p>
						<Container
							className="float-right"
						>
							<Todo.CreateTaskForm
								onSubmit={createTask}
							/>
						</Container>
					</Container>
					<Container
						className="mt-20 h-80 overflow-y-scroll border-t-2"
					>
						<List>
							{tasks.map(task => (
								<Todo.TaskElement
									key={task.id}
									task={task}
									onUpdate={updateTask}
									onDelete={deleteTask}
								/>
							))}
						</List>
					</Container>
				</Container>
			)}
		/>
	);
};
