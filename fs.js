//traer módulo
const fs = require('fs') //no se especifica de donde viene ya que esta directo en el core de node

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) =>{
        cb(data.toString())  //se coloca toString para que permite leer el texto
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
