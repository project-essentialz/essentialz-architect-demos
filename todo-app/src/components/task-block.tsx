import React from 'react';

import {
	Container,
	Text,
	Button,
} from '.';

import {
	BriefcaseIcon,
	PencilIcon,
	TrashIcon,
} from '@heroicons/react/solid';

import { Task } from '../types';

type TaskBlockProps = {
	task: Task;
};

export const TaskBlock = (props : TaskBlockProps) => {
	const {
		task,
	} = props;
	return (
		<div
			className="mt-3 mb-3"
		>
			<Container
				spaceBetween
			>
				<div className="flex items-center">
					<div className="ml-3 w-full">
						<BriefcaseIcon className="w-6 h-6 float-left mr-5" />
						<Text
							fontSize="lg"
						>
							{task.description}
						</Text>
					</div>
					<Container
						flex
						flexDirection="flex-row"
					>
						<Button>
							<PencilIcon className="w-6" />
						</Button>
						<Button>
							<TrashIcon className="w-6" />
						</Button>
					</Container>
				</div>
			</Container>
		</div>
	);
};
