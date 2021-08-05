import React, { useState, useEffect } from 'react';

// Styles
import styles from '../styles/todo.module.css';

// Architect client
import architect from '../services/architect';

// Types
import { TodoDataType } from '../types/types';

function TodoApp() : JSX.Element {
	const [tasks, setTasks] = useState<TodoDataType[]>([]);
	const [editMenuId, showEditMenuById] = useState<any>(0);
	const [inputValue, setInputValue] = useState<string>('');
	const [update, shouldUpdate] = useState<any>('');

	const getTasks = () : void => {
		setTasks([]);
		architect.tasks.getAll()
			.then(setTasks)
			.catch(console.error);
	};

	const removeTask = (id : string) : void => {
		architect.tasks.delete(id)
			.then(shouldUpdate)
			.catch(console.error);
	};

	const addTask = (name : string) : void => {
		architect.tasks.create({ task: name })
			.then(shouldUpdate)
			.catch(console.error);
	};

	const updateTask = (id : string, name : string) : void => {
		architect.tasks.update(id, { task: name })
			.then(shouldUpdate)
			.catch(console.error);
		setInputValue('');
	};

	useEffect(() => getTasks(), [update]);

	return (
		<div className="wrapper">
			<div className="list-wrapper">
				<div className="container scroll">
					{tasks.map(task => (
						<div key={task.id} className={styles.todoElement}>
							<div className="container bg-dark">
								<div className={`data-container ${editMenuId === task.id && 'hidden'}`}>
									<input className={styles.todoField} defaultValue={task.task} readOnly />
									<input className="op-button" type="button" defaultValue="Remove" onClick={() => removeTask(task.id)} />
									<input className="op-button" type="button" defaultValue="Edit" onClick={() => { setInputValue(task.task); showEditMenuById(task.id); }} />
								</div>
								<div className={`data-container ${editMenuId !== task.id && 'hidden'}`}>
									<input className={styles.todoInput} defaultValue={task.task} onKeyUp={e => setInputValue(e.currentTarget.value)} />
									<input className="op-button" type="button" defaultValue="Save" onClick={() => { updateTask(task.id, inputValue); showEditMenuById(0); }} />
									<input className="op-button" type="button" defaultValue="Cancel" onClick={() => { setInputValue(''); showEditMenuById(0); }} />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="input-wrapper">
				<div className="container">
					<input type="text" placeholder="Add task..." onKeyUp={e => setInputValue(e.currentTarget.value)} className={styles.todoInput} />
					<input className="op-button" type="button" defaultValue="Add" onClick={() => addTask(inputValue)} />
				</div>
			</div>
		</div>
	);
}

export default TodoApp;
