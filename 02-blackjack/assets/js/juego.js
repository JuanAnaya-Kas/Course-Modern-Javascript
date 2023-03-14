/**
 *  2C = Two of Clubs (Treboles)
 *  2D = Two of Dimonds (Treboles)
 *  2H = Two of Hearts (Treboles)
 *  2S = Two of Spades (Treboles)
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K']

const crearDeck = () => {
    for(let i = 2; i <= 10; i ++){
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }

    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp + tipo);
        }
    }
}
crearDeck();
// Mezclamos los elementos del array usando la función shuffle()
deck = _.shuffle(deck);

// Mostramos el array mezclado en la consola
console.log(deck);

// Esta funcion me permite tomar una carte 

const pedirCarta = () => {
    if (deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta
}

pedirCarta();

const valorCarta = (carta) => {
    const valor = carta.substring(0,carta.length-1);
    console.log(valor)
    if(isNaN(valor)){
        console.log('No es un numero')
    }else{
        console.log('Es un numero')
        puntos = valor
    }
}

valorCarta('2D');