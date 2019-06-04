import { AbstractControl, ValidationErrors } from '@angular/forms';

export class EmailValidator {
  static validateEmail(control: AbstractControl): ValidationErrors | null {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return control.value.match(pattern) ? null : { invalidPattern: true };
  }
}
