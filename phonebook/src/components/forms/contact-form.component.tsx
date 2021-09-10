import React, { useState } from 'react';

// Components
import { FormFooterComponent } from './form-footer.component';
import { FileInputComponent } from './file-input.component';

// Types
import { Contact, ContactFormData } from '../../types';

// Consts
import { initialProps, fields } from './formData';

type ContactFormProps = {
	contact?: Contact
	handleSubmit: (data: ContactFormData) => void;
}

type InputName = keyof ContactFormData;

export const ContactForm: React.FC<ContactFormProps> = ({ contact, handleSubmit }) => {
	const [form, setForm] = useState<ContactFormData>({ ...initialProps, ...contact });

	const handleInputChange = (name: InputName) => (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm(pre => ({ ...pre, [name]: e.target.value }));
	};

	const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file && file.size < 1024 * 1024) {
			setForm(pre => ({ ...pre, file: e.target.files?.[0] }));
		}
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleSubmit(form);
	};

	return (
		<form className="space-y-8 divide-y divide-gray-200" onSubmit={onSubmit}>
			<div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
				<div>
					<div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">

						{fields.map(({
							placeholder, type, name, autoComplete,
						}) => (
							<div key={name} className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
								<label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
									{placeholder}
								</label>
								<div className="mt-1 sm:mt-0 sm:col-span-2">
									<input
										placeholder={placeholder}
										type={type}
										name={name}
										id={name}
										autoComplete={autoComplete}
										className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
										value={form[name]}
										onChange={handleInputChange(name)}
									/>
								</div>
							</div>
						))}
						<FileInputComponent onChange={handleFileInputChange} value={form.file} pictureUrl={contact?.pictureUrl} />
					</div>
				</div>
			</div>

			<FormFooterComponent />
		</form>
	);
};
