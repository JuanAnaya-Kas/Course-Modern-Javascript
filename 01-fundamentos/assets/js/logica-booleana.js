const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negracion');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse());

console.warn('And');
console.log(true && true);
console.log(true && false);

console.log('===========');
console.log(regresaFalse() && regresaTrue());

console.log('====&&=====');
regresaFalse() && regresaTrue();

console.log('OR')
console.log(true || false);
console.log(regresaTrue() || regresaFalse());


console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola mundo' && 150;
const a2 = 'Hola' && 'Mundo';
const a3 = soyFalse || 'Ya no soy false';
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy un false';
const a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy un false';
console.log({a1,a2,a3, a4, a5});