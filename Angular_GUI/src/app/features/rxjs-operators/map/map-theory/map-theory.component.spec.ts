import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTheoryComponent } from './map-theory.component';

describe('MapTheoryComponent', () => {
  let component: MapTheoryComponent;
  let fixture: ComponentFixture<MapTheoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapTheoryComponent]
    });
    fixture = TestBed.createComponent(MapTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
