import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-promise',
  templateUrl: './basic-promise.component.html',
  styleUrls: ['./basic-promise.component.scss'],
})
export class BasicPromiseComponent {
  // Use the promise
  promiseMessage: any = '';
  isResolved: boolean = true;

  ngOnInit() {}

  callPromise(msg: boolean) {
    // Create a new promise => Example - 1
    let myPromise = new Promise((resolve, reject) => {
      if (msg) {
        resolve('The operation was successful!');
        this.isResolved = true;
      } else {
        reject('The operation failed.');
        this.isResolved = false;
      }
    });

    myPromise
      .then((message) => {
        console.log(message); // Output: 'The operation was successful!' if resolved
        this.promiseMessage = message;
      })
      .catch((err) => {
        console.log(err); // Output: 'The operation failed.' if rejected
        this.promiseMessage = err;
      });
  }
}
