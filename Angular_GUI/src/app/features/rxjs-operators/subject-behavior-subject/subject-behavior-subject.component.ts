import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject-behavior-subject',
  templateUrl: './subject-behavior-subject.component.html',
  styleUrls: ['./subject-behavior-subject.component.scss']
})
export class SubjectBehaviorSubjectComponent {

    // Create a new Subject
    subject$ = new Subject<number>();

    constructor(){}
  
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

}
