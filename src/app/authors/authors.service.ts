import { Author } from './author.model';
import { Injectable } from '@angular/core';
import { enviroment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  baseUrl = enviroment.baseUrl;
  private authorsList: Author[] = [];

  private authorsSubject = new Subject<Author[]>();

  constructor(private http: HttpClient) {}

  getAuthors() {
    this.http
      .get<Author[]>(`${this.baseUrl}/api/BookstoreAuthor`)
      .subscribe((data) => {
        this.authorsList = data;
        this.authorsSubject.next([...this.authorsList]);
      });
  }

  getCurrentListener() {
    return this.authorsSubject.asObservable();
  }
}
