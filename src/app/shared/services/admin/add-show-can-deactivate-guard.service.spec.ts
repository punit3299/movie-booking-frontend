import { TestBed } from '@angular/core/testing';

import { AddShowCanDeactivateGuardService } from './add-show-can-deactivate-guard.service';

describe('AddShowCanDeactivateGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddShowCanDeactivateGuardService = TestBed.get(AddShowCanDeactivateGuardService);
    expect(service).toBeTruthy();
  });
});
