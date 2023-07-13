import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent {
  @Output() menuToggle = new EventEmitter<void>();

  onMenuTogglerDispatch() {
    this.menuToggle.emit();
  }
}
