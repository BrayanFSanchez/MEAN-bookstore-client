import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output() menuToggle = new EventEmitter<void>();

  onCloseMenu() {
    this.menuToggle.emit();
  }
}
