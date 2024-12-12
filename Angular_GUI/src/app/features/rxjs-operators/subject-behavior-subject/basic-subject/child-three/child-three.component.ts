import { Component } from '@angular/core';
import { RxjsUtilityService } from '../../../services/rxjs-utility.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.scss'],
})
export class ChildThreeComponent {
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
