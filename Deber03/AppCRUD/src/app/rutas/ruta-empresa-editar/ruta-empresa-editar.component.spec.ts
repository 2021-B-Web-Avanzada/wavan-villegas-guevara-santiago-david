import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEmpresaEditarComponent } from './ruta-empresa-editar.component';

describe('RutaEmpresaEditarComponent', () => {
  let component: RutaEmpresaEditarComponent;
  let fixture: ComponentFixture<RutaEmpresaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEmpresaEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEmpresaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
