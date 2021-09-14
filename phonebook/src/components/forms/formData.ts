import { ContactFormData } from '../../types';

export const fields = [
	{
		name: 'firstName',
		type: 'text',
		placeholder: 'First name',
		required: true,
		autoComplete: 'given-name',
	},
	{
		name: 'lastName',
		type: 'text',
		placeholder: 'Last name',
		required: true,
		autoComplete: 'family-name',
	},
	{
		name: 'email',
		type: 'email',
		placeholder: 'Email address',
		required: true,
		autoComplete: 'email',
	},
	{
		name: 'phone',
		type: 'text',
		placeholder: 'Phone',
		required: true,
		autoComplete: 'tel',
	},
] as const;

export const initialProps: ContactFormData = {
	firstName: '',
	lastName: '',
	phone: '',
	email: '',
	meta: {},
	file: undefined,
	id: '',
	pictureUrl: '',
};
