import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {MatError, MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {LiveErrorStateMatcher} from "@shared/validators/live-error-state-matcher";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {lengthRangeValidator} from "@shared/validators/custom-validators";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatError,
    MatButton,
    MatCardHeader,
    MatIconButton,
    MatIcon,
    MatSuffix
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, lengthRangeValidator(12, 128)])
  });

  showPassword = false;

  emailMatcher = new LiveErrorStateMatcher();
  passwordMatcher = new LiveErrorStateMatcher();

  register(): void {
    console.warn("NOT IMPLEMENTED");
  }
}
