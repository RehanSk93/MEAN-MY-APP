import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

// Import custom validator
import { phoneNumberValidators } from './../../custom-form-validators';

@Component({
  selector: 'app-basic-form-array',
  templateUrl: './basic-form-array.component.html',
  styleUrls: ['./basic-form-array.component.scss'],
})
export class BasicFormArrayComponent implements OnInit {
  basicFormArray!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.basicFormArray = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
      }),
      phoneNumbers: this.fb.array([
        this.fb.control('', [Validators.required, phoneNumberValidators()]),
      ]),
    });
  }

  get phoneNumbers() {
    return this.basicFormArray.get('phoneNumbers') as FormArray;
  }

  addPhoneNumber() {
    this.phoneNumbers.push(
      this.fb.control('', [Validators.required, phoneNumberValidators()])
    );
  }

  removePhoneNumber(index: number) {
    this.phoneNumbers.removeAt(index);
  }

  onSubmit() {
    if (this.basicFormArray.valid) {
      console.log(this.basicFormArray.value);
    }
  }
}
