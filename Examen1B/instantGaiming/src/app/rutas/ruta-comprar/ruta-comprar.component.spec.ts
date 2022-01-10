import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaComprarComponent } from './ruta-comprar.component';

describe('RutaComprarComponent', () => {
  let component: RutaComprarComponent;
  let fixture: ComponentFixture<RutaComprarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaComprarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaComprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
