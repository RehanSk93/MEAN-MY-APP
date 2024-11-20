import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent {
  registrationForm: FormGroup;

  constructor() {
    this.registrationForm = new FormGroup(
      {
        userName: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        address: new FormGroup({
          street: new FormControl(null, [Validators.required]),
          city: new FormControl(null, [Validators.required]),
          state: new FormControl(null, [Validators.required]),
          zip: new FormControl(null, [
            Validators.required,
            Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$'),
          ]),
        }),

        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmPassword: new FormControl(null, [Validators.required]),
        typeYourText: new FormControl(null, [Validators.required, Validators.minLength(10)]),
        gender: new FormControl('', [Validators.required])
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  ngOnInit() {}

  onSubmit() {
    console.log('Form Details', this.registrationForm.value);
  }

  passwordMatchValidator: ValidatorFn = (
    formGroup: AbstractControl
  ): { [key: string]: boolean } | null => {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  };
}
