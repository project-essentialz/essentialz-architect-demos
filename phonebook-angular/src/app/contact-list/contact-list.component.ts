import { Component, OnInit } from '@angular/core';
// Types
import { Contact } from '../types/Contact';
// Service
import { ArchitectService } from '../services/architect.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(private _architectService: ArchitectService) {}

  ngOnInit(): void {
    this._architectService
      .getContacts()
      .then((contacts) => (this.contacts = contacts));
  }

  async deleteContact(e: Event, id: string) {
    e.preventDefault();
    e.stopPropagation();
    try {
      await this._architectService.deleteContact(id);
      this.contacts = this.contacts.filter((contact) => contact.id !== id);
    } catch (e) {
      console.log(e);
    }
  }
}
