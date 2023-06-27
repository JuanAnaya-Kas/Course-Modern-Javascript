class Persona {

   static _conteo = 0
   static get conteo(){
        return Persona._conteo + 'instancias'
   }

   static mensaje(){
    console.log('Hola a todos soy un metodo estatico')
   }

    constructor(nombre,codigo,frase) {
        if (!nombre || !codigo || !frase) {
            throw new Error('Todos los parámetros son obligatorios');
        }
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++;
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
console.log(Persona.conteo)
Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo'
console.log(Persona.propiedadExterna)