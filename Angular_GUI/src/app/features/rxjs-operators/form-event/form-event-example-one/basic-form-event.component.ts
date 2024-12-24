import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-basic-form-event',
  templateUrl: './basic-form-event.component.html',
  styleUrls: ['./basic-form-event.component.scss'],
})
export class BasicFormEventComponent implements AfterViewInit {
  @ViewChild('createBtn')
  createbtn!: ElementRef;

  createBtnObs: any;

  ngAfterViewInit() {
    this.buttonClicked();
  }

  buttonClicked() {
    let count = 0;
    this.createBtnObs = fromEvent(
      this.createbtn.nativeElement,
      'click'
    ).subscribe((data) => {
      console.log(data);
      this.showCreatedElement(++count);
    });
  }

  addElement() {}

  showCreatedElement(val: any) {
    let div = document.createElement('li');
    div.innerText = 'Item - ' + val;
    div.className = 'list-group-item';
    document.getElementById('add-new-element')?.appendChild(div);
  }
}
