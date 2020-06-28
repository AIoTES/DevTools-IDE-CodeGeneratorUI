import { TestBed } from '@angular/core/testing';

import { FileNavigatorService } from './file-navigator.service';

describe('FileNavigatorService', () => {
  let service: FileNavigatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileNavigatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
