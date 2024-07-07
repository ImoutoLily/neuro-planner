import { Component } from '@angular/core';
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatLabel,
    MatFormField,
    MatInput,
    MatCard,
    MatCardHeader,
    MatCardActions,
    MatCardContent,
    MatCardTitle,
    MatButton,
    ReactiveFormsModule,
    MatError
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)])
  });

  login(): void {
    console.warn("NOT IMPLEMENTED");
  }
}
