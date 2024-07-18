import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserUpdateIdComponent } from './login-user-update-id.component';

describe('LoginUserUpdateIdComponent', () => {
  let component: LoginUserUpdateIdComponent;
  let fixture: ComponentFixture<LoginUserUpdateIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUserUpdateIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginUserUpdateIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
