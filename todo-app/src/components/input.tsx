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
                mt-2
                mb-2
                p-2
                h-10
                w-full
                mx-auto
                transition
                hover:border-blue-300
                focus:border-blue-500
            `}
			{...props}
		/>
	);
};
