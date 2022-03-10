import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoPesarComponent } from './dialogo-pesar.component';

describe('DialogoPesarComponent', () => {
  let component: DialogoPesarComponent;
  let fixture: ComponentFixture<DialogoPesarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoPesarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoPesarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
