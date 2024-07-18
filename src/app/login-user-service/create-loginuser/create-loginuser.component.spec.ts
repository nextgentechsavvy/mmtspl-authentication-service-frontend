import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoginuserComponent } from './create-loginuser.component';

describe('CreateLoginuserComponent', () => {
  let component: CreateLoginuserComponent;
  let fixture: ComponentFixture<CreateLoginuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLoginuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLoginuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
