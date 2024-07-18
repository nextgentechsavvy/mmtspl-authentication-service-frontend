import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserIdComponent } from './update-user-id.component';

describe('UpdateUserIdComponent', () => {
  let component: UpdateUserIdComponent;
  let fixture: ComponentFixture<UpdateUserIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
