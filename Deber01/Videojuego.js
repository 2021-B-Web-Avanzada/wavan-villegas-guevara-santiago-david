"use strict";
exports.__esModule = true;
exports.Videojuego = void 0;
var BaseDeDatosMemoria_1 = require("./BaseDeDatosMemoria");
var Videojuego = /** @class */ (function () {
    function Videojuego(idParametro, nombreParametro, recaudacionParametro, fechaDeSalidaParametro, generoPrincipalParametro, multijugadorParametro) {
        this.id = idParametro,
            this.nombre = nombreParametro;
        this.recaudacion = recaudacionParametro;
        this.fechaDeSalida = fechaDeSalidaParametro;
        this.generoPrincipal = generoPrincipalParametro;
        this.multijugador = multijugadorParametro;
    }
    Videojuego.prototype.actualizar = function (nombreParametro, recaudacionParametro, fechaDeSalidaParametro, generoPrincipalParametro, multijugadorParametro) {
        this.nombre = nombreParametro;
        this.recaudacion = recaudacionParametro;
        this.fechaDeSalida = fechaDeSalidaParametro;
        this.generoPrincipal = generoPrincipalParametro;
        this.multijugador = multijugadorParametro;
        BaseDeDatosMemoria_1.BaseDeDatosMemoria.actualizarJson();
    };
    return Videojuego;
}());
exports.Videojuego = Videojuego;
