/* let i = 0
let intervalo = setInterval(function () {
    console.log('Hola')
    if (i === 3) {
        clearInterval(intervalo)
    }
    i++
}, 1000) */

setImmediate(function() {
    console.log('Hola')
})

require //para acceder a cualquier módulo

console.log(process) //para accesar a la clase del proceso

console.log(__filename) //para saber como se llama este fichero

//Para crear variables globales 
globalThis.miVariable = 'elValor'

console.log(miVariable)
//Si no es necesario no utilizar variables globales
