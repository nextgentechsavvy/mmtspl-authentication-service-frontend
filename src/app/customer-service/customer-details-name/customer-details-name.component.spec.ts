import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsNameComponent } from './customer-details-name.component';

describe('CustomerDetailsNameComponent', () => {
  let component: CustomerDetailsNameComponent;
  let fixture: ComponentFixture<CustomerDetailsNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDetailsNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDetailsNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
