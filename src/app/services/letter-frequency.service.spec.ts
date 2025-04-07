import { TestBed } from '@angular/core/testing';

import { LetterFrequencyService } from './letter-frequency.service';

describe('LetterFrequencyService', () => {
  let service: LetterFrequencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LetterFrequencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
