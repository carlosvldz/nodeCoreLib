/* function serompe() {
    return 3 + z
}

try {
    serompe()
} catch(err) {
    console.error('Vaya, algo se ha roto...')
    console.error(err.message)
    console.log('Pero no pasa nada lo hemos capturado')
}

console.log('esto de aqui está al final') */


// --Error sincrono
function otraFuncion() {
    serompe()
}

function serompe() {
    return 3 + z
}

try {
    otraFuncion()
} catch(err) {
    console.error('Vaya, algo se ha roto...')
    console.error(err.message)
    console.log('Pero no pasa nada lo hemos capturado')
}

console.log('esto de aqui está al final')
//Los errores en nodeJs se lanzan hacia arriba o la raiz en la que estamos llamando

// --Error asincrona
function otraFuncion() {
    serompe()
}

function serompe() {
    return 3 + z
}

function seRompeAsincrona(cb) {
    setTimeout(function () {
        try {
            return 3 + z
        } catch (err) {
            console.error('Error en mi función asincrona')
            cb(err)
        }
    })
}

try {
    seRompeAsincrona(function (err) {
        console.log(err.message)
    })
} catch(err) {
    console.error('Vaya, algo se ha roto...')
    console.error(err.message)
    console.log('Pero no pasa nada lo hemos capturado')
}

console.log('esto de aqui está al final')