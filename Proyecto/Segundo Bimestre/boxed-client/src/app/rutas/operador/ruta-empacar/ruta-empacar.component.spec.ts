import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEmpacarComponent } from './ruta-empacar.component';

describe('RutaEmpacarComponent', () => {
  let component: RutaEmpacarComponent;
  let fixture: ComponentFixture<RutaEmpacarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEmpacarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEmpacarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
