import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEjemploComponent } from './ruta-ejemplo.component';

describe('RutaEjemploComponent', () => {
  let component: RutaEjemploComponent;
  let fixture: ComponentFixture<RutaEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEjemploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
