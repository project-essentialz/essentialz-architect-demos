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

export default client;
