import { Books } from './books.model';
import { Subject } from 'rxjs';

export class BooksService {
  private booksList: Books[] = [
    {
      bookId: 1,
      title: 'To Kill a Mockingbird',
      description: 'A classic novel by Harper Lee',
      author: 'Harper Lee',
      price: 12.99,
    },
    {
      bookId: 2,
      title: '1984',
      description: 'A dystopian novel by George Orwell',
      author: 'George Orwell',
      price: 10.99,
    },
    {
      bookId: 3,
      title: 'The Catcher in the Rye',
      description: 'A coming-of-age novel by J.D. Salinger',
      author: 'J.D. Salinger',
      price: 9.99,
    },
    {
      bookId: 4,
      title: 'Pride and Prejudice',
      description: 'A classic novel by Jane Austen',
      author: 'Jane Austen',
      price: 11.99,
    },
    {
      bookId: 5,
      title: 'The Hobbit',
      description: 'A fantasy novel by J.R.R. Tolkien',
      author: 'J.R.R. Tolkien',
      price: 14.99,
    },
  ];

  bookSubject = new Subject<Books>();

  getBooks() {
    return this.booksList.slice();
  }

  saveBook(book: Books) {
    this.booksList.push(book);
    this.bookSubject.next(book);
  }
}
