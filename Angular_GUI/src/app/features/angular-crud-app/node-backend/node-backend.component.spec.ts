import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeBackendComponent } from './node-backend.component';

describe('NodeBackendComponent', () => {
  let component: NodeBackendComponent;
  let fixture: ComponentFixture<NodeBackendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodeBackendComponent]
    });
    fixture = TestBed.createComponent(NodeBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
