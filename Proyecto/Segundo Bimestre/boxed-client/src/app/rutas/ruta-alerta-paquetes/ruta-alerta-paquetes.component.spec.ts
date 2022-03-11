import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAlertaPaquetesComponent } from './ruta-alerta-paquetes.component';

describe('RutaAlertaPaquetesComponent', () => {
  let component: RutaAlertaPaquetesComponent;
  let fixture: ComponentFixture<RutaAlertaPaquetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaAlertaPaquetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAlertaPaquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
