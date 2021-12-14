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
            datosEmpresa.fechaDeFundacion,
            datosEmpresa.numeroTrabajadores,
            datosEmpresa.pais,
            idenpendiente,
            []
        )
    );
}

async function mainAsync(){

    try{
       var datos=await BaseDeDatosMemoria.init();
        if (typeof datos === "string") {
            BaseDeDatosMemoria.empresas = JSON.parse(datos);
        }
        let banderaListaEmpresas=true;

        while (banderaListaEmpresas){
            console.log("Operaciones CRUD empresa desarrolladora-videojuego");
            console.log("Lista de empresas");
            console.table(BaseDeDatosMemoria.empresas,["nombre", "fechaDeFundacion", "numeroTrabajadores", "pais","independiente"]);

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

                            console.table([BaseDeDatosMemoria.empresas[indiceEmpresa],], ["nombre", "fechaDeFundacion", "numeroTrabajadores", "pais", "independiente"]);
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
                                    
                                    break;
                                case "Ver videojuegos":
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
                        console.log("Ingrese un número válido");
                        break;

                    }


            }
        }

    }catch (error){
        console.log(error);
    }

}
mainAsync();












