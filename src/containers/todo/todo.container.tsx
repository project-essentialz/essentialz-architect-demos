import React, { useState, useEffect } from 'react';

import { CRUDService } from '../../services/api.service';

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
	const crud = new CRUDService('tasks');

	const getTasks = () : void => {
		crud.get({
			successHandler: (data : Task[]) => setTasks(data),
			errorHandler: (error : any) => console.error(error),
		});
	};

	const deleteTask = (id : string) : void => {
		crud.delete({
			id,
			successHandler: (data : any) => getTasks(),
			errorHandler: (error : any) => console.error(error),
		});
	};

	const createTask = (description : string) : void => {
		crud.create({
			description,
			successHandler: (data : any) => getTasks(),
			errorHandler: (error : any) => console.error(error),
		});
	};

	const updateTask = (id : string, description : string) : void => {
		crud.update({
			id,
			description,
			successHandler: (data : any) => getTasks(),
			errorHandler: (error : any) => console.error(error),
		});
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
