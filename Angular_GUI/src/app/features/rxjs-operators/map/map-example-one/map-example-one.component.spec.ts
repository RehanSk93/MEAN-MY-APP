import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapExampleOneComponent } from './map-example-one.component';

describe('MapExampleOneComponent', () => {
  let component: MapExampleOneComponent;
  let fixture: ComponentFixture<MapExampleOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapExampleOneComponent]
    });
    fixture = TestBed.createComponent(MapExampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
