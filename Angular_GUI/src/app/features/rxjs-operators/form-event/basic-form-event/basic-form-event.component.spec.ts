import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormEventComponent } from './basic-form-event.component';

describe('BasicFormEventComponent', () => {
  let component: BasicFormEventComponent;
  let fixture: ComponentFixture<BasicFormEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicFormEventComponent]
    });
    fixture = TestBed.createComponent(BasicFormEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
