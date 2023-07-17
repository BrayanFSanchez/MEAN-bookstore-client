import { Author } from './author.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private authorsList: Author[] = [
    {
      authorId: 1,
      name: 'Brayan',
      lastname: 'Sanchez',
      academicDegree: 'Ingeniero en Sistemas',
    },
    {
      authorId: 1,
      name: 'Karina',
      lastname: 'Lopez',
      academicDegree: 'Matematica',
    },
    {
      authorId: 1,
      name: 'Luisa',
      lastname: 'Hernandez',
      academicDegree: 'Ciencias de la computación',
    },
  ];

  getAuthors() {
    return this.authorsList.slice();
  }
}
