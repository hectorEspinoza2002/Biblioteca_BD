import { TestBed } from '@angular/core/testing';

import { LibroautorService } from './libroautor.service';

describe('LibroautorService', () => {
  let service: LibroautorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibroautorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
