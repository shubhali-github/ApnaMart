// this code for customize error
//serverside error
//asynchonous error
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export class UsernameValidator {
  static noSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) return { noSpace: true };
    return null;
  }
    static valLength(control: AbstractControl): ValidationErrors | null {
        if (control.value && control.value.length >=10) return { valLength: true };
        return null;
    }

}
