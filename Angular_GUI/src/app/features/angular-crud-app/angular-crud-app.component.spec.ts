import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCrudAppComponent } from './angular-crud-app.component';

describe('AngularCrudAppComponent', () => {
  let component: AngularCrudAppComponent;
  let fixture: ComponentFixture<AngularCrudAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularCrudAppComponent]
    });
    fixture = TestBed.createComponent(AngularCrudAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
