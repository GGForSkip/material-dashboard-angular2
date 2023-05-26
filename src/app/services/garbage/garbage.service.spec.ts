import { TestBed } from '@angular/core/testing';

import { GarbageService } from './garbage.service';

describe('GarbageService', () => {
  let service: GarbageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GarbageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
