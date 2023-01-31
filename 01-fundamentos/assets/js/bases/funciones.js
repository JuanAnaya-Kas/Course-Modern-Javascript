function saludar(nombre){
    console.log(arguments);
    console.log('Hola ' + nombre);
    return 1;
    // ESTO NUNCA SE EJECUTARA
    console.log('Soy codeigo que esta despues de return');
}

const saludar2 = function(nombre){
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

const retornoDeSaludar = saludar('Juan', 40, true, 'Colombia');
console.log(retornoDeSaludar)
// saludar2('Juan');
// saludarFlecha();
// saludarFlecha2('Melissa');

function suma(a,b){
    return a + b;
}

const sumar2 = (a,b) =>  a + b; 

function getAleatorio(){
    return Math.random();
}

//En una funcion de flecha sin llaves

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());
