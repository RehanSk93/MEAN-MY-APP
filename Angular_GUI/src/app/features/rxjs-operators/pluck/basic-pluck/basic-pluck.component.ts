import { Component, OnInit } from '@angular/core';
import { of, pluck } from 'rxjs';

@Component({
  selector: 'app-basic-pluck',
  templateUrl: './basic-pluck.component.html',
  styleUrls: ['./basic-pluck.component.scss'],
})
export class BasicPluckComponent implements OnInit {
  userName: string[] = [];
  constructor() {}

  ngOnInit() {
    // Create an observable that emits objects.
    const source$ = of(
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 },
      { name: 'Jim', age: 35 }
    );

    // Use the pluck operator to extract the 'name' property
    source$.pipe(pluck('name')).subscribe((user) => {
      this.userName.push(user);
      console.log(user);
    });
  }
}
