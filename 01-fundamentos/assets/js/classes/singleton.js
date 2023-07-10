class Singleton {
    static instancia; // undefined
    nombre = '';

    constructor(nombre = ''){
        if(!!Singleton.instancia) {
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;

    }
}

const instacia1 = new Singleton('IRONMAN')
const instacia2 = new Singleton('SPIDERMAN')

console.log(`Nombre en la instacia 1 es: ${instacia1.nombre}`);
console.log(`Nombre en la instacia 1 es: ${instacia2.nombre}`);