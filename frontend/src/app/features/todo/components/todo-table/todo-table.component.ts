import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from "@angular/common";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef, MatTable, MatTableDataSource
} from "@angular/material/table";
import { MatCheckbox } from "@angular/material/checkbox";
import { MatChip, MatChipAvatar, MatChipSet } from "@angular/material/chips";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from "@angular/material/button";
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort, MatSortHeader } from "@angular/material/sort";
import { SelectionModel } from "@angular/cdk/collections";
import { TodoItem } from "@shared/models/todo-item";
import { TodoService } from "@features/todo/services/todo.service";
import { DeleteDialogComponent } from "@features/todo/components/delete-dialog/delete-dialog.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-todo-table',
  standalone: true,
  imports: [
    DatePipe,
    MatCell,
    MatCellDef,
    MatCheckbox,
    MatChip,
    MatChipAvatar,
    MatChipSet,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    MatPaginator,
    MatRow,
    MatRowDef,
    MatSort,
    MatSortHeader,
    MatTable,
    MatHeaderCellDef,
    MatMenuTrigger
  ],
  templateUrl: './todo-table.component.html',
  styleUrl: './todo-table.component.scss'
})
export class TodoTableComponent implements OnInit, AfterViewInit{
  dataSource = new MatTableDataSource<TodoItem>([
  ]);

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  displayColumns = ["selected", "description", "completed", "dueDate", "createdDate", "actions"];

  selection = new SelectionModel<TodoItem>(true, []);

  private readonly dialog = inject(MatDialog);

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.todos$.subscribe(value => {
      this.dataSource.data = value;
    });
    this.selection.changed.subscribe(value => {
      this.todoService.setSelectedTodos(value.source.selected);
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  isAllSelected(): boolean {
    return this.selection.selected.length === this.dataSource.data.length;
  }

  toggleAllSelect(): void {
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

  openDeleteDialog(todo: TodoItem): void {
    const todos = [todo];

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
