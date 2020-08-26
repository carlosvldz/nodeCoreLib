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

require //to call any module

console.log(process) //access the process class

console.log(__filename) //to know whats the name of the file

//Allows to create globar vars
globalThis.miVariable = 'elValor'

console.log(miVariable)

