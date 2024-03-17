import { TestBed } from '@angular/core/testing';

import { SoilsampleService } from './soilsample.service';

describe('SoilsampleService', () => {
  let service: SoilsampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoilsampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
