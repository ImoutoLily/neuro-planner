import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {TodoItem} from "@shared/models/todo-item";
import {DatePipe} from "@angular/common";
import {MatPaginator} from "@angular/material/paginator";
import {MatFormField, MatHint, MatLabel, MatPrefix, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {TodoStatus} from "@features/todo/models/todo-status";
import {FormsModule} from "@angular/forms";
import {MatTooltip} from "@angular/material/tooltip";
import {
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker,
  MatEndDate,
  MatStartDate
} from "@angular/material/datepicker";
import {provideNativeDateAdapter} from "@angular/material/core";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    DatePipe,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatPaginator,
    MatFormField,
    MatIcon,
    MatLabel,
    MatPrefix,
    MatInput,
    MatSortHeader,
    MatSort,
    MatButtonToggleGroup,
    MatButtonToggle,
    FormsModule,
    MatTooltip,
    MatDateRangeInput,
    MatDatepickerToggle,
    MatSuffix,
    MatDateRangePicker,
    MatStartDate,
    MatEndDate,
    MatHint,
    MatCheckbox,
    MatButton
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements AfterViewInit {
  displayColumns = ["completed", "text", "dueDate", "createdDate"];
  dataSource = new MatTableDataSource<TodoItem>([
    { text: "Finish NeuroPlanner", completed: true, createdDate: new Date(), dueDate: new Date(2024, 10, 4) },
    { text: "Write NeuroPlanner documentation", completed: false, createdDate: new Date(), dueDate: new Date(2024, 9, 5) },
    { text: "Upgrade packages", completed: true, createdDate: new Date(), dueDate: new Date(2024, 10, 16) },
    { text: "Set up computer", completed: false, createdDate: new Date(), dueDate: new Date(2024, 8, 26) },
    { text: "Get more bunnies", completed: false, createdDate: new Date(), dueDate: new Date(2024, 11, 10) },
    { text: "Learn NixOS", completed: false, createdDate: new Date(), dueDate: new Date(2024, 10, 1) },
    { text: "Get more books", completed: false, createdDate: new Date(), dueDate: new Date(2024, 10, 1) },
    { text: "Finish Rust project", completed: false, createdDate: new Date(), dueDate: new Date(2024, 10, 30) },
    { text: "Write CLI chess app", completed: false, createdDate: new Date(), dueDate: new Date(2024, 10, 30) },
  ]);

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  displayTodoType = TodoStatus.All;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  protected readonly TodoStatus = TodoStatus;
}
