import { TestBed, inject } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService]
    });
  });

  it('should be created', inject([StorageService], (service: StorageService) => {
    expect(service).toBeTruthy();
  }));

  it('should be possible to save and get data', inject([StorageService], (service: StorageService) => {
    const key = '123';
    const data = {value: 123};

    // Store data
    service.save(key, data);

    expect(service.get(key)).toEqual(data);
  }));

  it('get missing key', inject([StorageService], (service: StorageService) => {
    const key = '1234';

    expect(service.get(key)).toEqual(null);
  }));
});
