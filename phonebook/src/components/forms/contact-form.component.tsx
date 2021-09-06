/* eslint-disable */
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

// Components
import { Button } from '../button.component'

// Types
import { Contact } from '../../types';

type ContactFormProps = {
	contact?: Contact
	handleSubmit?: () => {}
}

type InputField = {
	name: string;
	type: string;
	placeholder: string;
	required: boolean;
}

const fields : InputField[] = [
	{
		name: 'firstName',
		type: 'text',
		placeholder: 'First name',
		required: true,
	},
	{
		name: 'lastName',
		type: 'text',
		placeholder: 'Last name',
		required: true,
	},
	{
		name: 'email',
		type: 'email',
		placeholder: 'Email',
		required: true,
	},
	{
		name: 'phone',
		type: 'text',
		placeholder: 'Phone',
		required: true,
	},
	{
		name: 'picture',
		type: 'file',
		placeholder: 'Contact picture upload',
		required: false,
	},
];

export const ContactForm: React.FC<ContactFormProps> = (props) => {

	const { contact } = props;

	useEffect(() => {
		console.log(contact)
	}, [contact]);

	return (
		<form className="space-y-8 divide-y divide-gray-200">
			<div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
				<div>
					<div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">

						{/*{fields.map((field) => (*/}
						{/*	<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">*/}
						{/*		<label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">*/}
						{/*			First name*/}
						{/*		</label>*/}
						{/*		<div className="mt-1 sm:mt-0 sm:col-span-2">*/}
						{/*			<input*/}
						{/*				type="text"*/}
						{/*				name="first-name"*/}
						{/*				id="first-name"*/}
						{/*				autoComplete="given-name"*/}
						{/*				className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"*/}
						{/*			/>*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*))}*/}

						<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
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

						<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
							<label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
								Last name
							</label>
							<div className="mt-1 sm:mt-0 sm:col-span-2">
								<input
									type="text"
									name="last-name"
									id="last-name"
									autoComplete="family-name"
									className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
								/>
							</div>
						</div>

						<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
							<label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
								Phone
							</label>
							<div className="mt-1 sm:mt-0 sm:col-span-2">
								<input
									id="phone"
									name="phone"
									type="tel"
									// autoComplete="email"
									className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
								/>
							</div>
						</div>

						<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
							<label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
								Email address
							</label>
							<div className="mt-1 sm:mt-0 sm:col-span-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
								/>
							</div>
						</div>

						<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
							<label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
								About
							</label>
							<div className="mt-1 sm:mt-0 sm:col-span-2">
								<textarea
									id="about"
									name="about"
									rows={3}
									className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
									defaultValue=""
								/>
							</div>
						</div>



						<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
							<label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
								Photo
							</label>
							<div className="mt-1 sm:mt-0 sm:col-span-2">
								<div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
									<div className="space-y-1 text-center">
									<svg
											className="mx-auto h-12 w-12 text-gray-400"
											stroke="currentColor"
											fill="none"
											viewBox="0 0 48 48"
											aria-hidden="true"
										>
											<path
												d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									<div className="flex text-sm text-gray-600">
											<label
												htmlFor="file-upload"
												className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
											>
												<span>Upload a file</span>
												<input id="file-upload" name="file-upload" type="file" className="sr-only" />
											</label>
											<p className="pl-1">or drag and drop</p>
										</div>
									<p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="pt-5">
				<div className="flex justify-end">
					<Link to="/">
						<button
							type="button"
							className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Discard
						</button>
					</Link>
					<Button
						type="submit"
						className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Save
					</Button>
				</div>
			</div>
		</form>
	);
};
