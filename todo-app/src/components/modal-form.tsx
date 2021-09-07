import React, { FormEvent, useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/solid';

import {
	Button,
	Input,
} from '.';

type ModalProps = {
	onSubmit: (description : string) => void;
}

export const ModalForm = (props : ModalProps) : React.ReactElement => {
	const { onSubmit } = props;

	const [modal, setModal] = useState<boolean>(false);
	const [input, setInput] = useState<string>('');

	const handleModal = () => setModal(pre => !pre);

	const handleInput = (e : React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.currentTarget.value);
	};

	const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit(input);
		setModal(false);
	};

	return (
		<>
			<Button
				onClick={handleModal}
			>
				<PlusCircleIcon
					className="w-6 h-6 float-left mr-2"
				/>
				Add
			</Button>
			{modal && (
				<div
					className={`
						absolute
						top-0
						left-0
						w-full
						h-full
						bg-[rgba(0,0,0,0.5)]
					`}
				>
					<form
						onSubmit={handleSubmit}
						className={`
							mt-20
							md:w-96
							sm:w-full
							flex
							flex-col
							mx-auto
							border-2
							border-solid
							border-grey
							bg-white
							rounded-xl
							p-2
						`}
					>
						<Input
							onChange={handleInput}
							placeholder="Your task..."
							maxLength={40}
							required
						/>
						<Button>
							Add
						</Button>
						<Button
							onClick={handleModal}
						>
							Cancel
						</Button>
					</form>
				</div>
			)}
		</>
	);
};
