import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserListComponent } from './login-user-list.component';

describe('LoginUserListComponent', () => {
  let component: LoginUserListComponent;
  let fixture: ComponentFixture<LoginUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
