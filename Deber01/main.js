"use strict";
exports.__esModule = true;
var BaseDeDatosMemoria_1 = require("./BaseDeDatosMemoria");
/*const vid1= new Videojuego(
    "Crash",
    245.234,
    "12/10/2021",
    "fps",
    true
);
const vid3= new Videojuego(
    "Crash2",
    245.234,
    "12/10/2021",
    "fps",
    true
);
const vid4= new Videojuego(
    "Crash3",
    245.234,
    "12/10/2021",
    "fps",
    true
);
const emp1=new Empresa(
    "Capcom",
    58,
    "12/12/1999",
    "Rusia",
    false,
    []
);
emp1.agregarVideojuego(vid4);
emp1.agregarVideojuego(vid3);
emp1.agregarVideojuego(vid1);
BaseDeDatosMemoria.agregarEmpresa(emp1);
BaseDeDatosMemoria.agregarEmpresa(emp1);
BaseDeDatosMemoria.agregarEmpresa(emp1);
BaseDeDatosMemoria.agregarEmpresa(emp1);
BaseDeDatosMemoria.agregarEmpresa(emp1);
BaseDeDatosMemoria.agregarEmpresa(emp1);*/
BaseDeDatosMemoria_1.BaseDeDatosMemoria.initAsync().then(function (datosPromesa) {
    console.log(BaseDeDatosMemoria_1.BaseDeDatosMemoria.empresas[0]);
}); //try
