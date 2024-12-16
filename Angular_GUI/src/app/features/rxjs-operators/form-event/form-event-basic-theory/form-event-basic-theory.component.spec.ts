import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEventBasicTheoryComponent } from './form-event-basic-theory.component';

describe('FormEventBasicTheoryComponent', () => {
  let component: FormEventBasicTheoryComponent;
  let fixture: ComponentFixture<FormEventBasicTheoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEventBasicTheoryComponent]
    });
    fixture = TestBed.createComponent(FormEventBasicTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
