import React, { useState, useEffect } from 'react';

// Architect client
import architect from '../../services/architect';

// Types
import { Task } from '../../types/types';

// Components
import {
	CreateTaskForm,
	TaskElement,
	Wrapper,
	Container,
} from '../../components/index';

export const TodoAppContainer = () => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [editMenuId, showEditMenuById] = useState<any>(0);

	const getTasks = () : void => {
		architect.tasks
			.getAll()
			.then(setTasks)
			.catch(console.error);
	};

	const deleteTask = (id : string) : void => {
		architect.tasks
			.delete(id)
			.then(() => getTasks())
			.catch(console.error);
	};

	const createTask = (name : string) : void => {
		architect.tasks
			.create({ task: name })
			.then(() => getTasks())
			.catch(console.error);
	};

	const updateTask = (id : string, name : string) : void => {
		architect.tasks
			.update(id, { task: name })
			.then(getTasks)
			.catch(console.error);
	};

	useEffect(() => getTasks(), []);

	return (
		<Wrapper>
			<Container>
				{tasks.map(task => (
					<TaskElement
						key={task.id}
						task={task}
						menuId={editMenuId}
						menuIdStateController={showEditMenuById}
						updateAPI={updateTask}
						deleteAPI={deleteTask}
					/>
				))}
			</Container>
			<CreateTaskForm
				createAPI={createTask}
			/>
		</Wrapper>
	);
};
