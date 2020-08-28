import { TestBed } from '@angular/core/testing';

import { HerramientaService } from './herramienta.service';

describe('HerramientaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HerramientaService = TestBed.get(HerramientaService);
    expect(service).toBeTruthy();
  });
});
