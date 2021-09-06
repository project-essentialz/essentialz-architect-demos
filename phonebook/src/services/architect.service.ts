import architect, { ArchitectResource } from 'architect-sdk';

import {
	Contact,
} from '../types';

const baseUrl = process.env.REACT_APP_ARCHITECT_PROJECT_URL;
if (!baseUrl) throw Error('Missing project url in config file');

export type ArchitectSchema = {
	contacts: ArchitectResource<Contact>;
}

export const client = architect<ArchitectSchema>({
	baseUrl,
});

client.login({	email: 'nikola@essentialz.io',	password: 'architectdemo2021' }, 'email')
	.catch(() => {
		throw new Error('Login failed');
	});

export default client;
