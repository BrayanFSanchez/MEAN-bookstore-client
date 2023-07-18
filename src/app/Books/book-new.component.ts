import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { BooksService } from './books.service';
import { MatSelectChange } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Author } from '../authors/author.model';
import { AuthorsService } from '../authors/authors.service';

@Component({
  selector: 'app-book-new',
  templateUrl: 'book-new.component.html',
})
export class BookNewComponent implements OnInit {
  selectAuthor: string = '';
  selectAuthorText: string = '';
  publicationDate: string = '';

  @ViewChild(MatDatepicker) picker: MatDatepicker<Date> | null = null;

  authors: Author[] = [];

  constructor(
    private booksService: BooksService,
    private dialogRef: MatDialog,
    private authorsService: AuthorsService
  ) {}

  ngOnInit(): void {
    // this.authors = this.authorsService.getAuthors();
  }

  selected(event: MatSelectChange) {
    this.selectAuthor = (event.source.selected as MatOption).viewValue;
  }

  saveBook(form: NgForm) {
    if (form.valid) {
      this.booksService.saveBook({
        bookId: 1,
        description: form.value.description,
        title: form.value.title,
        author: this.selectAuthor,
        price: form.value.price,
        publicationDate: new Date(this.publicationDate),
      });
      this.dialogRef.closeAll();
    }
  }
}
