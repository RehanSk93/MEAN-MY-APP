import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBehaviorSubjectComponent } from './subject-behavior-subject.component';

describe('SubjectBehaviorSubjectComponent', () => {
  let component: SubjectBehaviorSubjectComponent;
  let fixture: ComponentFixture<SubjectBehaviorSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectBehaviorSubjectComponent]
    });
    fixture = TestBed.createComponent(SubjectBehaviorSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
