import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSubjectComponent } from './basic-subject.component';

describe('BasicSubjectComponent', () => {
  let component: BasicSubjectComponent;
  let fixture: ComponentFixture<BasicSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicSubjectComponent]
    });
    fixture = TestBed.createComponent(BasicSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
