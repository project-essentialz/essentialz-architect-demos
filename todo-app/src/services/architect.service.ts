import architect, { ArchitectResource } from 'architect-sdk';

import { Task } from '../types';

export type ArchitectSchema = {
	tasks: ArchitectResource<Task>;
}

export const client = architect<ArchitectSchema>({
	baseUrl: process.env.REACT_APP_ARCHITECT_PROJECT_URL ?? 'https://architect_demo.essentialz.cloud',
});

export default client;
