import architect, { ArchitectResource } from 'architect-sdk';

import {
	Contact,
} from '../types';

export type ArchitectSchema = {
	contacts: ArchitectResource<Contact>;
}

export const client = architect<ArchitectSchema>({
	baseUrl: process.env.REACT_APP_ARCHITECT_PROJECT_URL ?? '',
});

export default client;
