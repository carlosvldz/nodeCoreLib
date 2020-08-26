/* const http = require('http')

http.createServer(function (req, res) {
    console.log('Nueva petición') 
    console.log(req.url)

    res.writeHead(201, { 'Content-Type': 'text/plain' })

    // Escribir respuesta al usuario
    res.write('Hola ya se usar http de node.js')

    res.end() //terminar y mandar la petición
}).listen(3000) //indicamos puerto

console.log('Escuchando HTTP en el puerto 3000') */

// --

const http = require('http')

http.createServer(router).listen(3000)

    function router(req, res) {
        console.log('Nueva petición') 
        console.log(req.url)

        switch (req.url) {
            case '/hola':
                res.write('Hola, que tal')
                res.end()
                break
            
            default:
                res.write('Error 404: No se lo que quieres')
                res.end()
        }
      

}

console.log('Escuchando HTTP en el puerto 3000')