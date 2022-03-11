import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaPaquetesSalidaComponent } from './ruta-paquetes-salida.component';

describe('RutaPaquetesSalidaComponent', () => {
  let component: RutaPaquetesSalidaComponent;
  let fixture: ComponentFixture<RutaPaquetesSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaPaquetesSalidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaPaquetesSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
