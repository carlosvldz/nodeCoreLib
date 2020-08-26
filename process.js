//const process = require('process')

//We can use the same process that is in global...
//...without require ir

//before the process ends
process.on('beforeExit', () => {
    console.log('El proceso va a terminar')
}) 

//detect when the program will exit
process.on('exit', () => {
    console.log('Ale, el proceso acabó')
}) 


//When something breaks and there is no try/catch
//process.on('uncaughtException') //exceptions that hace no been caught
//process.on('uncaughtRejection') //promises rejected and there is no catch

process.on('uncaughtException', (err, origen) => {
    console.error('Vaya se nos ha olvidado capturar un error')
    console.error(err)
})

funcionQueNoExiste()

console.log('Esto si el error no se recoje, no sale')


