import architectSDK , { ArchitectResource } from 'architect-sdk';
import { environment } from './environments/environment';
import { Contact } from './app/types/Contact';

export type ArchitectSchema = {
  contacts: ArchitectResource<Contact>;
};

export const client = architectSDK<ArchitectSchema>({
    baseUrl: environment.baseUrl,
  });