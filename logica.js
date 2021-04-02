const fs = require('fs');

let tareas = [];

let cargarDB = ()=>{

    try {
        tareas = require('./db/data.json');   
    } catch (error) {
        tareas = [];
    }

}

let escribirTarea = ()=>{
    let data = JSON.stringify(tareas);
    console.log("La data es: ",data);
    fs.writeFile('db/data.json', data, (err)=>{
        if(err){
            throw new Error('Ocurrió un error',err);
        };
    });
}

let getListado = ()=>{
    cargarDB();
    return tareas;
}

let crearTarea = (descripcion)=>{
    cargarDB();
    console.log(descripcion);
    const descripcion_objeto = {
        descripcion,
        completado: false
    }

    tareas.push(descripcion_objeto);
    console.log(tareas);
    escribirTarea();

    return descripcion_objeto;

}


let borrarTarea = (descripcion) => {
    cargarDB();


        const resultado = tareas.filter( tarea => tarea.descripcion !== descripcion)
        console.log(resultado);
        if(resultado.length != tareas.length){
            tareas = resultado;
            escribirTarea();
            console.log(true);
        }else{
            console.log(false);
        }
}

let actualizarTarea = (descripcion, completado)=>{
    cargarDB();

    console.log(`Descripcion ${descripcion} y completado ${completado}`);
    const index = tareas.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if(index >= 0){
        console.log(index);
        tareas[index].completado = completado;
        escribirTarea();
        return true;
    }else{
        false;
    }
}

module.exports = {
    crearTarea,
    escribirTarea,
    getListado,
    actualizarTarea,
    borrarTarea
}