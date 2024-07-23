import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCompleteDetailsListComponent } from './employee-complete-details-list.component';

describe('EmployeeCompleteDetailsListComponent', () => {
  let component: EmployeeCompleteDetailsListComponent;
  let fixture: ComponentFixture<EmployeeCompleteDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCompleteDetailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCompleteDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
