import React from 'react';

export const FormWrapper:React.FC<React.HTMLProps<HTMLFormElement>> = (props) => {
	const {
		children,
		className,
		...rest
	} = props;
	return (
		<div
			className={`
				mt-8
				sm:mx-auto
				sm:w-full
				sm:max-w-md
				animate-form-show
				${className}
			`}
		>
			<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
				<form className="space-y-6" {...rest}>
					{children}
				</form>
			</div>
		</div>
	);
};
