import {Component, inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {TodoItem} from "@shared/models/todo-item";

export interface ConfirmDialogData {
  todos: TodoItem[];
}

@Component({
  selector: 'app-todo-complete-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose
  ],
  templateUrl: './todo-complete-dialog.component.html',
  styleUrl: './todo-complete-dialog.component.scss'
})
export class TodoCompleteDialogComponent {
  readonly data = inject<ConfirmDialogData>(MAT_DIALOG_DATA);
}
