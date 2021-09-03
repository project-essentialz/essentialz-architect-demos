import React from 'react';

export const Input:React.FC<React.HTMLProps<HTMLInputElement>> = (props) => {
	return (
		<input
			className={`
                border-2
                border-solid
                border-blue-500
                rounded-lg
                m-2
                p-2
                h-10
            `}
			{...props}
		/>
	);
};
