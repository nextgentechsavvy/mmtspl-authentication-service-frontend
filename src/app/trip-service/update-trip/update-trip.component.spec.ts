import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTripComponent } from './update-trip.component';

describe('UpdateTripComponent', () => {
  let component: UpdateTripComponent;
  let fixture: ComponentFixture<UpdateTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
