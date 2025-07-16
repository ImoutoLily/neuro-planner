import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from "@angular/material/dialog";
import { MatButton } from "@angular/material/button";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormField, MatHint, MatLabel, MatSuffix } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from "@angular/material/datepicker";
import { provideNativeDateAdapter } from "@angular/material/core";

@Component({
  selector: 'app-todo-create-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatDatepickerInput,
    MatHint,
    MatDatepickerToggle,
    MatDatepicker,
    MatSuffix
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './todo-create-dialog.component.html',
  styleUrl: './todo-create-dialog.component.scss'
})
export class TodoCreateDialogComponent {
  todoForm = new FormGroup({
    description: new FormControl("", Validators.required),
    dueDate: new FormControl("", Validators.required),
  });
}
