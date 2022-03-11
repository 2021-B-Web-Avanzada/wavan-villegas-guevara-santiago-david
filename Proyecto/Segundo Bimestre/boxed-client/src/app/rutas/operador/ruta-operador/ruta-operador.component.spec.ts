import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaOperadorComponent } from './ruta-operador.component';

describe('RutaOperadorComponent', () => {
  let component: RutaOperadorComponent;
  let fixture: ComponentFixture<RutaOperadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaOperadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
