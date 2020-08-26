const os = requiere('os')

console.log(os.hostname());//  know the hostname of the machine
console.log(os.networkInterfaces());// Access my active network interface
console.log(os.tmpdir())//-->Show the temporary directories
console.log(os.homedir()) // Show which is the root directory
console.log(os.arch()); //----> Returns the arch of my OS
console.log(os.platform());//---> Returns the platform Im on
console.log(os.cpus());//--->Allows access the info of the CPUs of the PC
console.log(os.constants);//---> Show all the system errors


//Acceder a espacios de memoria es muy útil para saber si tengo a memoria suficiente para realizar esta operación.
console.log(os.freemem());// ---> Me dice en bytes la memoria libre que tenemos
// console.log(kb(os.freemem()));
// console.log(mb(os.freemem()));
// console.log(gb(os.freemem()));
console.log(gb(os.totalmem())); // ---> Me muestra la memoria disponible del pc.

const SIZE = 1024;
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }