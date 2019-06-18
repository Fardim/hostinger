import { TestBed } from '@angular/core/testing';

import { TeileService } from './teile.service';

describe('TeileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeileService = TestBed.get(TeileService);
    expect(service).toBeTruthy();
  });
});
