import { Component } from '@angular/core';
import {
  from,
  map,
  Subscribable,
  Subscriber,
  Subscription,
  Unsubscribable,
} from 'rxjs';

@Component({
  selector: 'app-map-example-two',
  templateUrl: './map-example-two.component.html',
  styleUrls: ['./map-example-two.component.scss'],
})
export class MapExampleTwoComponent implements Unsubscribable {
  members$ = from([
    { name: 'Rehan Sk', age: 29 },
    { name: 'Azam Sk', age: 31 },
    { name: 'Sachin', age: 30 },
    { name: 'Golam Nabi Azad', age: 28 },
    { name: 'Soumya', age: 29 },
    { name: 'Karnab', age: 32 },
    { name: 'Sayan', age: 38 },
  ]);

  userName: string[] = [];
  unsubscribeValue!: Subscription;

  constructor() {}
  ngOnInit() {}

  fetchUsername() {
    this.unsubscribeValue = this.members$
      .pipe(
        map((data) => {
          return data.name;
        })
      )
      .subscribe((res) => {
        console.log('username - ', res);
        this.userName.push(res);
      });
  }

  unsubscribe() {
    this.unsubscribeValue.unsubscribe();
  }
}
