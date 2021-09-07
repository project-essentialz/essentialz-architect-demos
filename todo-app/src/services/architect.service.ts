import architect, { ArchitectResource } from 'architect-sdk';

import { Task } from '../types';

const baseUrl = process.env.REACT_APP_ARCHITECT_PROJECT_URL;
if (!baseUrl) throw Error('Missing project url in config file');

export type ArchitectSchema = {
	tasks: ArchitectResource<Task>;
}

export const client = architect<ArchitectSchema>({
	baseUrl,
});

export default client;
