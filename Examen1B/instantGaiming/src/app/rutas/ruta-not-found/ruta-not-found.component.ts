import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ruta-not-found',
  templateUrl: './ruta-not-found.component.html',
  styleUrls: ['./ruta-not-found.component.scss']
})
export class RutaNotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  ejecutarEventoClick(){
    this.router.navigate(["home"]);

  }

}
