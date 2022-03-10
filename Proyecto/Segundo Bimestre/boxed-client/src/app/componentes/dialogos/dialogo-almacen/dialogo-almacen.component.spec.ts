import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoAlmacenComponent } from './dialogo-almacen.component';

describe('DialogoAlmacenComponent', () => {
  let component: DialogoAlmacenComponent;
  let fixture: ComponentFixture<DialogoAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoAlmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
