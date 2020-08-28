import { TestBed } from '@angular/core/testing';

import { GrupoTrabajoService } from './grupo-trabajo.service';

describe('GrupoTrabajoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrupoTrabajoService = TestBed.get(GrupoTrabajoService);
    expect(service).toBeTruthy();
  });
});
