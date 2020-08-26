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


// --Sync Error
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
//The errors in Node.js are thrown up or the root in which we are calling

// --Async Error
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