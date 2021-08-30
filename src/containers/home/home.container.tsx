import React from 'react';

import {
	Container,
	Card,
	CardProps,
} from '../../components';

import {
	CodeIcon,
} from '@heroicons/react/solid';

const cards : CardProps[] = [
	{
		header: <CodeIcon className="w-full" />,
		title: 'Todo App',
		description: 'An simple Todo app done in React showcasing Architect SDK usability.',
		footer: <a href="/todo" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Test out</a>,
	},
	{
		header: <CodeIcon className="w-full" />,
		title: 'Phonebook App',
		description: 'An simple Phonebook app done in React showcasing Architect SDK usability.',
		footer: <a href="/phonebook" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Test out</a>,
	},
];

export const HomeContainer = () => {
	return (
		<Container
			className="flex flex-wrap w-full mt-5 justify-center"
		>
			{cards.map(props => <Card className="hover:shadow-2xl" key={props.title} {...props} />)}
		</Container>
	);
};
