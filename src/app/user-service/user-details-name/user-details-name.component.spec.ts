import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsNameComponent } from './user-details-name.component';

describe('UserDetailsNameComponent', () => {
  let component: UserDetailsNameComponent;
  let fixture: ComponentFixture<UserDetailsNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
