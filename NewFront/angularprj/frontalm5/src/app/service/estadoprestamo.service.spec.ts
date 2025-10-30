import { TestBed } from '@angular/core/testing';

import { EstadoprestamoService } from './estadoprestamo.service';

describe('EstadoprestamoService', () => {
  let service: EstadoprestamoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoprestamoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
