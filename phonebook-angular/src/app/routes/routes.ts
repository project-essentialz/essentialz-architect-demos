import { ContactListComponent } from '../contact-list/contact-list.component';
import { CreateContactComponent } from '../create-contact/create-contact.component';
import { LoginComponent } from '../login/login.component';

// Guards
import { AuthGuard } from '../guard/auth.guard';

export const routes = [
  {
    path: 'contact/:id',
    component: CreateContactComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'contact',
    component: CreateContactComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'contacts',
    component: ContactListComponent,
    // canActivate: [AuthGuard],
  },
  { path: '', component: LoginComponent },
];
