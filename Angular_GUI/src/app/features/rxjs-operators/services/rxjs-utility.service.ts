import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RxjsUtilityService {
  // In RxJS, a Subject is a special type of Observable that allows values to be multicast to multiple Observers.
  // Subjects are like EventEmitters: they maintain a registry of many listeners.
  private subject = new Subject<string>(); // Create a new Subject

  constructor() {}

  setData(data: string) {
    this.subject.next(data);
  }

  getData() {
    return this.subject.asObservable();
  }
}
