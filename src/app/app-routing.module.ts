import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './security/register/register.component';
import { LoginComponent } from './security/login/login.component';
import { SecurityRouter } from './security/security.router';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [SecurityRouter] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SecurityRouter],
})
export class AppRoutingModule {}
