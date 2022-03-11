import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaPesarPaqueteComponent } from './ruta-pesar-paquete.component';

describe('RutaPesarPaqueteComponent', () => {
  let component: RutaPesarPaqueteComponent;
  let fixture: ComponentFixture<RutaPesarPaqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaPesarPaqueteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaPesarPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
