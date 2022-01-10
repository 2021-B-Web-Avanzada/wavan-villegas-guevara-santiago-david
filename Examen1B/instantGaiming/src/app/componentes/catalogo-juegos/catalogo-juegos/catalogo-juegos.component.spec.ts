import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoJuegosComponent } from './catalogo-juegos.component';

describe('CatalogoJuegosComponent', () => {
  let component: CatalogoJuegosComponent;
  let fixture: ComponentFixture<CatalogoJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoJuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
