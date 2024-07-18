import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVehicleIdComponent } from './update-vehicle-id.component';

describe('UpdateVehicleIdComponent', () => {
  let component: UpdateVehicleIdComponent;
  let fixture: ComponentFixture<UpdateVehicleIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVehicleIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVehicleIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
