import architect, { ArchitectResource } from 'architect-sdk';

import {
	Task,
	Contact,
} from '../types/types';

type ArchitectSchema = {
	tasks: ArchitectResource<Task>;
	contacts: ArchitectResource<Contact>;
}

const client = architect<ArchitectSchema>({
	baseUrl: process.env.REACT_APP_ARCHITECT_PROJECT_URL ?? '',
});

client.login({
	email: 'nikola@essentialz.io',
	password: 'architectdemo2021',
}, 'email')
	.then(() => console.log('Success!'))
	.catch(() => console.log('Failed!'));

export default client;
