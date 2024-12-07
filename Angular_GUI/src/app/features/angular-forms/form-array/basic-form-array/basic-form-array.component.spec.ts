import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormArrayComponent } from './basic-form-array.component';

describe('BasicFormArrayComponent', () => {
  let component: BasicFormArrayComponent;
  let fixture: ComponentFixture<BasicFormArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicFormArrayComponent]
    });
    fixture = TestBed.createComponent(BasicFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
