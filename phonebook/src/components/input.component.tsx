import React from 'react';

export const Input: React.FC<React.ComponentProps<'div'>> = (props) => {
	const { className, ...rest } = props;

	return (
		<div className={className}>
			<label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
				First name
			</label>
			<div className="mt-1 sm:mt-0 sm:col-span-2">
				<input
					type="text"
					name="first-name"
					id="first-name"
					autoComplete="given-name"
					className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
				/>
			</div>
		</div>
	);
};
