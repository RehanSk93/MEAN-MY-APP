import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function phoneNumberValidators(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = /^[0-9]{10}$/.test(control.value);
    return isValid ? null : { invalidPhoneNumber: true };
  };
}
