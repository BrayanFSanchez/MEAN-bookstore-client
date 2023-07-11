import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario.component';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './Books/books.component';
import { BookComponent } from './Book/book.component';
import { BooksService } from './services/books.service';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    BooksComponent,
    BookComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [BooksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
