import { TestBed } from '@angular/core/testing';

import { EmailUsService } from './email-us.service';

describe('EmailUsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailUsService = TestBed.get(EmailUsService);
    expect(service).toBeTruthy();
  });
});
