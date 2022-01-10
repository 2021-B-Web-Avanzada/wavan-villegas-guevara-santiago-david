import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-catalogo-juegos',
  templateUrl: './catalogo-juegos.component.html',
  styleUrls: ['./catalogo-juegos.component.scss']
})
export class CatalogoJuegosComponent implements OnInit {
  @Input()
  id=2;
  @Input()
  nombre='Dying Light 2 Stay Human';
  @Input()
  precio=68.00;
  @Input()
  descuento=31;
  @Input()
  plataforma='steam';
  @Input()
  imagen="assets/imgs/dyin-light.jpg"
  @Input()
  tamanio="itemS"

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  ejecutarEventoClick(){
    window.location.href="comprar/"+this.id.toString();
  }

}
