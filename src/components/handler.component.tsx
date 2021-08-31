import React, { useState, useEffect } from 'react';
import { ExclamationIcon } from '@heroicons/react/solid';
import { Transition } from '@headlessui/react';

type HandlerVariants = 'loading' | 'error';

type HandlerVariantsProps = {
	title: string;
	styling: string;
};

export type HandlerProps = {
	message: string;
	variant: HandlerVariants;
}

export const Handler = (props : HandlerProps) => {
	const {
		message,
		variant,
	} = props;
	const [visible, setVisible] = useState<boolean>(false);

	const variants : Record<HandlerVariants, HandlerVariantsProps> = {
		loading: {
			title: 'Loading...',
			styling: 'bg-yellow-100',
		},
		error: {
			title: 'Error...',
			styling: 'bg-red-100',
		},
	};

	useEffect(() => {
		setVisible(true);
		setTimeout(() => setVisible(false), 3000);
	}, [props]);

	return (
		<Transition
			show={visible}
			enter="transition-opacity duration-150"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="transition-opacity duration-150"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<div className={`rounded-md border z-50 border-gray-300 ${variants[variant].styling} shadow-2xl w-80 p-4 absolute left-3 bottom-4`}>
				<div className="flex">
					<div className="flex-shrink-0">
						<ExclamationIcon className="h-5 w-5" aria-hidden="true" />
					</div>
					<div className="ml-3">
						<h3 className="text-sm font-medium text-yellow-800">{variants[variant].title}</h3>
						<div className="mt-2 text-sm text-yellow-700">
							<p>
								{message}
							</p>
						</div>
					</div>
				</div>
			</div>
		</Transition>
	);
};
