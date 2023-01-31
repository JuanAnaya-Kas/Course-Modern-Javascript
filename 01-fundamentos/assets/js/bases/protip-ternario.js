

const elMayor = (a,b) => (a > b) ? a :b ;  

const tieneMembresia = (miembro) => (miembro) ? '2 dolares' : '10 dolares';


console.log(elMayor(16,15));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki'
];

console.log(amigosArr);

const nota = 95;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' : 'F';

console.log({nota,grado});