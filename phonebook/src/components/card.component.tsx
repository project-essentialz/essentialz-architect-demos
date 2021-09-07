import React from 'react';

export const Card: React.FC = (props) => {
	const { children } = props;

	return (
		<div className="bg-white border-b border-gray-200 shadow sm:rounded-md">
			<div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap px-4 py-5">
				<div className="ml-4 mt-2 px-2">
					<h3 className="text-lg leading-6 font-medium text-gray-900">
						Contacts
					</h3>
				</div>
				<div className="ml-4 mt-2 flex-shrink-0">
					<button
						type="button"
						className="
              relative
              inline-flex
              items-center
              px-4
              py-2
              border
              border-transparent
              shadow-sm
              text-sm
              font-medium
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500"
					>
						Create new contact
					</button>
				</div>
			</div>
			<div className="border-t">
				{children}
			</div>
		</div>
	);
};
