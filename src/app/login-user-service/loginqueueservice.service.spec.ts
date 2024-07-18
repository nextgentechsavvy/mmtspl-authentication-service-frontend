import { TestBed } from '@angular/core/testing';

import { LoginqueueserviceService } from './loginqueueservice.service';

describe('LoginqueueserviceService', () => {
  let service: LoginqueueserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginqueueserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
