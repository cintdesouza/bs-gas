import { TestBed } from '@angular/core/testing';

import { BsGasService } from './bs-gas.service';

describe('BsGasService', () => {
  let service: BsGasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BsGasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
