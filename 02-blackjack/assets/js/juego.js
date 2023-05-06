/**
 *  2C = Two of Clubs (Treboles)
 *  2D = Two of Dimonds (Treboles)
 *  2H = Two of Hearts (Treboles)
 *  2S = Two of Spades (Treboles)
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0;
let puntosComputaadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const small = document.querySelectorAll('small')
const divCartasJugador = document.querySelector('#jugador-cartas');

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
    return (isNaN(valor)) ?
    (valor === 'A') ? 11 : 10
    : valor * 1;
}

const valor = valorCarta(pedirCarta());


//Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    small[0].innerText = puntosJugador;
    const imgCarta = document.createElement('img');
    imgCarta.src = `./cartas/${carta}.png`
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);
    if(puntosJugador > 21){
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
    } else if( puntosJugador === 21){
        console.warn('21, genial!');
        btnPedir.disabled = true;
    }
});