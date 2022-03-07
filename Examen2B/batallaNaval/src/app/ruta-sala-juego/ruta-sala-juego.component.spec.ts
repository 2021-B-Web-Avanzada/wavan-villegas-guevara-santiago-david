import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaSalaJuegoComponent } from './ruta-sala-juego.component';

describe('RutaSalaJuegoComponent', () => {
  let component: RutaSalaJuegoComponent;
  let fixture: ComponentFixture<RutaSalaJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaSalaJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaSalaJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
