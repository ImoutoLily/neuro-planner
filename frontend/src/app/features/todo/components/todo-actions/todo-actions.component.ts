import { Component, inject, OnInit } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { TodoCreateDialogComponent } from "@features/todo/components/todo-create-dialog/todo-create-dialog.component";
import { TodoCompleteDialogComponent } from "@features/todo/components/todo-complete-dialog/todo-complete-dialog.component";
import { TodoItem } from "@shared/models/todo-item";
import { TodoDeleteDialogComponent } from "@features/todo/components/todo-delete-dialog/todo-delete-dialog.component";
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
    const dialogRef = this.dialog.open(TodoCreateDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.warn("NOT IMPLEMENTED");
      }
    });
  }

  openCompleteDialog(): void {
    const dialogRef = this.dialog.open(TodoCompleteDialogComponent, {
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

    const dialogRef = this.dialog.open(TodoDeleteDialogComponent, {
      data: { todos: todos }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.warn("NOT IMPLEMENTED");
      }
    });
  }
}
