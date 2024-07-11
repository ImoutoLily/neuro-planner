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
import {MatOption, provideNativeDateAdapter} from "@angular/material/core";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatChip, MatChipAvatar, MatChipSet} from "@angular/material/chips";
import {SelectionModel} from "@angular/cdk/collections";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatSelect} from "@angular/material/select";

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
    MatButton,
    MatChipSet,
    MatChip,
    MatChipAvatar,
    MatIconButton,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatSelect,
    MatOption
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements AfterViewInit {
  displayColumns = ["selected", "description", "completed", "dueDate", "createdDate", "actions"];
  dataSource = new MatTableDataSource<TodoItem>([
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
  selection = new SelectionModel<TodoItem>(true, []);

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  displayTodoType = TodoStatus.All;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  isAllSelected(): boolean {
    return this.selection.selected.length === this.dataSource.data.length;
  }

  toggleAllSelect() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  selectAriaLabel(row?: TodoItem): string {
    if (!row) {
      return `${this.isAllSelected() ? "deselect" : "select"} all`;
    }

    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${row.description + 1}`;
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
