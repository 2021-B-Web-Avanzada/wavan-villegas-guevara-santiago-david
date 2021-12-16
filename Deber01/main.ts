import { Videojuego } from "./Videojuego";
import { Empresa } from "./Empresa";
import {BaseDeDatosMemoria} from "./BaseDeDatosMemoria";
const inquirer = require('inquirer');


async function crearEmpresaMain() {
    console.log("Datos de la empresa a crear");
    const datosEmpresa = await inquirer.prompt([
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
    ]);
    let idenpendiente = true;
    if (datosEmpresa.independiente === "No") {
        idenpendiente = false
    }
    BaseDeDatosMemoria.agregarEmpresa(new Empresa(
            "111",
            datosEmpresa.nombre,
            datosEmpresa.numeroTrabajadores,
            datosEmpresa.fechaDeFundacion,
            datosEmpresa.pais,
            idenpendiente,
            []
        )
    );
}

async function editarEmpresaMain(indiceEmpresa: number) {
    console.log("Datos nuevos de la empresa a crear");
    const datosEmpresaNuevos = await inquirer.prompt([
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
    ]);
    let idenpendienteNuevo = true;
    if (datosEmpresaNuevos.independiente === "No") {
        idenpendienteNuevo = false
    }
    BaseDeDatosMemoria.empresas[indiceEmpresa].actualizar(
        datosEmpresaNuevos.nombre,
        datosEmpresaNuevos.numeroTrabajadores,
        datosEmpresaNuevos.fechaDeFundacion,
        datosEmpresaNuevos.pais,
        idenpendienteNuevo,
    );
}

async function crearVideojuegoMain(indiceEmpresa: number) {
    console.log("Datos del videojuego a crear");
    const datosVideojuego = await inquirer.prompt([
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
            name: 'generoPrincipal',
            message: 'Ingrese el genero principal del juego'
        },
        {
            type: 'list',
            name: 'multijugador',
            message: 'Tiene multijugador?',
            choices: ["Si", "No"]
        }
    ]);
    let multijugador = true;
    if (datosVideojuego.independiente === "No") {
        multijugador = false;
    }

    BaseDeDatosMemoria.empresas[indiceEmpresa].agregarVideojuego(new Videojuego(
            "111",
            datosVideojuego.nombre,
            datosVideojuego.recaudacion,
            datosVideojuego.fechaDeSalida,
            datosVideojuego.generoPrincipal,
            multijugador
        )
    );

}

async function cargarDatos() {
    var datos = await BaseDeDatosMemoria.init();
    if (typeof datos === "string") {
        let empresasJson: Empresa[] = [];
        empresasJson = JSON.parse(datos);

        empresasJson.forEach(
            function (empresaActual, indiceActual, arregloCompleto) {
                let juegosInit: Videojuego[] = [];

                empresaActual.arregloVideojuegos.forEach(
                    function (juegoActual, indiceJuegoActual, arregloJuegoCompleto) {
                        juegosInit.push(new Videojuego(
                            juegoActual.id,
                            juegoActual.nombre,
                            juegoActual.recaudacion,
                            juegoActual.fechaDeSalida,
                            juegoActual.generoPrincipal,
                            juegoActual.multijugador
                        ))
                    }
                )
                BaseDeDatosMemoria.agregarEmpresa2(new Empresa(empresaActual.id,
                    empresaActual.nombre,
                    empresaActual.numeroTrabajadores,
                    empresaActual.fechaDeFundacion,
                    empresaActual.pais,
                    empresaActual.independiente,
                    juegosInit)
                );
            }
        );

    }
}

async function ActualizarVideojuegoMain(indiceEmpresa: number, indiceJuego: number) {
    console.log("Datos del videojuego a editar");

    const datosVideojuegoNuevo = await inquirer.prompt([
        {
            type: 'input',
            name: 'nombre',
            message: 'Ingrese el nombre nuevo del videojuego'
        },
        {
            type: 'input',
            name: 'fechaDeSalida',
            message: 'Ingrese la fecha nueva de salida del videojuego'
        },

        {
            type: 'number',
            name: 'recaudacion',
            message: 'Ingrese la recuadación nueva del juego'
        },

        {
            type: 'input',
            name: 'generoPrincipal',
            message: 'Ingrese el genero nuevo principal del juego'
        },
        {
            type: 'list',
            name: 'multijugador',
            message: 'Tiene multijugador?',
            choices: ["Si", "No"]
        }
    ]);
    let multijugadorNuevo = true;
    if (datosVideojuegoNuevo.independiente === "No") {
        multijugadorNuevo = false;
    }

    BaseDeDatosMemoria.empresas[indiceEmpresa].arregloVideojuegos[indiceJuego].actualizar(
        datosVideojuegoNuevo.nombre,
        datosVideojuegoNuevo.recaudacion,
        datosVideojuegoNuevo.fechaDeSalida,
        datosVideojuegoNuevo.generoPrincipal,
        multijugadorNuevo
    );
}

async function mainAsync(){

    try{
        await cargarDatos();
        BaseDeDatosMemoria.actualizarJson();
        let banderaListaEmpresas=true;

        while (banderaListaEmpresas){
            console.log("Operaciones CRUD empresa desarrolladora-videojuego");
            console.log("Lista de empresas");
            console.table(BaseDeDatosMemoria.empresas,
                ["nombre", "fechaDeFundacion", "numeroTrabajadores", "pais","independiente"]);

            const respuestaBanderaListaEmpresa = await inquirer.prompt([
                {
                    type: 'number',
                    name: 'seleccion',
                    message: "Opciones disponibles \n" +
                        "Para salir ingrese: -2 \n" +
                        "Para crear una empresa ingrese: -1 \n" +
                        "Para seleccionar una empresa, ingrese el número de empresa (index)"

                }
            ]);
            switch(respuestaBanderaListaEmpresa.seleccion){

                case -2:
                    banderaListaEmpresas=false;
                    break;

                case -1:
                    await crearEmpresaMain();
                    break;
                default:
                    const indiceEmpresa:number=respuestaBanderaListaEmpresa.seleccion;
                    let banderaSeleccionEmpresa=true;
                    if(BaseDeDatosMemoria.empresas.length>0
                        && indiceEmpresa>=0
                        && indiceEmpresa<BaseDeDatosMemoria.empresas.length){
                        while (banderaSeleccionEmpresa) {
                            console.log("Empresa seleccionada");
                            console.table([BaseDeDatosMemoria.empresas[indiceEmpresa],],
                                ["nombre", "fechaDeFundacion", "numeroTrabajadores", "pais", "independiente"]);
                            const respuestabanderaSeleccionEmpresa = await inquirer.prompt([
                                {
                                    type: 'list',
                                    name: 'seleccion',
                                    message: "Opciones disponibles: \n",
                                    choices:["Eliminar Empresa","Editar Empresa","Ver videojuegos","Regresar"]

                                }
                            ]);
                            switch(respuestabanderaSeleccionEmpresa.seleccion){
                                case "Eliminar Empresa":
                                    BaseDeDatosMemoria.eliminarEmpresa(indiceEmpresa);
                                    banderaSeleccionEmpresa=false;
                                    console.log("Empresa eliminada")
                                    break;
                                case "Editar Empresa":
                                    await editarEmpresaMain(indiceEmpresa);
                                    break;
                                case "Ver videojuegos":

                                    let banderaListaVideojuegos=true;

                                    while (banderaListaVideojuegos) {

                                        console.log("Lista de videojuegos de la empresa: " +
                                            BaseDeDatosMemoria.empresas[indiceEmpresa].nombre);
                                        console.table(BaseDeDatosMemoria.empresas[indiceEmpresa].arregloVideojuegos,
                                            ["nombre", "recaudacion", "fechaDeSalida", "generoPrincipal", "multijugador"]);

                                        const respuestaBanderaListaVideojuego = await inquirer.prompt([
                                            {
                                                type: 'number',
                                                name: 'seleccion',
                                                message: "Opciones disponibles \n" +
                                                    "Para regresar ingrese: -2 \n" +
                                                    "Para crear una videojuego ingrese: -1 \n" +
                                                    "Para seleccionar una videojuego, ingrese el número de videojuego (index)"
                                            }
                                        ]);
                                        switch (respuestaBanderaListaVideojuego.seleccion) {
                                            case -2:
                                                banderaListaVideojuegos=false;
                                                break;
                                            case -1:
                                                await crearVideojuegoMain(indiceEmpresa);
                                                break;
                                            default:

                                                const indiceJuego:number=respuestaBanderaListaVideojuego.seleccion;
                                                let banderaSeleccionJuego=true
                                                if(BaseDeDatosMemoria.empresas[indiceEmpresa].arregloVideojuegos.length>0
                                                    && indiceJuego>=0
                                                    && indiceJuego<BaseDeDatosMemoria.empresas[indiceEmpresa].arregloVideojuegos.length){
                                                    while (banderaSeleccionJuego) {
                                                        console.log("Videojuego seleccionada");
                                                        console.table([BaseDeDatosMemoria.empresas[indiceEmpresa].arregloVideojuegos[indiceJuego],],
                                                            ["nombre", "recaudacion", "fechaDeSalida", "generoPrincipal", "multijugador"]);
                                                        const respuestabanderaSeleccionJuego = await inquirer.prompt([
                                                            {
                                                                type: 'list',
                                                                name: 'seleccion',
                                                                message: "Opciones disponibles: \n",
                                                                choices: ["Eliminar Videojuego", "Editar Videojuego", "Regresar"]

                                                            }
                                                        ]);
                                                        switch (respuestabanderaSeleccionJuego.seleccion) {
                                                            case "Regresar":
                                                                banderaSeleccionJuego=false;
                                                                break;

                                                            default:
                                                                banderaSeleccionJuego=false;
                                                                break;
                                                            case "Eliminar Videojuego":
                                                                BaseDeDatosMemoria.empresas[indiceEmpresa].eliminarVideojuego(indiceJuego);
                                                                banderaSeleccionJuego=false;
                                                                break

                                                            case "Editar Videojuego":
                                                                await ActualizarVideojuegoMain(indiceEmpresa, indiceJuego);
                                                                break

                                                        }
                                                    }
                                                }





                                                break;
                                        }
                                    }



                                    break;


                                case "Regresar":
                                    banderaSeleccionEmpresa=false;
                                    break;
                                default:
                                    banderaSeleccionEmpresa=false;
                                    break;

                            }
                        }
                        break

                    } else {
                        console.log("Ingrese un número de empresa válido");
                        break;

                    }


            }
        }

    }catch (error){
        console.log(error);
    }

}
mainAsync();












