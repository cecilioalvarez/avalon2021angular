import { TestBed } from '@angular/core/testing';

import { LibraryRestService } from './library-rest.service';

describe('LibraryRestService', () => {
  let service: LibraryRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
