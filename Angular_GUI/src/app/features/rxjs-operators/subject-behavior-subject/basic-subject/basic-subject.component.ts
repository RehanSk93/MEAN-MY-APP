import { Component } from '@angular/core';
import { RxjsUtilityService } from '../../services/rxjs-utility.service';

@Component({
  selector: 'app-basic-subject',
  templateUrl: './basic-subject.component.html',
  styleUrls: ['./basic-subject.component.scss'],
})
export class BasicSubjectComponent {
  constructor(private rxjsUtilityService: RxjsUtilityService) {}

  onEmitMessage(message: any) {
    if (message.value) {
      console.log('Your message: ', message.value);
      this.rxjsUtilityService.setData(message.value);

    } else {
      alert("A field shouldn't be empty! Enter your message, please!");
      console.log('Please type your message!');
    }
  }
}
