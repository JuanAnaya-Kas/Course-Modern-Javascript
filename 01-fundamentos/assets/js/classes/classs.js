class Persona {
    constructor(nombre,codigo,frase) {
        if (!nombre || !codigo || !frase) {
            throw new Error('Todos los parámetros son obligatorios');
        }
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    set setCommidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getCommidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }

    miFrase(){
        console.log(`${this.nombre} dice: ${this.frase}`)
    }
}

const batman = new Persona('Batman','no matar', 'el señor de la noche');
batman.quienSoy()
batman.miFrase()
batman.setCommidaFavorita = 'El pie de cereza de la tia may';
console.log(batman.getCommidaFavorita)
console.log(batman)