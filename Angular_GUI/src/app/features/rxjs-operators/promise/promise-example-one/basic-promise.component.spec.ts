import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPromiseComponent } from './basic-promise.component';

describe('BasicPromiseComponent', () => {
  let component: BasicPromiseComponent;
  let fixture: ComponentFixture<BasicPromiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicPromiseComponent]
    });
    fixture = TestBed.createComponent(BasicPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
