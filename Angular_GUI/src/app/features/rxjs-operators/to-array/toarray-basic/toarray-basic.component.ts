import { Component, OnInit } from '@angular/core';
import { interval, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-toarray-basic',
  templateUrl: './toarray-basic.component.html',
  styleUrls: ['./toarray-basic.component.scss'],
})
export class ToarrayBasicComponent implements OnInit {
  counterValue: Number[] = [];
  source$ = interval(1000);
  sourceSub!: Subscription;

  ngOnInit(): void {
    this.sourceSub = this.source$.pipe(take(10), toArray()).subscribe((res) => {
      console.log(res);
      this.counterValue.push(...res); // Push all elements into counterValue array
    });
  }

  ngOnDestroy(): void {
    if (this.sourceSub) {
      this.sourceSub.unsubscribe(); // Clean up subscription
    }
  }
}
