//call module
const fs = require('fs') //Not necesary specified where it comes, cause its directly in the core of node

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) =>{
        cb(data.toString())  //toString placed to allow the text to be read
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function (err) {
        if (err) {
        console.error('No he podido escribirlo', err)
        } else {
        console.log('Se ha escrito correctamente')
        }
    })
}

function borrar(ruta, cb) {
    fs.unlink(ruta, cb)
}

borrar(__dirname + '/archivo1.txt', console.log)
//escribir(__dirname + '/archivo1.txt' , 'Soy un archivo nuevo', console.log)
//leer(__dirname + '/archivo.txt', console.log)

