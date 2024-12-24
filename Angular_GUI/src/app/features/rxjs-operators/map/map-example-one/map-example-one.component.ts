import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription, toArray } from 'rxjs';

@Component({
  selector: 'app-map-example-one',
  templateUrl: './map-example-one.component.html',
  styleUrls: ['./map-example-one.component.scss'],
})
export class MapExampleOneComponent implements OnInit {
  // Set Interval Observable
  interval$ = interval(1000);

  // Show video list
  videoLists: any;

  // Un-Subscription
  unSubscription!: Subscription;

  constructor() {}

  ngOnInit(): void {}

  broadCustVideo() {
    this.unSubscription = this.interval$
      .pipe(
        map((videoList) => {
          return 'Video - ' + videoList;
        })
      )
      .subscribe((res) => {
        console.log('result', res);
        this.videoLists = res;
      });

    setTimeout(() => {
      this.unSubscription.unsubscribe();
    }, 10000);
  }
}
