import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTheoryComponent } from './filter-theory.component';

describe('FilterTheoryComponent', () => {
  let component: FilterTheoryComponent;
  let fixture: ComponentFixture<FilterTheoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterTheoryComponent]
    });
    fixture = TestBed.createComponent(FilterTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
