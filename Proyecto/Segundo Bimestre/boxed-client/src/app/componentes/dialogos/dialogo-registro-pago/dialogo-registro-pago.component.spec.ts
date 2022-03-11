import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoRegistroPagoComponent } from './dialogo-registro-pago.component';

describe('DialogoRegistroPagoComponent', () => {
  let component: DialogoRegistroPagoComponent;
  let fixture: ComponentFixture<DialogoRegistroPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoRegistroPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoRegistroPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
