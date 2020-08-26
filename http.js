/* const http = require('http')

http.createServer(function (req, res) {
    console.log('Nueva petición') 
    console.log(req.url)

    res.writeHead(201, { 'Content-Type': 'text/plain' })

    // write client response
    res.write('Hola ya se usar http de node.js')

    res.end() //end and send the request
}).listen(3000) //indicate port

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