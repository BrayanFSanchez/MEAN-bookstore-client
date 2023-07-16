import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-book-new',
  templateUrl: 'book-new.component.html',
})
export class BookNewComponent {
  selectAuthor: string = '';
  @ViewChild(MatDatepicker) picker: MatDatepicker<Date> | null = null;

  saveBook(form: NgForm) {}
}
