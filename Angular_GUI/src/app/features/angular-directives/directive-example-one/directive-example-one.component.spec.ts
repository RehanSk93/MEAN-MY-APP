import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveExampleOneComponent } from './directive-example-one.component';

describe('DirectiveExampleOneComponent', () => {
  let component: DirectiveExampleOneComponent;
  let fixture: ComponentFixture<DirectiveExampleOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveExampleOneComponent]
    });
    fixture = TestBed.createComponent(DirectiveExampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
