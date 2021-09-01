import React, { useState, useEffect } from 'react';
import { ExclamationIcon } from '@heroicons/react/solid';
import { Transition } from '@headlessui/react';
import { Container } from '.';

type HandlerVariants = 'loading' | 'error' | 'success';

type HandlerVariantsProps = {
	title: string;
	styling: string;
};

export type ModalProps = {
	key: string;
	message: string;
	variant: HandlerVariants;
	timeout?: number;
	onHide?: () => void;
}

export type Props = {
	data: ModalProps[];
}

const variants : Record<HandlerVariants, HandlerVariantsProps> = {
	loading: {
		title: 'Loading...',
		styling: 'bg-yellow-100 border border-yellow-400 text-yellow-700',
	},
	success: {
		title: 'Success!',
		styling: 'bg-blue-100 border border-blue-400 text-blue-700',
	},
	error: {
		title: 'Error...',
		styling: 'bg-red-100 border border-red-400 text-red-700',
	},
};

const HandlerModal = (props : ModalProps) => {
	const {
		message,
		variant,
		timeout = 3,
		onHide = () => {},
	} = props;
	const [visible, setVisible] = useState<boolean>(false);

	useEffect(() => {
		setVisible(true);
		setTimeout(() => {
			setVisible(false);
			onHide();
		}, timeout * 1000);
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
			<div
				className={`rounded-md z-50 ${variants[variant].styling} shadow-lg w-80 p-4 relative mt-2 left-3 bottom-4`}
			>
				<div className="flex">
					<div className="flex-shrink-0">
						<ExclamationIcon className="h-5 w-5" aria-hidden="true" />
					</div>
					<div className="ml-3">
						<h3 className="text-sm font-medium">{variants[variant].title}</h3>
						<div className="mt-2 text-sm">
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

export const Handler = (props : Props) => {
	const {
		data,
	} = props;

	const onHide = (key : string) => {
		data.splice(
			data.findIndex(item => item.key === key),
			1
		);
	};

	return (
		<Container
			className="absolute left-0 bottom-0"
		>
			{data.map(({ key, ...handler }) => (
				<HandlerModal
					key={key}
					onHide={() => onHide(key)}
					{...handler}
				/>
			))}
		</Container>
	);
};
