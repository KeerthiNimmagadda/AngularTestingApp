import { TestBed } from '@angular/core/testing';

import { RestapiiService } from './restapii.service';

describe('RestapiiService', () => {
  let service: RestapiiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestapiiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
