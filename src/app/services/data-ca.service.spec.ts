import { TestBed, inject } from '@angular/core/testing';

import { DataCaService } from './data-ca.service';

describe('DataCaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataCaService]
    });
  });

  it('should be created', inject([DataCaService], (service: DataCaService) => {
    expect(service).toBeTruthy();
  }));
});
