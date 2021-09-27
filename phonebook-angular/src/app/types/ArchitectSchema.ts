import { ArchitectResource } from 'architect-sdk';
import { Contact } from './Contact';

export type ArchitectSchema = {
  contacts: ArchitectResource<Contact>;
};
