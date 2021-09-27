import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { LoginComponent } from './login/login.component';

// Routes
import { routes } from './routes/routes';
// Services
import { ArchitectService } from './services/architect.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    CreateContactComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ArchitectService],
  bootstrap: [AppComponent],
})
export class AppModule {}
