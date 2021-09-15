import { Injectable } from '@angular/core';
import client from 'architect-sdk';
import { ArchitectServices } from 'architect-sdk/lib/core/types';
import { environment } from '../../environments/environment';

// Types
import { Contact } from '../types/Contact';
import { ArchitectSchema } from '../types/ArchitectSchema';

@Injectable({
  providedIn: 'root',
})
export class ArchitectService {
  _architectSDK: ArchitectServices<ArchitectSchema>;
  constructor() {
    this._architectSDK = client<ArchitectSchema>({
      baseUrl: environment.baseUrl,
    });
  }

  public getContacts() {
    return this._architectSDK.contacts.getAll();
  }

  public createContact(newContact: Contact) {
    return this._architectSDK.contacts.create(newContact);
  }

  public deleteContact(id: string) {
    return this._architectSDK.contacts.delete(id);
  }

  public getContact(id: string) {
    return this._architectSDK.contacts.get(id);
  }

  public updateContact(id: string, contact: Contact) {
    return this._architectSDK.contacts.update(id, contact);
  }

  public uploadFile(file: File) {
    return this._architectSDK.files.upload(file);
  }

  public async login() {
    await this._architectSDK.login(environment.credentials, 'email');
  }

  public isLoggedIn() {
    return this._architectSDK.isAuthenticated();
  }
}
