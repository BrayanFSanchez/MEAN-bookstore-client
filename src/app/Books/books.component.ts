import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
})
export class BooksComponent implements OnInit, OnDestroy {
  books: string[] = [];
  constructor(private booksService: BooksService) {}
  private bookSubscription = new Subscription();

  deleteBook(book: string) {}

  saveBook(f: any) {
    if (f.valid) {
      this.booksService.addBooks(f.value.bookTitle);
    }
  }

  ngOnInit() {
    this.books = this.booksService.getBooks();
    this.bookSubscription = this.booksService.booksSubject.subscribe(() => {
      this.books = this.booksService.getBooks();
    });
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }
}
