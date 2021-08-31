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
	Handler,
	HandlerProps,
} from '../../components/index';

export const TodoAppContainer = () : React.ReactElement => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [handler, setHandler] = useState<HandlerProps>();

	const handleError = (error : any) => {
		setHandler({
			variant: 'error',
			message: error.message,
		});
	};

	const getTasks = () : void => {
		client.tasks
			.getAll()
			.then(setTasks)
			.catch(handleError);
	};

	const deleteTask = (id : string) : void => {
		client.tasks
			.delete(id)
			.then(getTasks)
			.catch(handleError);
	};

	const createTask = (description : string) : void => {
		client.tasks
			.create({ description })
			.then(getTasks)
			.catch(handleError);
	};

	const updateTask = (id : string, description : string) : void => {
		client.tasks
			.update(id, { description })
			.then(getTasks)
			.catch(handleError);
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
							{tasks.length === 0 ?
								<p className="text-center mt-10 text-gray-500">Your Todo list is empty! Click on New Task button to add an task!</p>
								: tasks.map(task => (
									<Todo.TaskElement
										key={task.id}
										task={task}
										onUpdate={updateTask}
										onDelete={deleteTask}
									/>
								))}
						</List>
					</Container>
					{handler && (
						<Handler {...handler} />
					)}
				</Container>
			)}
		/>
	);
};
