import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToarrayBasicComponent } from './toarray-basic.component';

describe('ToarrayBasicComponent', () => {
  let component: ToarrayBasicComponent;
  let fixture: ComponentFixture<ToarrayBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToarrayBasicComponent]
    });
    fixture = TestBed.createComponent(ToarrayBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
