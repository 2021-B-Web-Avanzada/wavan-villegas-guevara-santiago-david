import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @Input() name: string;
  @Input()
  textoBoton ='CREAR';
  @Input()
  textoPrecio='Costo Total';
  @Input()
  textoValorPrecio='$1.076,72';
  @Input()
  colorBoton='#000000';
  @Input()
  colorTexto='#FFFFFF';
  @Input()
  colorFondo='#F6F5F6';
  date3: any;

  constructor() {}

}
