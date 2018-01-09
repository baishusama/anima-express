import { TestBed, inject } from '@angular/core/testing';

import { ResolveGuardService } from './resolve-guard.service';

describe('ResolveGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveGuardService]
    });
  });

  it('should be created', inject([ResolveGuardService], (service: ResolveGuardService) => {
    expect(service).toBeTruthy();
  }));
});
