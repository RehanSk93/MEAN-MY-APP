import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPluckComponent } from './basic-pluck.component';

describe('BasicPluckComponent', () => {
  let component: BasicPluckComponent;
  let fixture: ComponentFixture<BasicPluckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicPluckComponent]
    });
    fixture = TestBed.createComponent(BasicPluckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
