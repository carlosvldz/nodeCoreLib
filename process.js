//const process = require('process')

//Podemos utilizar el mismo process que esta en global sin
//tener que requerirlo

//antes de que el proceso termine
process.on('beforeExit', () => {
    console.log('El proceso va a terminar')
}) 

//detectar cuando vaya a salir el programa
process.on('exit', () => {
    console.log('Ale, el proceso acabó')
}) 


//Cuando algo se rompe y no hay un try/catch
//process.on('uncaughtException') //excepciones que no se han capturado
//process.on('uncaughtRejection') //promesas rechazadas y no hay un catch

process.on('uncaughtException', (err, origen) => {
    console.error('Vaya se nos ha olvidado capturar un error')
    console.error(err)
})

funcionQueNoExiste()

console.log('Esto si el error no se recoje, no sale')


