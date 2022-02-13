import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaVideojuegoEditarComponent } from './ruta-videojuego-editar.component';

describe('RutaVideojuegoEditarComponent', () => {
  let component: RutaVideojuegoEditarComponent;
  let fixture: ComponentFixture<RutaVideojuegoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaVideojuegoEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaVideojuegoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
