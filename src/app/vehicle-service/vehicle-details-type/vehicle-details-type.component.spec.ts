import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailsTypeComponent } from './vehicle-details-type.component';

describe('VehicleDetailsTypeComponent', () => {
  let component: VehicleDetailsTypeComponent;
  let fixture: ComponentFixture<VehicleDetailsTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDetailsTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDetailsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
