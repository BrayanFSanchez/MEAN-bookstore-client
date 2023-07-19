import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BooksService } from './books.service';
import { Books } from './books.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { BookNewComponent } from './book-new.component';
import { Subscription } from 'rxjs';
import { PaginationBooks } from './pagination-books.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit, AfterViewInit, OnDestroy {
  timeout: any = null;
  bookData: Books[] = [];
  columsDeployment = ['title', 'description', 'author', 'price'];
  dataSource = new MatTableDataSource<Books>();
  @ViewChild(MatSort) ordering: MatSort | null = null;
  @ViewChild(MatPaginator) pagination: MatPaginator | null = null;

  private bookSubscription: Subscription | null = null;

  totalBooks = 0;
  booksPerPage = 2;
  comboPage = [1, 2, 5, 10];
  actualPage = 1;
  sort = 'title';
  sortDirection = 'asc';
  filterValue = null;

  constructor(private booksService: BooksService, private dialog: MatDialog) {}

  pagerEvent(event: PageEvent): void {
    this.booksPerPage = event.pageSize;
    this.actualPage = event.pageIndex + 1;
    this.booksService.getBooks(
      this.booksPerPage,
      this.actualPage,
      this.sort,
      this.sortDirection,
      this.filterValue
    );
  }

  orderColumn(event: { active: string; direction: string }): void {
    this.sort = event.active;
    this.sortDirection = event.direction;

    this.booksService.getBooks(
      this.booksPerPage,
      this.actualPage,
      event.active,
      event.direction,
      this.filterValue
    );
  }

  // makeFilter(filter: Event) {
  //   const inputElement = filter.target as HTMLInputElement;
  //   const inputValue = inputElement.value;

  //   this.dataSource.filter = inputValue;
  // }

  makeFilter(event: any): void {
    clearTimeout(this.timeout);
    const $this = this;

    this.timeout = setTimeout(() => {
      if (event.keycode !== 13) {
        const filterValueLocal = {
          property: 'title',
          value: event.target.value,
        };

        $this.filterValue = filterValueLocal.value;

        $this.booksService.getBooks(
          $this.booksPerPage,
          $this.actualPage,
          $this.sort,
          $this.sortDirection,
          filterValueLocal
        );
      }
    }, 1000);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BookNewComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.booksService.getBooks(
        this.booksPerPage,
        this.actualPage,
        this.sort,
        this.sortDirection,
        this.filterValue
      );
    });
  }

  ngOnInit(): void {
    this.booksService.getBooks(
      this.booksPerPage,
      this.actualPage,
      this.sort,
      this.sortDirection,
      this.filterValue
    );

    this.booksService
      .getCurrentListener()
      .subscribe((pagination: PaginationBooks) => {
        this.dataSource = new MatTableDataSource<Books>(pagination.data);
        this.totalBooks = pagination.totalRows;
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.ordering;
    this.dataSource.paginator = this.pagination;
  }

  ngOnDestroy(): void {
    this.bookSubscription?.unsubscribe();
  }
}
