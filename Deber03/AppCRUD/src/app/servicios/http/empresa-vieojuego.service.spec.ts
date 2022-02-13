import { TestBed } from '@angular/core/testing';

import { EmpresaVieojuegoService } from './empresa-vieojuego.service';

describe('EmpresaVieojuegoService', () => {
  let service: EmpresaVieojuegoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpresaVieojuegoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
