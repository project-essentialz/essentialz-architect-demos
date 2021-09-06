import React from 'react';
import { Link } from 'react-router-dom';

// Components
import { Button } from '../button.component';

export const FormFooterComponent = () => {
	return (
		<div className="pt-5">
			<div className="flex justify-end">
				<Link to="/">
					<button
						type="button"
						className={`
                        bg-white 
                        py-2 px-4 
                        border border-gray-300 
                        rounded-md shadow-sm 
                        text-sm font-medium 
                        text-gray-700 
                        hover:bg-gray-50 
                        focus:outline-none 
                        focus:ring-2 
                        focus:ring-offset-2 
                        focus:ring-indigo-500`}
					>
						Discard
					</button>
				</Link>
				<Button
					type="submit"
					className={`
                    ml-3 
                    inline-flex 
                    justify-center 
                    py-2 px-4 
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
                    focus:ring-indigo-500
                    `}
				>
					Save
				</Button>
			</div>
		</div>
	);
};
