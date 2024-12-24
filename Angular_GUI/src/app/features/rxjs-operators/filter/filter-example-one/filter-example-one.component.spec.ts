import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterExampleOneComponent } from './filter-example-one.component';

describe('FilterExampleOneComponent', () => {
  let component: FilterExampleOneComponent;
  let fixture: ComponentFixture<FilterExampleOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterExampleOneComponent]
    });
    fixture = TestBed.createComponent(FilterExampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
