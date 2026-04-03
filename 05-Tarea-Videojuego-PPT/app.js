const opciones = ["piedra", "papel", "tijera"]; // declaro las opciones a utilizar en el juego.

let puntosJugador = 0; //las variables para contar puntos del jugador, de la maquina y los puntos en el empate.
let puntosComputadora = 0;
let puntosEmpate = 0;

function jugar(opcionJugador) {
    
    const computadora = opciones[Math.floor(Math.random() * opciones.length)]; // la maquina eligue una opcion de manera aleatoria entre las opciones previamente declaradas. 

    if (puntosJugador === 2 || puntosComputadora === 2) {
        mensaje(`El juego ha terminado.\nVos: ${puntosJugador}  Computadora: ${puntosComputadora}`);
        return;
    } // funcion para finalizar el juego cuando la maquina o el usuario llegue a 2 victorias y muestra el mensaje con el resultado de la partida.
    
    if (opcionJugador === computadora) { // si se da un empate muestra un mensaje, con los emoticones correspondientes y se suma el empate al contador de puntos. 
        mensaje("Es un empate, volvé a intentarlo.");
        document.getElementById("eleccionJugador").textContent = mostrarEmoji(opcionJugador);
        document.getElementById("eleccionPC").textContent = mostrarEmoji(computadora);   
        puntosEmpate++;
        puntajeEmpate(puntosEmpate);

    // si el jugador gana, muestra un mensaje con los emoticones correspondientes y suma un punto al contador del jugador.
    } else if ((opcionJugador === "piedra" && computadora === "tijera") ||
               (opcionJugador === "papel" && computadora === "piedra") ||
               (opcionJugador === "tijera" && computadora === "papel")) { 
        document.getElementById("eleccionJugador").textContent = mostrarEmoji(opcionJugador);//muestra emoji
        document.getElementById("eleccionPC").textContent = mostrarEmoji(computadora);//muestra emoji  
        mensaje(`¡Ganaste! ${mostrarEmoji(opcionJugador)} le gana a ${mostrarEmoji(computadora)}.`);//muestra un mensaje concatenado en el que se muestra el resultado y el emoji.
        puntosJugador++;//suma un punto al contador del jugador.
        puntajeJugador(puntosJugador);//actualiza el puntaje del jugador en la UI.
    
        // si el jugador pierde, muestra un mensaje con los emoticones correspondientes y suma un punto al contador de la maquina.
    }  else if ((opcionJugador === "piedra" && computadora === "papel") ||
               (opcionJugador === "papel" && computadora === "tijera") ||
               (opcionJugador === "tijera" && computadora === "piedra")) {
        document.getElementById("eleccionJugador").textContent = mostrarEmoji(opcionJugador);//muestra emoji en la elección del jugador.  
        document.getElementById("eleccionPC").textContent = mostrarEmoji(computadora);// muestra emoji de la elección de la computadora
        mensaje(`¡Perdiste! ${mostrarEmoji(computadora)} le gana a ${mostrarEmoji(opcionJugador)}.`);//muestra un mensaje concatenado en el que se muestra el resultado y el emoji.
        puntosComputadora++;//suma un punto al contador de la computadora.
        puntajeComputadora(puntosComputadora);//actualiza el puntaje de la computadora en la UI.

     //se reinicia el juego cuando el jugador o la maquina llega a dos victorias.
    } else {
        return reiniciar();
    }
};


function mostrarEmoji(opciones) { //muestra el emoji correspondiente a cada opción elegida.

    let emojiPiedra = "🪨";
    let emojiPapel = "📄";
    let emojiTijera= "✂️";

    if (opciones === "piedra") {
        return emojiPiedra;
    } else if (opciones === "papel") {
        return emojiPapel;
    } else if (opciones === "tijera") {
        return emojiTijera;
    };
};

function mensaje(texto) { //permite mostrar un mensaje cuando se llama la funcion 
// y se le agrega el texto que sea necesario para una victoria,
//  un empate, una derrota o reinicia el juego
    document.getElementById("resultado").textContent = texto;
};

function puntajeJugador(numero) { //actualiza el puntaje del jugador en la UI.
    document.getElementById("puntajeJugador").textContent = numero;
};


function puntajeComputadora(numero) { // actualiza el puntaje de la computadora en la UI.
    document.getElementById("puntajePC").textContent = numero; 
};


function puntajeEmpate(numero){ // actualiza el puntaje de los empates en la UI.
    document.getElementById("puntajeEmpate").textContent = numero;
};

function reiniciar() {// permite riniciar el juego con todos los valores a 0 y muestra un mensaje de juego reiniciado. 
    puntosJugador = 0;
    puntosComputadora=0;
    puntosEmpate = 0;
    puntajeJugador(puntosJugador); //actualiza el puntaje del jugador en la UI.
    puntajeComputadora(puntosComputadora); // actualiza el puntaje de la computadora en la UI.
    puntajeEmpate(puntosEmpate); // actualiza el puntaje de los empates en la UI.
    mensaje("¡Juego reiniciado! Elegí tu opción para jugar.");
};