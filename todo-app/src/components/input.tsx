import React from 'react';

export const Input:React.FC<React.HTMLProps<HTMLInputElement>> = (props) => {
	return (
		<input
			className={`
                border-2
                border-solid
                border-gray-300
                rounded-lg
                outline-none
                m-2
                p-2
                h-10
                transition
                hover:border-blue-300
                focus:border-blue-500
            `}
			{...props}
		/>
	);
};
