import { Subject } from 'rxjs';

export class BooksService {
  booksSubject = new Subject();

  private books = [
    'Libro de programación',
    'Libro de Aritmetica',
    'El grafico de revista',
  ];

  addBooks(bookTitle: string) {
    this.books.push(bookTitle);
    this.booksSubject.next(bookTitle);
  }

  deleteBook(bookTitle: string) {
    this.books = this.books.filter((x) => x !== bookTitle);
    this.booksSubject.next(bookTitle);
  }

  getBooks() {
    return [...this.books];
  }
}
