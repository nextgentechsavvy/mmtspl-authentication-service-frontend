import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripDetailsTypeComponent } from './trip-details-type.component';

describe('TripDetailsTypeComponent', () => {
  let component: TripDetailsTypeComponent;
  let fixture: ComponentFixture<TripDetailsTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripDetailsTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripDetailsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
