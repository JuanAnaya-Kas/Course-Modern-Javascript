class Persona {
    constructor(nombre,codigo,frase) {
        if (!nombre || !codigo || !frase) {
            throw new Error('Todos los parámetros son obligatorios');
        }
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }
}

const batman = new Persona('Batman','no matar', 'el señor de la noche');
console.log(batman)