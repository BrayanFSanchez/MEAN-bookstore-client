import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Author } from './author.model';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  deploymentColumns = ['name', 'lastname', 'academicDegree'];
  dataSource = new MatTableDataSource<Author>();

  constructor(private authorsService: AuthorsService) {}

  ngOnInit(): void {
    this.dataSource.data = this.authorsService.getAuthors();
  }
}
