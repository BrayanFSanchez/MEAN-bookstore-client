import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BooksComponent } from './Books/books.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
