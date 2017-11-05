import { TestBed, inject } from '@angular/core/testing';

import { SearchLanguagesService } from './search-languages.service';

describe('SearchLanguagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchLanguagesService]
    });
  });

  it('should be created', inject([SearchLanguagesService], (service: SearchLanguagesService) => {
    expect(service).toBeTruthy();
  }));
});
