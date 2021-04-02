const argv  = require("yargs")
.command('crear','Crear un elemento por hacer',{
    descripcion:{
        alias:'d'
    }
})
.command('actualizar','Actualiza el estado completado de una tarea',{
    descripcion:{
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
})
.command('borrar','Borrar la tarea seleccionada',{
    descripcion:{
        alias: 'd'
    }
})
.command('listar','Listando todas las tareas',{
    listar:{
        alias:'l'
    }
})
.help()
.argv;


module.exports = {
    argv
}

