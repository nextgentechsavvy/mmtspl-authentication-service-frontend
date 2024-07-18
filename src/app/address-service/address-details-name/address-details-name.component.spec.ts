import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDetailsNameComponent } from './address-details-name.component';

describe('AddressDetailsNameComponent', () => {
  let component: AddressDetailsNameComponent;
  let fixture: ComponentFixture<AddressDetailsNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressDetailsNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressDetailsNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
