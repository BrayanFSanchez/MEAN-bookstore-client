import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Author } from './author.model';
import { AuthorsService } from './authors.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit, OnDestroy {
  deploymentColumns = ['name', 'lastname', 'academicDegree'];
  dataSource = new MatTableDataSource<Author>();

  private authorSubscription: Subscription | null = null;

  constructor(private authorsService: AuthorsService) {}

  ngOnInit(): void {
    this.authorsService.getAuthors();

    this.authorSubscription = this.authorsService
      .getCurrentListener()
      .subscribe((authors: Author[]) => {
        this.dataSource.data = authors;
      });
  }

  ngOnDestroy(): void {
    this.authorSubscription?.unsubscribe();
  }
}
