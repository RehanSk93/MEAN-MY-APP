import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { RxjsUtilityService } from '../../../services/rxjs-utility.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss'],
})
export class ChildTwoComponent {
  message: string = '';
  subscription!: Subscription;

  constructor(private rxjsUtilityService: RxjsUtilityService) {}

  ngOnInit() {
    this.rxjsUtilityService.getData().subscribe((res) => {
      this.message = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
