const {argv} = require('./config/yargs');
const {colors} = require('colors');

const { borrarTarea, actualizarTarea, crearTarea, getListado} = require('./logica');

let comando = argv._[0];

switch ( comando ){

    case 'crear':
        console.log("Creando");
        crearTarea(argv.descripcion);
        break;
    case 'listar':
        let listado = getListado();
        console.log("Listado",listado);
        for (let tarea of listado) {
            console.log("===Tareas===".green);
            console.log(tarea.descripcion);
            console.log("Completado",tarea.completado);
            console.log("============".green);
            
        }
    case 'actualizar':
        console.log("Actualizando"); 
        actualizarTarea(argv.descripcion, argv.completado)
        break;

    case 'borrar':
        console.log("Borrando");
        borrarTarea(argv.descripcion);
        break;    
    default:
        console.log("No se reconoce el comando");      
}