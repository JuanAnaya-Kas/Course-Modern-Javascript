
const dia = 1;
const horaActual = 10;

let horaApertura;
let mesaje;

// if ([0,6].includes(dia)){
//     console.log('Find de semana');
//     horaApertura = 9;
// }else{
//     console.log('Dia de semana');
//     horaApertura = 11;
// }

horaApertura = ([0,6].includes(dia)) ? 9 : 11;

// if(horaActual >= horaApertura){
//     mesaje = 'Esta abierto';
// } else {
//     mesaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

mesaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura,mesaje});