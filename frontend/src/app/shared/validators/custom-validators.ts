import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function lengthRangeValidator(minLength: number, maxLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (value.length < minLength || value.length > maxLength) {
      return { length: true }
    }

    return null;
  }
}
