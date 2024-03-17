import { TestBed } from '@angular/core/testing';

import { AirsampleService } from './airsample.service';

describe('AirsampleService', () => {
  let service: AirsampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirsampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
