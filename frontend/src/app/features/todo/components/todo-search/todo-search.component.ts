import { Component, OnInit } from '@angular/core';
import {
    MatDatepickerToggle,
    MatDateRangeInput,
    MatDateRangePicker,
    MatEndDate,
    MatStartDate
} from "@angular/material/datepicker";
import { MatFormField, MatHint, MatLabel, MatPrefix, MatSuffix } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatInput } from "@angular/material/input";
import { MatOption, provideNativeDateAdapter } from "@angular/material/core";
import { MatSelect } from "@angular/material/select";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { TodoStatus } from "@features/todo/models/todo-status";
import { TodoService } from "@features/todo/services/todo.service";

@Component({
  selector: 'app-todo-search',
  standalone: true,
  imports: [
      MatDateRangeInput,
      MatDateRangePicker,
      MatDatepickerToggle,
      MatEndDate,
      MatFormField,
      MatHint,
      MatIcon,
      MatInput,
      MatLabel,
      MatOption,
      MatPrefix,
      MatSelect,
      MatStartDate,
      MatSuffix,
      ReactiveFormsModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './todo-search.component.html',
  styleUrl: './todo-search.component.scss'
})
export class TodoSearchComponent implements OnInit {
  searchForm = new FormGroup({
    search: new FormControl(""),
    startDate: new FormControl<Date | null>(null),
    endDate: new FormControl<Date | null>(null),
    status: new FormControl(TodoStatus.All)
  });

  protected readonly TodoStatus = TodoStatus;

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.searchForm.valueChanges.subscribe((value) => {
      this.todoService.filter(value.search!, value.startDate ?? null, value.endDate ?? null, value.status!);
    });
  }
}
