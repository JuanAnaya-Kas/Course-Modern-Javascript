class Persona {
    constructor(nombre,codigo,frase) {
        if (!nombre || !codigo || !frase) {
            throw new Error('Todos los parámetros son obligatorios');
        }
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }

    miFrase(){
        console.log(`${this.nombre} dice: ${this.frase}`)
    }
}

const batman = new Persona('Batman','no matar', 'el señor de la noche');
console.log(batman)
batman.quienSoy()
batman.miFrase()