import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDetailsCityComponent } from './address-details-city.component';

describe('AddressDetailsCityComponent', () => {
  let component: AddressDetailsCityComponent;
  let fixture: ComponentFixture<AddressDetailsCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressDetailsCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressDetailsCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
