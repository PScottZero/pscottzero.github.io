import { TestBed } from '@angular/core/testing';

import { PageStateService } from './pageState.service';

describe('PageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageStateService = TestBed.get(PageStateService);
    expect(service).toBeTruthy();
  });
});
