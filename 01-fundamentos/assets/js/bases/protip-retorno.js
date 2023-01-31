// function crearPersona(nombre, apellido) {
//     return { nombre, apellido
//     }
// }

const crearPersona = (nombre, apellido) => ({nombre,apellido})

const persona = crearPersona('juan','anaya')
console.log(persona);

function imprimerArgumentos(){
   console.log(arguments) 
}


const imprimerArgumentos2 = (edad, ...args) => {
    // console.log(edad, args);
    return args;
}

const [edad,casado,muerto,nombre, saludo] = imprimerArgumentos2(10, true, false, 'Juan', 'Hola');
console.log({edad,casado,muerto,nombre, saludo})

const {apellido: nuevoApellido} = crearPersona('Juan','Anaya');
console.log(nuevoApellido);

const Tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark 1', 'Mark V', 'Hulkbuster'],
};

const imprimePropiedades = ({nombre,codeName,vivo,edad,trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(Tony)