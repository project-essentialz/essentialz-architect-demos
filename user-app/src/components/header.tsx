/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export const Header = () : React.ReactElement => {
	return (
		<div className="sm:mx-auto sm:w-full sm:max-w-md">
			<img
				className="mx-auto h-12 w-auto"
				src="https://essentialz.io/_next/image?url=%2Fassets%2Flogo.svg&w=128&q=75"
				alt="Workflow"
			/>
			<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
		</div>

	);
};
