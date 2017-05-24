/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeocodingGoogleService } from './geocoding-google.service';

describe('GeocodingGoogleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeocodingGoogleService]
    });
  });

  it('should ...', inject([GeocodingGoogleService], (service: GeocodingGoogleService) => {
    expect(service).toBeTruthy();
  }));
});
