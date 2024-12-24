import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluckBasicTheoryComponent } from './pluck-basic-theory.component';

describe('PluckBasicTheoryComponent', () => {
  let component: PluckBasicTheoryComponent;
  let fixture: ComponentFixture<PluckBasicTheoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PluckBasicTheoryComponent]
    });
    fixture = TestBed.createComponent(PluckBasicTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
