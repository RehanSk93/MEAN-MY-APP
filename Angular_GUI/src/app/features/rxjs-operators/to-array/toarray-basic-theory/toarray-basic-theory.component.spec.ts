import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToarrayBasicTheoryComponent } from './toarray-basic-theory.component';

describe('ToarrayBasicTheoryComponent', () => {
  let component: ToarrayBasicTheoryComponent;
  let fixture: ComponentFixture<ToarrayBasicTheoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToarrayBasicTheoryComponent]
    });
    fixture = TestBed.createComponent(ToarrayBasicTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
