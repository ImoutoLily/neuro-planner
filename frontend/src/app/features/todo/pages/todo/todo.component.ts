import { Component } from '@angular/core';
import { TodoActionsComponent } from "@features/todo/components/todo-actions/todo-actions.component";
import { TodoSearchComponent } from "@features/todo/components/todo-search/todo-search.component";
import { TodoTableComponent } from "@features/todo/components/todo-table/todo-table.component";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    TodoActionsComponent,
    TodoSearchComponent,
    TodoTableComponent
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

}
