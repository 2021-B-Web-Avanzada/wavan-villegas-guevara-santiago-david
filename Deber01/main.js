"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Videojuego_1 = require("./Videojuego");
var Empresa_1 = require("./Empresa");
var BaseDeDatosMemoria_1 = require("./BaseDeDatosMemoria");
var inquirer = require('inquirer');
function crearEmpresaMain() {
    return __awaiter(this, void 0, void 0, function () {
        var datosEmpresa, idenpendiente;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Datos de la empresa a crear");
                    return [4 /*yield*/, inquirer.prompt([
                            {
                                type: 'input',
                                name: 'nombre',
                                message: 'Ingrese el nombre de la empresa'
                            },
                            {
                                type: 'input',
                                name: 'fechaDeFundacion',
                                message: 'Ingrese la fecha de fundación de la empresa'
                            },
                            {
                                type: 'number',
                                name: 'numeroTrabajadores',
                                message: 'Ingrese el número de trabajores'
                            },
                            {
                                type: 'input',
                                name: 'pais',
                                message: 'Ingrese el país de la empresa'
                            },
                            {
                                type: 'list',
                                name: 'independiente',
                                message: 'Es idependiente la empresa?',
                                choices: ["Si", "No"]
                            }
                        ])];
                case 1:
                    datosEmpresa = _a.sent();
                    idenpendiente = true;
                    if (datosEmpresa.independiente === "No") {
                        idenpendiente = false;
                    }
                    BaseDeDatosMemoria_1.BaseDeDatosMemoria.agregarEmpresa(new Empresa_1.Empresa("111", datosEmpresa.nombre, datosEmpresa.numeroTrabajadores, datosEmpresa.fechaDeFundacion, datosEmpresa.pais, idenpendiente, []));
                    return [2 /*return*/];
            }
        });
    });
}
function editarEmpresaMain(indiceEmpresa) {
    return __awaiter(this, void 0, void 0, function () {
        var datosEmpresaNuevos, idenpendienteNuevo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Datos nuevos de la empresa a crear");
                    return [4 /*yield*/, inquirer.prompt([
                            {
                                type: 'input',
                                name: 'nombre',
                                message: 'Ingrese el nuevo nombre de la empresa'
                            },
                            {
                                type: 'input',
                                name: 'fechaDeFundacion',
                                message: 'Ingrese la nueva fecha de fundación de la empresa'
                            },
                            {
                                type: 'number',
                                name: 'numeroTrabajadores',
                                message: 'Ingrese el nuevo número de trabajores'
                            },
                            {
                                type: 'input',
                                name: 'pais',
                                message: 'Ingrese el nuevo país de la empresa'
                            },
                            {
                                type: 'list',
                                name: 'independiente',
                                message: 'Es idependiente la empresa?',
                                choices: ["Si", "No"]
                            }
                        ])];
                case 1:
                    datosEmpresaNuevos = _a.sent();
                    idenpendienteNuevo = true;
                    if (datosEmpresaNuevos.independiente === "No") {
                        idenpendienteNuevo = false;
                    }
                    BaseDeDatosMemoria_1.BaseDeDatosMemoria.empresas[indiceEmpresa].actualizar(datosEmpresaNuevos.nombre, datosEmpresaNuevos.numeroTrabajadores, datosEmpresaNuevos.fechaDeFundacion, datosEmpresaNuevos.pais, idenpendienteNuevo);
                    return [2 /*return*/];
            }
        });
    });
}
function crearVideojuegoMain(indiceEmpresa) {
    return __awaiter(this, void 0, void 0, function () {
        var datosVideojuego, multijugador;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Datos del videojuego a crear");
                    return [4 /*yield*/, inquirer.prompt([
                            {
                                type: 'input',
                                name: 'nombre',
                                message: 'Ingrese el nombre del videojuego'
                            },
                            {
                                type: 'input',
                                name: 'fechaDeSalida',
                                message: 'Ingrese la fecha de salida del videojuego'
                            },
                            {
                                type: 'number',
                                name: 'recaudacion',
                                message: 'Ingrese la recuadación del juego'
                            },
                            {
                                type: 'input',
                                name: 'generoPrincipal ',
                                message: 'Ingrese el genero principal del juego'
                            },
                            {
                                type: 'list',
                                name: 'multijugador',
                                message: 'Tiene multijugador?',
                                choices: ["Si", "No"]
                            }
                        ])];
                case 1:
                    datosVideojuego = _a.sent();
                    multijugador = true;
                    if (datosVideojuego.independiente === "No") {
                        multijugador = false;
                    }
                    BaseDeDatosMemoria_1.BaseDeDatosMemoria.empresas[indiceEmpresa].agregarVideojuego(new Videojuego_1.Videojuego("111", datosVideojuego.nombre, datosVideojuego.recaudacion, datosVideojuego.fechaDeSalida, datosVideojuego.generoPrincipal, multijugador));
                    return [2 /*return*/];
            }
        });
    });
}
function mainAsync() {
    return __awaiter(this, void 0, void 0, function () {
        var datos, banderaListaEmpresas, respuestaBanderaListaEmpresa, _a, indiceEmpresa, banderaSeleccionEmpresa, respuestabanderaSeleccionEmpresa, _b, banderaListaVideojuegos, respuestaBanderaListaVideojuego, _c, error_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 29, , 30]);
                    return [4 /*yield*/, BaseDeDatosMemoria_1.BaseDeDatosMemoria.init()];
                case 1:
                    datos = _d.sent();
                    if (typeof datos === "string") {
                        BaseDeDatosMemoria_1.BaseDeDatosMemoria.empresas = JSON.parse(datos);
                    }
                    banderaListaEmpresas = true;
                    _d.label = 2;
                case 2:
                    if (!banderaListaEmpresas) return [3 /*break*/, 28];
                    console.log("Operaciones CRUD empresa desarrolladora-videojuego");
                    console.log("Lista de empresas");
                    console.table(BaseDeDatosMemoria_1.BaseDeDatosMemoria.empresas, ["nombre", "fechaDeFundacion", "numeroTrabajadores", "pais", "independiente"]);
                    return [4 /*yield*/, inquirer.prompt([
                            {
                                type: 'number',
                                name: 'seleccion',
                                message: "Opciones disponibles \n" +
                                    "Para salir ingrese: -2 \n" +
                                    "Para crear una empresa ingrese: -1 \n" +
                                    "Para seleccionar una empresa, ingrese el número de empresa (index)"
                            }
                        ])];
                case 3:
                    respuestaBanderaListaEmpresa = _d.sent();
                    _a = respuestaBanderaListaEmpresa.seleccion;
                    switch (_a) {
                        case -2: return [3 /*break*/, 4];
                        case -1: return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 7];
                case 4:
                    banderaListaEmpresas = false;
                    return [3 /*break*/, 27];
                case 5: return [4 /*yield*/, crearEmpresaMain()];
                case 6:
                    _d.sent();
                    return [3 /*break*/, 27];
                case 7:
                    indiceEmpresa = respuestaBanderaListaEmpresa.seleccion;
                    banderaSeleccionEmpresa = true;
                    if (!(BaseDeDatosMemoria_1.BaseDeDatosMemoria.empresas.length > 0
                        && indiceEmpresa >= 0
                        && indiceEmpresa < BaseDeDatosMemoria_1.BaseDeDatosMemoria.empresas.length)) return [3 /*break*/, 26];
                    _d.label = 8;
                case 8:
                    if (!banderaSeleccionEmpresa) return [3 /*break*/, 25];
                    console.log("Empresa seleccionada");
                    console.table([BaseDeDatosMemoria_1.BaseDeDatosMemoria.empresas[indiceEmpresa],], ["nombre", "fechaDeFundacion", "numeroTrabajadores", "pais", "independiente"]);
                    return [4 /*yield*/, inquirer.prompt([
                            {
                                type: 'list',
                                name: 'seleccion',
                                message: "Opciones disponibles: \n",
                                choices: ["Eliminar Empresa", "Editar Empresa", "Ver videojuegos", "Regresar"]
                            }
                        ])];
                case 9:
                    respuestabanderaSeleccionEmpresa = _d.sent();
                    _b = respuestabanderaSeleccionEmpresa.seleccion;
                    switch (_b) {
                        case "Eliminar Empresa": return [3 /*break*/, 10];
                        case "Editar Empresa": return [3 /*break*/, 11];
                        case "Ver videojuegos": return [3 /*break*/, 13];
                        case "Regresar": return [3 /*break*/, 22];
                    }
                    return [3 /*break*/, 23];
                case 10:
                    BaseDeDatosMemoria_1.BaseDeDatosMemoria.eliminarEmpresa(indiceEmpresa);
                    banderaSeleccionEmpresa = false;
                    console.log("Empresa eliminada");
                    return [3 /*break*/, 24];
                case 11: return [4 /*yield*/, editarEmpresaMain(indiceEmpresa)];
                case 12:
                    _d.sent();
                    return [3 /*break*/, 24];
                case 13:
                    banderaListaVideojuegos = true;
                    _d.label = 14;
                case 14:
                    if (!banderaListaVideojuegos) return [3 /*break*/, 21];
                    console.log("Lista de videojuegos de la empresa: " +
                        BaseDeDatosMemoria_1.BaseDeDatosMemoria.empresas[indiceEmpresa].nombre);
                    console.table(BaseDeDatosMemoria_1.BaseDeDatosMemoria.empresas[indiceEmpresa].arregloVideojuegos, ["nombre", "recaudacion", "fechaDeSalida", "generoPrincipal", "multijugador"]);
                    return [4 /*yield*/, inquirer.prompt([
                            {
                                type: 'number',
                                name: 'seleccion',
                                message: "Opciones disponibles \n" +
                                    "Para regresar ingrese: -2 \n" +
                                    "Para crear una videojuego ingrese: -1 \n" +
                                    "Para seleccionar una videojuego, ingrese el número de videojuego (index)"
                            }
                        ])];
                case 15:
                    respuestaBanderaListaVideojuego = _d.sent();
                    _c = respuestaBanderaListaVideojuego.seleccion;
                    switch (_c) {
                        case -2: return [3 /*break*/, 16];
                        case -1: return [3 /*break*/, 17];
                    }
                    return [3 /*break*/, 19];
                case 16:
                    banderaListaVideojuegos = false;
                    return [3 /*break*/, 20];
                case 17: return [4 /*yield*/, crearVideojuegoMain(indiceEmpresa)];
                case 18:
                    _d.sent();
                    return [3 /*break*/, 20];
                case 19: return [3 /*break*/, 20];
                case 20: return [3 /*break*/, 14];
                case 21: return [3 /*break*/, 24];
                case 22:
                    banderaSeleccionEmpresa = false;
                    return [3 /*break*/, 24];
                case 23:
                    banderaSeleccionEmpresa = false;
                    return [3 /*break*/, 24];
                case 24: return [3 /*break*/, 8];
                case 25: return [3 /*break*/, 27];
                case 26:
                    console.log("Ingrese un número válido");
                    return [3 /*break*/, 27];
                case 27: return [3 /*break*/, 2];
                case 28: return [3 /*break*/, 30];
                case 29:
                    error_1 = _d.sent();
                    console.log(error_1);
                    return [3 /*break*/, 30];
                case 30: return [2 /*return*/];
            }
        });
    });
}
mainAsync();
