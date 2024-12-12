import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RxjsService {
  private subject = new Subject<string>();

  constructor() {}

  setData(data: string) {
    this.subject.next(data);
  }

  getData() {
    return this.subject.asObservable();
  }
}
