import { Component, OnInit } from '@angular/core';
import {
  filter,
  first,
  from,
  interval,
  of,
  Subject,
  takeUntil,
  timer,
} from 'rxjs';
import { RxjsService } from './services/rxjs.service';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss'],
})
export class RxjsOperatorsComponent implements OnInit {
  arr1 = [1, 2, 3, 4, 5];
  arr2 = ['a', 'b', 'c', 'd', 'e'];

  username$: string = '';

  constructor(private rxjsService: RxjsService) {}

  ngOnInit() {
    // this.getObservableData(from(this.myObservable4));
    // this.getObservableData(from(this.myObservable4));
    // this.evenNumber$.subscribe((val) => console.log(val));
    // this.firstValue$.subscribe((val) => console.log(val));
    // this.firstEven$.subscribe((val) => console.log(val));
    // this.myObservable7$.subscribe((val) => console.log(val));
    // this.myObservable8$.subscribe((val) => console.log(val));
    // this.myObservable9$.subscribe((val) => console.log(val));
    // this.callSubject();

    this.rxjsService.getData().subscribe((res) => {
      this.username$ = res;
    });
  }

  sendUsername(user: any) {
    console.log(user.value);
    this.rxjsService.setData(user.value);
  }
  // ------------------------------------------------------------------------------

  // In RxJS, a Subject is a special type of Observable that allows values to be multicast to multiple Observers.
  // Subjects are like EventEmitters: they maintain a registry of many listeners.

  // Create a new Subject
  subject$ = new Subject<number>();

  callSubject() {
    // Subscribe to the Subject
    this.subject$.subscribe({
      next: (value) => console.log(`Observer 1: ${value}`),
    });

    // Another subscription to the Subject
    this.subject$.subscribe({
      next: (value) => console.log(`Observer 2: ${value}`),
    });

    this.subject$.next(1);
    this.subject$.next(2);
    this.subject$.next(3);
  }

  // ------------------------------------------------------------------------------

  // 'of' -> The of operator creates an observable that emits the given values in sequence.
  myObservable1 = of(this.arr1, this.arr2, 23, 44, 'rehan sk', true);

  // ------------------------------------------------------------------------------

  // 'from' -> We'll use the from operator to convert an array of data into an observable stream and process it.
  myObservable2 = from(this.arr1);
  myObservable3 = from('435468725');

  // ------------------------------------------------------------------------------

  // We can transform promiss to Observable by using 'form' Operator
  myObservable4 = new Promise((resolve, reject) => {
    resolve([23, 36, 67, 36, 43]);
  });

  // ------------------------------------------------------------------------------

  // The filter() operator in RxJS is used to filter items emitted by an observable based on a provided predicate function.
  // It only emits those values that satisfy the predicate.
  myObservable5$ = of(1, 2, 3, 4, 5, 6, 7, 8);
  evenNumber$ = this.myObservable5$.pipe(
    filter((val) => {
      return val % 3 === 0;
    })
  );

  // ------------------------------------------------------------------------------

  // The first() operator in RxJS is used to emit only the first value from an observable that matches an optional predicate function.
  // If no predicate function is provided,
  // it simply emits the first value from the observable and then completes.
  myObservable6$ = of(1, 2, 3, 4, 5, 6, 7, 8);

  // Use the first operator to get the first value emitted by the observable
  firstValue$ = this.myObservable6$.pipe(first());

  // Use the first operator with a predicate to get the first even number
  firstEven$ = this.myObservable6$.pipe(first((val) => val % 2 === 0));

  // ------------------------------------------------------------------------------

  // Create an observable that emits a value every second
  myObservable7$ = interval(1000);

  // Create a notifier observable that emits a value after 5 seconds
  myObservable8$ = timer(5000);

  // ------------------------------------------------------------------------------

  // Use the takeUntil operator to emit values from the source$ until notifier$ emits a value
  myObservable9$ = this.myObservable7$.pipe(takeUntil(this.myObservable8$));

  getObservableData(val: any) {
    val.subscribe((res: any) => {
      console.log('Output - ', res);
    });
  }
}
