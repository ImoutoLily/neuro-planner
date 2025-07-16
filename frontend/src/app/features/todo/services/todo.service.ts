import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { TodoItem } from "@shared/models/todo-item";
import { TodoStatus } from "@features/todo/models/todo-status";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos = new BehaviorSubject<TodoItem[]>([
    { description: "Finish NeuroPlanner", completed: true, createdDate: new Date(), dueDate: new Date(2024, 10, 4) },
    { description: "Write NeuroPlanner documentation", completed: false, createdDate: new Date(), dueDate: new Date(2024, 9, 5) },
    { description: "Upgrade packages", completed: true, createdDate: new Date(), dueDate: new Date(2024, 10, 16) },
    { description: "Set up computer", completed: false, createdDate: new Date(), dueDate: new Date(2024, 8, 26) },
    { description: "Get more bunnies", completed: false, createdDate: new Date(), dueDate: new Date(2024, 11, 10) },
    { description: "Learn NixOS", completed: false, createdDate: new Date(), dueDate: new Date(2024, 10, 1) },
    { description: "Get more books", completed: false, createdDate: new Date(), dueDate: new Date(2024, 10, 1) },
    { description: "Finish Rust project", completed: false, createdDate: new Date(), dueDate: new Date(2024, 10, 30) },
    { description: "Write CLI chess app", completed: false, createdDate: new Date(), dueDate: new Date(2024, 10, 30) },
    { description: "Write CLI chess app", completed: false, createdDate: new Date(), dueDate: new Date(2024, 10, 30) },
    { description: "Write CLI chess app", completed: false, createdDate: new Date(), dueDate: new Date(2024, 10, 30) },
    { description: "Write CLI chess app", completed: false, createdDate: new Date(), dueDate: new Date(2024, 10, 30) },
    { description: "Write CLI chess app", completed: false, createdDate: new Date(), dueDate: new Date(2024, 10, 30) },
    { description: "Write CLI chess app", completed: false, createdDate: new Date(), dueDate: new Date(2024, 10, 30) },
    { description: "Write CLI chess app", completed: false, createdDate: new Date(), dueDate: new Date(2024, 10, 30) },
    { description: "Write CLI chess app", completed: false, createdDate: new Date(), dueDate: new Date(2024, 10, 30) },
    { description: "Write CLI chess app", completed: false, createdDate: new Date(), dueDate: new Date(2024, 10, 30) },
    { description: "Write CLI chess app", completed: false, createdDate: new Date(), dueDate: new Date(2024, 10, 30) },
  ]);
  private selectedTodos = new BehaviorSubject<TodoItem[]>([]);

  todos$ = this.todos.asObservable();
  selectedTodos$ = this.selectedTodos.asObservable();


  constructor() { }

  setSelectedTodos(selectedTodos: TodoItem[]) {
    this.todos.next(selectedTodos);
  }

  filter(search: string, startDate: Date | null, dueDate: Date | null, status: TodoStatus) {
    console.warn("Not implemented");
  }
}
