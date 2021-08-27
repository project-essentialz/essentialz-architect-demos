import architect, { ArchitectResource } from 'architect-sdk';

import { Task } from '../types/types';

export type ArchitectSchema = {
	tasks: ArchitectResource<Task>;
}

export const client = architect<ArchitectSchema>({
	baseUrl: process.env.REACT_APP_ARCHITECT_PROJECT_URL ?? '',
});
