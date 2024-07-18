import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDetailsNameComponent } from './department-details-name.component';

describe('DepartmentDetailsNameComponent', () => {
  let component: DepartmentDetailsNameComponent;
  let fixture: ComponentFixture<DepartmentDetailsNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentDetailsNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentDetailsNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
