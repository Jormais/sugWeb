import { TestBed } from '@angular/core/testing';

import { EmailService } from './email.service';

describe('Email.Service.TsService', () => {
  let service: EmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
