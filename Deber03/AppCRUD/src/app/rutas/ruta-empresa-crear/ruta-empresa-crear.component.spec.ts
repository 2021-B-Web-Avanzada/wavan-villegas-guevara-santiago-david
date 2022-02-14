import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEmpresaCrearComponent } from './ruta-empresa-crear.component';

describe('RutaEmpresaCrearComponent', () => {
  let component: RutaEmpresaCrearComponent;
  let fixture: ComponentFixture<RutaEmpresaCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEmpresaCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEmpresaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
