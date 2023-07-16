import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BooksService } from './books.service';
import { Books } from './books.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { BookNewComponent } from './book-new.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit, AfterViewInit {
  bookData: Books[] = [];
  columsDeployment = ['title', 'description', 'author', 'price'];
  dataSource = new MatTableDataSource<Books>();
  @ViewChild(MatSort) ordering: MatSort | null = null;
  @ViewChild(MatPaginator) pagination: MatPaginator | null = null;

  constructor(private booksService: BooksService, private dialog: MatDialog) {}

  makeFilter(filter: Event) {
    const inputElement = filter.target as HTMLInputElement;
    const inputValue = inputElement.value;

    this.dataSource.filter = inputValue;
  }

  openDialog() {
    this.dialog.open(BookNewComponent, {
      width: '350px',
    });
  }

  ngOnInit(): void {
    this.dataSource.data = this.booksService.getBooks();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.ordering;
    this.dataSource.paginator = this.pagination;
  }
}
