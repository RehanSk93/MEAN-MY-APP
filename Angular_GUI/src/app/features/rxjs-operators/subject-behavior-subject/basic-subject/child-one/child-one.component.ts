import { Component, OnDestroy, OnInit } from '@angular/core';
import { RxjsUtilityService } from '../../../services/rxjs-utility.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss'],
})
export class ChildOneComponent implements OnInit, OnDestroy {
  message: string = '';
  subscription!: Subscription;

  constructor(private rxjsUtilityService: RxjsUtilityService) {}

  ngOnInit() {
    this.rxjsUtilityService.getData().subscribe((res) => (this.message = res));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
