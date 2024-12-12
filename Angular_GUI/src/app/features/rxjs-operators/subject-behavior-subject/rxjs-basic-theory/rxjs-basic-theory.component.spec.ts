import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsBasicTheoryComponent } from './rxjs-basic-theory.component';

describe('RxjsBasicTheoryComponent', () => {
  let component: RxjsBasicTheoryComponent;
  let fixture: ComponentFixture<RxjsBasicTheoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsBasicTheoryComponent]
    });
    fixture = TestBed.createComponent(RxjsBasicTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
