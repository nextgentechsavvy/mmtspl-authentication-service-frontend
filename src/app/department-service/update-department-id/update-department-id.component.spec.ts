import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDepartmentIdComponent } from './update-department-id.component';

describe('UpdateDepartmentIdComponent', () => {
  let component: UpdateDepartmentIdComponent;
  let fixture: ComponentFixture<UpdateDepartmentIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDepartmentIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDepartmentIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
