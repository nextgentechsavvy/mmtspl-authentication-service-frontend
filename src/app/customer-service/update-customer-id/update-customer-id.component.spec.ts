import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomerIdComponent } from './update-customer-id.component';

describe('UpdateCustomerIdComponent', () => {
  let component: UpdateCustomerIdComponent;
  let fixture: ComponentFixture<UpdateCustomerIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCustomerIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCustomerIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
