import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAddressIdComponent } from './update-address-id.component';

describe('UpdateAddressIdComponent', () => {
  let component: UpdateAddressIdComponent;
  let fixture: ComponentFixture<UpdateAddressIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAddressIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAddressIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
