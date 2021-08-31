export const CODE_SHOWCASE = `
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
        <>
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
        </>
    );
};
`;
