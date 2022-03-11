import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoCambiarEstadoComponent } from './dialogo-cambiar-estado.component';

describe('DialogoCambiarEstadoComponent', () => {
  let component: DialogoCambiarEstadoComponent;
  let fixture: ComponentFixture<DialogoCambiarEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoCambiarEstadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoCambiarEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
