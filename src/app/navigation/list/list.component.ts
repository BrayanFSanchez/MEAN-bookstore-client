import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { SecurityService } from '../../security/security.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  @Output() menuToggle = new EventEmitter<void>();
  userStatus: boolean = false;
  userSubscription = new Subscription();

  constructor(private securityService: SecurityService) {}

  ngOnInit() {
    this.userSubscription = this.securityService.securityChange.subscribe(
      (status) => {
        this.userStatus = status;
      }
    );
  }

  onCloseMenu() {
    this.menuToggle.emit();
  }

  sessionCloseMenu() {
    this.onCloseMenu();
    this.securityService.Logout();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
