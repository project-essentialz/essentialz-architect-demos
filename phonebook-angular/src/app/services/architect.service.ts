import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {client} from '../../architectConfig'

// Types
import { Contact } from '../types/Contact';

@Injectable({
  providedIn: 'root',
})
export class ArchitectService {
  private _architectSDK = client;
  constructor() {
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
