import { TestBed } from '@angular/core/testing';

import { ComServicService } from './com-servic.service';

describe('ComServicService', () => {
  let service: ComServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
