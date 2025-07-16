import { Component, inject, OnInit } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { CreateDialogComponent } from "@features/todo/components/create-dialog/create-dialog.component";
import { CompleteDialogComponent } from "@features/todo/components/complete-dialog/complete-dialog.component";
import { TodoItem } from "@shared/models/todo-item";
import { DeleteDialogComponent } from "@features/todo/components/delete-dialog/delete-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { TodoService } from "@features/todo/services/todo.service";

@Component({
  selector: 'app-todo-actions',
  standalone: true,
  imports: [
      MatButton,
      MatIcon
  ],
  templateUrl: './todo-actions.component.html',
  styleUrl: './todo-actions.component.scss'
})
export class TodoActionsComponent implements OnInit {
  private readonly dialog = inject(MatDialog);
  private selectedTodos: TodoItem[] = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.selectedTodos$.subscribe(value => {
      this.selectedTodos = value;
    });
  }

  hasOnlyCompleteItemsSelected(): boolean {
    return this.selectedTodos.every(item => item.completed);
  }

  hasNoItemsSelected(): boolean {
    return this.selectedTodos.length === 0;
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.warn("NOT IMPLEMENTED");
      }
    });
  }

  openCompleteDialog(): void {
    const dialogRef = this.dialog.open(CompleteDialogComponent, {
      data: { todos: this.selectedTodos.filter(item => !item.completed) }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.warn("NOT IMPLEMENTED");
      }
    });
  }

  openDeleteDialog(): void {
    const todos = this.selectedTodos;

    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { todos: todos }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.warn("NOT IMPLEMENTED");
      }
    });
  }
}
