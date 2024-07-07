import { Component } from '@angular/core';
import {MatError, MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatButton, MatIconButton} from "@angular/material/button";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {LiveErrorStateMatcher} from "../../../../shared/validators/live-error-state-matcher";
import {MatIcon} from "@angular/material/icon";

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
    MatError,
    MatIconButton,
    MatSuffix,
    MatIcon
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(12)])
  });

  showPassword = false;

  emailMatcher = new LiveErrorStateMatcher();
  passwordMatcher = new LiveErrorStateMatcher();

  login(): void {
    console.warn("NOT IMPLEMENTED");
  }
}
