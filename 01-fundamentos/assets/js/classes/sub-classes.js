class Persona {

    static _conteo = 0
    static get conteo(){
         return Persona._conteo + 'instancias'
    }
 
    static mensaje(){
     console.log('Hola a todos soy un metodo estatico')
    }
 
     constructor(nombre,codigo,frase) {
        //  if (!nombre || !codigo || !frase) {
        //      throw new Error('Todos los parámetros son obligatorios');
        //  }
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

 class Heroe extends Persona{
    clan = 'sin clan';
    constructor(nombre,codigo,frase){
        super(nombre,codigo,frase);
        this.clan = 'Los Avengers'
    }
 }
 
const batman = new Heroe('Batman','no matar', 'el señor de la noche');
//  batman.quienSoy()

const spiderman = new Heroe();
console.log(batman);
spiderman.quienSoy()