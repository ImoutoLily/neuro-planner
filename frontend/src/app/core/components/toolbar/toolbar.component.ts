import {Component, EventEmitter, Output} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor, MatIconAnchor, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon,
    MatAnchor,
    MatIconAnchor
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  @Output() toggleMenuEvent = new EventEmitter<void>;

  toggleMenu(): void {
    this.toggleMenuEvent.emit();
  }
}
