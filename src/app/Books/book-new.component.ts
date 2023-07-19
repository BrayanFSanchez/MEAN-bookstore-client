import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { BooksService } from './books.service';
import { MatSelectChange } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Author } from '../authors/author.model';
import { AuthorsService } from '../authors/authors.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-new',
  templateUrl: 'book-new.component.html',
})
export class BookNewComponent implements OnInit, OnDestroy {
  selectAuthor: string = '';
  selectAuthorText: string = '';
  publicationDate: string = '';

  @ViewChild(MatDatepicker) picker: MatDatepicker<Date> | null = null;

  authors: Author[] = [];

  private authorSubscription: Subscription | null = null;

  constructor(
    private booksService: BooksService,
    private dialogRef: MatDialog,
    private authorsService: AuthorsService
  ) {}

  ngOnInit(): void {
    this.authorsService.getAuthors();
    this.authorSubscription = this.authorsService
      .getCurrentListener()
      .subscribe((authorsBackend: Author[]) => {
        this.authors = authorsBackend;
      });
  }

  selected(event: MatSelectChange) {
    this.selectAuthorText = (event.source.selected as MatOption).viewValue;
    console.log(this.selectAuthorText);
  }

  saveBook(form: NgForm) {
    if (form.valid) {
      const authorRequest = {
        id: this.selectAuthor,
        fullName: this.selectAuthorText,
      };

      const bookRequest = {
        id: null,
        description: form.value.description,
        title: form.value.title,
        author: authorRequest,
        price: parseInt(form.value.price),
        publicationDate: new Date(this.publicationDate),
      };

      this.booksService.saveBook(bookRequest);
      this.authorSubscription = this.booksService
        .saveBookListener()
        .subscribe(() => {
          this.dialogRef.closeAll();
        });
    }
  }

  ngOnDestroy(): void {
    this.authorSubscription?.unsubscribe();
  }
}
