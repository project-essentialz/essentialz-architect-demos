import architect, { ArchitectResource } from 'architect-sdk';

import { Task } from '../types/types';

type ArchitectSchema = {
	tasks: ArchitectResource<Task>;
}

const client = architect<ArchitectSchema>({
	baseUrl: process.env.REACT_APP_ARCHITECT_PROJECT_URL ?? '',
});

export default client;
