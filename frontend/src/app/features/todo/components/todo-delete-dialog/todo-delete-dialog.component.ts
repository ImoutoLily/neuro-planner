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

export interface DeleteDialogData {
  todos: TodoItem[];
}

@Component({
  selector: 'app-todo-delete-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose
  ],
  templateUrl: './todo-delete-dialog.component.html',
  styleUrl: './todo-delete-dialog.component.scss'
})
export class TodoDeleteDialogComponent {
  readonly data = inject<DeleteDialogData>(MAT_DIALOG_DATA);
}
