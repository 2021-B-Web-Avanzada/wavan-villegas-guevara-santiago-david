import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaVideojuegosComponent } from './ruta-videojuegos.component';

describe('RutaVideojuegosComponent', () => {
  let component: RutaVideojuegosComponent;
  let fixture: ComponentFixture<RutaVideojuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaVideojuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaVideojuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
