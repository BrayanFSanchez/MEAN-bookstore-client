import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RegisterComponent } from './security/register/register.component';
import { LoginComponent } from './security/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BarComponent } from './navigation/bar/bar.component';
import { ListComponent } from './navigation/list/list.component';
import { SecurityService } from './security/security.service';
import { BooksComponent } from './books/books.component';
import { BooksService } from './books/books.service';
import { BookNewComponent } from './books/book-new.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AuthorsComponent } from './authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    BarComponent,
    ListComponent,
    BooksComponent,
    BookNewComponent,
    AuthorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [
    SecurityService,
    BooksService,
    { provide: MAT_DATE_LOCALE, useValue: 'es-Es' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
