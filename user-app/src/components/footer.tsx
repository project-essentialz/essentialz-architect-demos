import React from 'react';

type FooterProps = {
	label: string;
} & React.HTMLProps<HTMLDivElement>;

export const Footer:React.FC<FooterProps> = (props) => {
	const {
		children,
		label,
	} = props;
	return (
		<div className="mt-6">
			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<div className="w-full border-t border-gray-300" />
				</div>
				<div className="relative flex justify-center text-sm mb-5">
					<span className="px-2 bg-white text-gray-500">{label}</span>
				</div>
			</div>
			{children}
		</div>
	);
};
