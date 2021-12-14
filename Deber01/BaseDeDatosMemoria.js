"use strict";
exports.__esModule = true;
exports.BaseDeDatosMemoria = void 0;
var BaseDeDatosMemoria = /** @class */ (function () {
    function BaseDeDatosMemoria() {
    }
    BaseDeDatosMemoria.init = function () {
        var _this = this;
        var promesaLectura = new Promise(function (resolve, reject) {
            _this.fs.readFile(_this.ruta, 'utf-8', function (error, contenido) {
                if (error) {
                    reject('Error lectura');
                }
                else {
                    resolve(contenido);
                }
            });
        });
        return promesaLectura;
    };
    BaseDeDatosMemoria.actualizarJson = function () {
        var _this = this;
        var promesaEscritura = new Promise(function (resolve, reject) {
            _this.fs.writeFile(_this.ruta, JSON.stringify(_this.empresas), 'utf-8', function (errorEscritura) {
                if (errorEscritura) {
                    reject('Error escritura');
                }
                else {
                    resolve("Todo bien");
                }
            });
        });
        return promesaEscritura;
    };
    BaseDeDatosMemoria.eliminarEmpresa = function (indice) {
        this.empresas.splice(indice, 1);
        this.actualizarJson();
    };
    BaseDeDatosMemoria.agregarEmpresa = function (empresa) {
        this.empresas.push(empresa);
        this.actualizarJson();
    };
    BaseDeDatosMemoria.ruta = "./empresaJuego.json";
    BaseDeDatosMemoria.empresas = [];
    BaseDeDatosMemoria.fs = require('fs');
    return BaseDeDatosMemoria;
}());
exports.BaseDeDatosMemoria = BaseDeDatosMemoria;
