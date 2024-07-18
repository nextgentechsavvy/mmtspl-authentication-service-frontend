import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserDetailsComponent } from './login-user-details.component';

describe('LoginUserDetailsComponent', () => {
  let component: LoginUserDetailsComponent;
  let fixture: ComponentFixture<LoginUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUserDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
