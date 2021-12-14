"use strict";
exports.__esModule = true;
exports.Empresa = void 0;
var BaseDeDatosMemoria_1 = require("./BaseDeDatosMemoria");
var Empresa = /** @class */ (function () {
    function Empresa(idParametro, nombreParametro, numeroTrabajadoresParametro, fechaDeFundacionParametro, paisParametro, independienteParametro, arregloVideojuegosParametro) {
        this.id = idParametro;
        this.nombre = nombreParametro;
        this.numeroTrabajadores = numeroTrabajadoresParametro;
        this.fechaDeFundacion = fechaDeFundacionParametro;
        this.pais = paisParametro;
        this.independiente = independienteParametro;
        this.arregloVideojuegos = arregloVideojuegosParametro;
    }
    Empresa.prototype.actualizar = function (nombreParametro, numeroTrabajadoresParametro, fechaDeFundacionParametro, paisParametro, independienteParametro) {
        this.nombre = nombreParametro;
        this.numeroTrabajadores = numeroTrabajadoresParametro;
        this.fechaDeFundacion = fechaDeFundacionParametro;
        this.pais = paisParametro;
        this.independiente = independienteParametro;
        BaseDeDatosMemoria_1.BaseDeDatosMemoria.actualizarJson();
    };
    Empresa.prototype.agregarVideojuego = function (videojuego) {
        this.arregloVideojuegos.push(videojuego);
        BaseDeDatosMemoria_1.BaseDeDatosMemoria.actualizarJson();
    };
    Empresa.prototype.eliminarVideojuego = function (indice) {
        this.arregloVideojuegos.splice(indice, 1);
        BaseDeDatosMemoria_1.BaseDeDatosMemoria.actualizarJson();
    };
    Empresa.prototype.toString = function () {
        var valor = "Nombre de la empresa:" + this.nombre +
            "\n Número de trabajadores:" + this.numeroTrabajadores +
            "\n Fecha de fundación:" + this.fechaDeFundacion +
            "\n País:" + this.pais +
            "\n Es idenpendiente?:" + this.independiente +
            "\n Número de videojuegos?:" + this.arregloVideojuegos.length;
        console.log(valor);
        return valor;
    };
    return Empresa;
}());
exports.Empresa = Empresa;
