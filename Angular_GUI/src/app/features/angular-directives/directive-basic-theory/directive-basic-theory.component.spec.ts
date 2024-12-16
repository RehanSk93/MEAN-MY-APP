import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveBasicTheoryComponent } from './directive-basic-theory.component';

describe('DirectiveBasicTheoryComponent', () => {
  let component: DirectiveBasicTheoryComponent;
  let fixture: ComponentFixture<DirectiveBasicTheoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveBasicTheoryComponent]
    });
    fixture = TestBed.createComponent(DirectiveBasicTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
