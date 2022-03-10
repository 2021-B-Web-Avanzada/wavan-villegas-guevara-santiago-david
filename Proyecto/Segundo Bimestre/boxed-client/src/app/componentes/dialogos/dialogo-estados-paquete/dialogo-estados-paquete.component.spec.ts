import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoEstadosPaqueteComponent } from './dialogo-estados-paquete.component';

describe('DialogoEstadosPaqueteComponent', () => {
  let component: DialogoEstadosPaqueteComponent;
  let fixture: ComponentFixture<DialogoEstadosPaqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoEstadosPaqueteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoEstadosPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
