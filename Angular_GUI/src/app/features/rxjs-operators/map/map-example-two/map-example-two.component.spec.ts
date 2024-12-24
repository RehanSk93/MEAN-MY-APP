import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapExampleTwoComponent } from './map-example-two.component';

describe('MapExampleTwoComponent', () => {
  let component: MapExampleTwoComponent;
  let fixture: ComponentFixture<MapExampleTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapExampleTwoComponent]
    });
    fixture = TestBed.createComponent(MapExampleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
