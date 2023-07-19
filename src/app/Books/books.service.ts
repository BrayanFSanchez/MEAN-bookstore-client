import { Books } from './books.model';
import { Subject } from 'rxjs';
import { enviroment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { PaginationBooks } from './pagination-books.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  baseUrl = enviroment.baseUrl;

  // private booksList: Books[] = [];

  bookSubject = new Subject();

  bookPagination: PaginationBooks | null = null;
  bookPaginationSubject = new Subject<PaginationBooks>();

  constructor(private http: HttpClient) {}

  getBooks(
    booksPerPage: number,
    actualPage: number,
    sort: string,
    sortDirection: string,
    filterValue: any
  ): void {
    const request = {
      pageSize: booksPerPage,
      page: actualPage,
      sort,
      sortDirection,
      filterValue,
    };

    this.http
      .post<PaginationBooks>(`${this.baseUrl}/api/Book/Pagination`, request)
      .subscribe((response) => {
        this.bookPagination = response;
        this.bookPaginationSubject.next(this.bookPagination);
      });
  }

  getCurrentListener() {
    return this.bookPaginationSubject.asObservable();
  }

  saveBook(book: Books) {
    this.http.post(`${this.baseUrl}/api/Book`, book).subscribe((response) => {
      this.bookSubject.next('');
    });
  }

  saveBookListener() {
    return this.bookSubject.asObservable();
  }
}
