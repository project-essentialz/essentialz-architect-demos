import React, { useState } from 'react'; 
import { useEffect } from 'react';

import styles from '../styles/todo.module.css';

import architect from '../services/architect';

function TodoApp () : JSX.Element {

    const [tasks, setTasks] = useState<any[]>([]);
    const [editMenuId, showEditMenuById] = useState<any>(0);
    const [inputValue, setInputValue] = useState<string>('');
    const [update, shouldUpdate] = useState<any>('');

    const getTasks = () : void => {
        architect.tasks.getAll()
        .then(setTasks)
        .catch(console.error);
    }

    const removeTask = (id : string) : void => {
        architect.tasks.delete(id)
        .then(shouldUpdate)
        .catch(console.error);
    }

    const addTask = (name : string) : void => {
        architect.tasks.create({task: name})
        .then(shouldUpdate)
        .catch(console.error);
    }

    const updateTask = (id : string, name : string) : void => {
        architect.tasks.update(id, {task: name})
        .then(() => window.location.reload(false)) // TODO: Change the state here too.
        .catch(console.error);
    }

    useEffect(() => getTasks(),[update])

    return (
        <div className="wrapper" >
            <div className="list-wrapper" >
                <div className="container scroll" >
                    {tasks.map((task) => 
                        <div key={task.id} className={styles.todoElement}>
                            <div className="container bg-dark">
                                <div className={`data-container ${editMenuId === task.id && 'hidden'}`} >
                                    <input className={styles.todoField} defaultValue={task.task} readOnly/>
                                    <input className="op-button" onClick={() => removeTask(task.id)} type="button" defaultValue="Remove" />
                                    <input className="op-button" onClick={() => {setInputValue(task.task); showEditMenuById(task.id)}} type="button" defaultValue="Edit" />
                                </div>
                                <div className={`data-container ${editMenuId !== task.id && 'hidden'}`} >
                                    <input onKeyUp={(e) => setInputValue(e.currentTarget.value)} className={styles.todoInput} defaultValue={task.task} />
                                    <input onClick={() => updateTask(task.id, inputValue)} className="op-button" type="button" defaultValue="Save" />
                                    <input className="op-button" onClick={() => {setInputValue(''); showEditMenuById(0)}} type="button" defaultValue="Cancel" />
                                </div>
                            </div>
                        </div>
                    )}  
                </div>
            </div>
            <div className="input-wrapper" >
                <div className="container">
                    <input onKeyUp={(e) => setInputValue(e.currentTarget.value)} className={styles.todoInput} type="text" placeholder="Add task..." />
                    <input onClick={() => addTask(inputValue)} className="op-button" type="button" defaultValue="Add" />
                </div>
            </div>
        </div>
    );
}

export default TodoApp;