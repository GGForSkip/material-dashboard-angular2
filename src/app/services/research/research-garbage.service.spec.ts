import { TestBed } from '@angular/core/testing';

import { ResearchGarbageService } from './research-garbage.service';

describe('ResearchGarbageService', () => {
  let service: ResearchGarbageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResearchGarbageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
