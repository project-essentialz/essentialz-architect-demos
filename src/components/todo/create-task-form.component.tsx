import React, { ChangeEvent, useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/solid';

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
	const [isOpen, setIsOpen] = useState<boolean>(false);

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
		<>
			<Button
				onClick={() => setIsOpen(true)}
			>
				<PlusCircleIcon className="w-5 float-left mt-0.5 mr-2" />
				New task
			</Button>
			<Container>
				<Container className={`bg-black w-full h-full absolute top-0 opacity-25 z-0 ${isOpen ? '' : 'hidden'}`} />
				{isOpen && (
					<Form
						onSubmit={submit}
						className="relative z-10"
					>
						<Container
							className="flex flex-col items-center shadow-2xl border-solid border-2 mx-auto mt-32 w-96 h-52 rounded-xl bg-white"
						>
							<Container
								className="w-80"
							>
								<Input
									type="text"
									placeholder="Your task..."
									value={inputValue}
									onChange={onInputChange}
									className="mt-8"
								/>
							</Container>
							<Container
								className="w-80"
							>
								<Button
									type="submit"
									className="w-full mt-5"
								>
									Add
								</Button>
								<Button
									type="button"
									className="w-full mt-2"
									onClick={() => {
										setIsOpen(false);
										setInputValue('');
									}}
								>
									Cancel
								</Button>
							</Container>
						</Container>
					</Form>
				)}
			</Container>
		</>
	);
};

export default CreateTaskForm;
