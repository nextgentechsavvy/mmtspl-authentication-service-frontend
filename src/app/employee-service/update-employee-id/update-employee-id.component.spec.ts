import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeIdComponent } from './update-employee-id.component';

describe('UpdateEmployeeIdComponent', () => {
  let component: UpdateEmployeeIdComponent;
  let fixture: ComponentFixture<UpdateEmployeeIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmployeeIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
