import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaPagosComponent } from './ruta-pagos.component';

describe('RutaPagosComponent', () => {
  let component: RutaPagosComponent;
  let fixture: ComponentFixture<RutaPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaPagosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
