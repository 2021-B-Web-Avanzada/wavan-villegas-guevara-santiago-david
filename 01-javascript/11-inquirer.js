//11-inquirer.js
const inquirer = require('inquirer');
//npm install inquirer
async function main(){
    try{
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'apellido',
                    message: 'Ingresa tu nombre'
                },
                {
                    type: 'input',
                    name: 'edad',
                    message: 'ingresa Tu Edad'
                }
            ]);
        console.log("Respuesta", respuesta);
    }catch (error){
        console.error(error)
    }
}
main()