class Persona {

    static porObjeto({nombre,apellido,pais}){
        return new Persona(nombre,apellido,pais);
    }

    constructor(nombre,apellido,pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais
    }

    getInfo(){
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`)
    }
}

const nombre1 = 'Melissa';
const apellido1 = 'Flores';
const pais1 = 'Honduras';

const fer = {
    nombre: 'fernando',
    apellido: 'herrera',
    pais: 'costa rica'
}

const persona1 = new Persona(nombre1,apellido1,pais1);
const persona2 = Persona.porObjeto(fer)

persona1.getInfo();
persona2.getInfo();