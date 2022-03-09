import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaPaquetesComponent } from './ruta-paquetes.component';

describe('RutaPaquetesComponent', () => {
  let component: RutaPaquetesComponent;
  let fixture: ComponentFixture<RutaPaquetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaPaquetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaPaquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
