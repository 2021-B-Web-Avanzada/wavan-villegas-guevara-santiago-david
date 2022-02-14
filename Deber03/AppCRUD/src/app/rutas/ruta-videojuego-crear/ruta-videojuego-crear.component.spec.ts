import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaVideojuegoCrearComponent } from './ruta-videojuego-crear.component';

describe('RutaVideojuegoCrearComponent', () => {
  let component: RutaVideojuegoCrearComponent;
  let fixture: ComponentFixture<RutaVideojuegoCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaVideojuegoCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaVideojuegoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
