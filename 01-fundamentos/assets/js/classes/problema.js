const fher = {
    nombre: 'juan',
    edad: 30
}

const pedro = {
    nombre: 'pedro',
    edad: 30
}

function Persona(nombre,edad){
    console.log('Se ejecuto')
    this.nombre = nombre;
    this.edad = edad

    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
    }
}

const maria = new Persona('Maria',18)
const melissa = new Persona('Melissa',22);
console.log(maria)
maria.imprimir()
melissa.imprimir()