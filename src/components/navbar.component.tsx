import React from 'react';
import {
	Menu,
	Transition,
} from '@headlessui/react';
import {
	MenuIcon,
	HomeIcon,
	CodeIcon,
} from '@heroicons/react/solid';

type Navigation = {
	key: number;
	name: string;
	href: string;
	underline?: boolean;
	Icon?: JSX.Element;
}

const navigation : Navigation[] = [
	{
		key: 1,
		name: 'Home',
		href: '/',
		underline: true,
		Icon: <HomeIcon
			className="w-6 mr-2"
			aria-hidden="true"
		/>,
	},
	{
		key: 2,
		name: 'Todo App',
		href: '/todo',
		Icon: <CodeIcon
			className=" w-6 mr-2"
			aria-hidden="true"
		/>,
	},
	{
		key: 3,
		name: 'Phonebook App',
		href: '/phonebook',
		Icon: <CodeIcon
			className="w-6 mr-2"
			aria-hidden="true"
		/>,
	},
];

export const Navbar = () => {
	return (
		<div
			className="z-50 w-full pr-10 pt-5 pb-5 h-20 shadow-xl"
		>
			<Menu as="div" className="relative float-right inline-block">
				{({ open }) => (
					<>
						<div className="relative text-right">
							<Menu.Button
								className="bg-blue-500 w-20 text-white rounded-lg shadow-md hover:bg-blue-800"
							>
								<MenuIcon
									className="w-10 h-10 m-0 p-0 inline-block"
									aria-hidden="true"
								/>
							</Menu.Button>
						</div>
						<Transition
							show={open}
							enter="transition-opacity duration-150"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity duration-150"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Menu.Items
								className="mt-2 p-1 border-8 border-white bg-white rounded-lg shadow-xl absolute w-52 right-5"
							>
								{navigation.map(({
									key,
									name,
									href,
									underline,
									Icon,
								}) => (
									<div
										key={key}
										className={`
							rounded-lg 
							bg-white 
							hover:bg-blue-500 
							${underline ? 'rounded-b-none border-b-2 ' : ''}`}
									>
										<Menu.Item>
											<a
												href={href}
												className="group flex rounded-md items-center w-full px-2 py-2 mt-1 text-sm hover:text-white"
											>
												{Icon}
												{name}
											</a>
										</Menu.Item>
									</div>
								))}
							</Menu.Items>
						</Transition>
					</>
				)}
			</Menu>
		</div>
	);
};
