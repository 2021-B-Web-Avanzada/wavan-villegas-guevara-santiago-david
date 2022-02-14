import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEmpresasComponent } from './ruta-empresas.component';

describe('RutaEmpresasComponent', () => {
  let component: RutaEmpresasComponent;
  let fixture: ComponentFixture<RutaEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
