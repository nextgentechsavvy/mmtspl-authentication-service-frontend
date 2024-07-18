import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsNameComponent } from './employee-details-name.component';

describe('EmployeeDetailsNameComponent', () => {
  let component: EmployeeDetailsNameComponent;
  let fixture: ComponentFixture<EmployeeDetailsNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDetailsNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
