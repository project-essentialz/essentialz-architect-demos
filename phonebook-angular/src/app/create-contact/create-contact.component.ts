import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
// Service
import { ArchitectService } from '../services/architect.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
})
export class CreateContactComponent implements OnInit {
  _id: string | null = null;
  title: string | null = null;
  loading = false;

  contactForm = this._formBuilder.group({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    image: null,
    pictureUrl: undefined,
  });

  constructor(
    private _route: ActivatedRoute,
    private _architectService: ArchitectService,
    private _formBuilder: FormBuilder,
    private _sanitizer: DomSanitizer,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe(async (params) => {
      this._id = params.get('id');
      this.title = this._id === null ? 'Create contact' : 'Edit contact';
      this.getContact(this._id);
    });
  }

  async getContact(id: string | null) {
    if (id === null) return;
    const contact = await this._architectService.getContact(id);
    this.contactForm.patchValue({
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      phone: contact.phone,
      pictureUrl: contact.pictureUrl,
    });
  }

  isFileLessThan(fileSize: number, limit = 1) {
    return fileSize / 1000 / 1000 <= limit;
  }

  onFileChange(e: Event) {
    const files = (e.target as HTMLInputElement).files;
    if (files && this.isFileLessThan(files[0].size)) {
      URL.revokeObjectURL(this.contactForm.get('imageUrl')?.value);
      const pictureUrl = this._sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(files[0]),
      );
      this.contactForm.patchValue({
        image: files[0],
        pictureUrl,
      });
    }
  }

  async onSubmit(e: Event) {
    e.preventDefault();
    const { image, ...newContact } = this.contactForm.value;
    this.loading = true;
    try {
      if (image) {
        const { url } = await this._architectService.uploadFile(image);
        newContact.pictureUrl = url;
      }
      if (this._id) {
        await this._architectService.updateContact(this._id, newContact);
      } else {
        await this._architectService.createContact(newContact);
      }
      this._router.navigate(['contacts']);
    } catch (e) {
      this.loading = false;
    }
  }
}
