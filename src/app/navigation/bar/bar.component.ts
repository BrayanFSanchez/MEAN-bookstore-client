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
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent implements OnInit, OnDestroy {
  constructor(private securityService: SecurityService) {}
  userState: boolean = false;
  userSubscription = new Subscription();

  ngOnInit() {
    this.userSubscription = this.securityService.securityChange.subscribe(
      (status) => {
        this.userState = status;
      }
    );
  }

  @Output() menuToggle = new EventEmitter<void>();

  onMenuTogglerDispatch() {
    this.menuToggle.emit();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  sessionClose() {
    this.securityService.Logout();
  }
}
