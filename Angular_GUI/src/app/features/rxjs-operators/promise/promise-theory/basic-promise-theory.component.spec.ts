import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPromiseTheoryComponent } from './basic-promise-theory.component';

describe('BasicPromiseTheoryComponent', () => {
  let component: BasicPromiseTheoryComponent;
  let fixture: ComponentFixture<BasicPromiseTheoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicPromiseTheoryComponent]
    });
    fixture = TestBed.createComponent(BasicPromiseTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
