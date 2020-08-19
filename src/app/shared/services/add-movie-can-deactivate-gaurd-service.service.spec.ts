import { TestBed } from '@angular/core/testing';

import { AddMovieCanDeactivateGaurdServiceService } from './add-movie-can-deactivate-gaurd-service.service';

describe('AddMovieCanDeactivateGaurdServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddMovieCanDeactivateGaurdServiceService = TestBed.get(AddMovieCanDeactivateGaurdServiceService);
    expect(service).toBeTruthy();
  });
});
