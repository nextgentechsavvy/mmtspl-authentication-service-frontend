import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTripIdComponent } from './update-trip-id.component';

describe('UpdateTripIdComponent', () => {
  let component: UpdateTripIdComponent;
  let fixture: ComponentFixture<UpdateTripIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTripIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTripIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
