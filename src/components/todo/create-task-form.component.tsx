import React, { ChangeEvent, useState } from 'react';

import {
	Input,
	Button,
	Container,
	Form,
} from '..';

type CreateTaskFormProps = {
	onSubmit: (input : string) => void;
}

const CreateTaskForm = (props : CreateTaskFormProps) : JSX.Element => {
	const { onSubmit } = props;

	const [inputValue, setInputValue] = useState<string>('');

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const submit = (e : React.FormEvent) => {
		e.preventDefault();
		if (inputValue.length > 0) {
			onSubmit(inputValue);
			setInputValue('');
		}
	};

	return (
		<Container>
			<Form
				onSubmit={submit}
			>
				<Input
					type="text"
					placeholder="Add task..."
					value={inputValue}
					onChange={onInputChange}
				/>
				<Button
					className="op-button"
					type="submit"
				>
					Add
				</Button>
			</Form>
		</Container>
	);
};

export default CreateTaskForm;
