import { TestBed } from '@angular/core/testing';

import { WatersampleService } from './watersample.service';

describe('WatersampleService', () => {
  let service: WatersampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatersampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
