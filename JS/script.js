const reaccionBoot = ["../img/boot/inicio.gif", "../img/boot/burlando.gif", "../img/boot/molesto.gif", "../img/boot/perdido.gif", "../img/boot/triste.gif"];
const eleccion = ["../img/piedra.jpg", "../img/papel.jpg", "../img/tijera.jpg"]
const jugadaBoot = document.querySelector(".eleccionB")
const logoBoot = document.querySelector(".logoBoot")
const miPiedra =document.getElementById("mipiedra");
const miPapel =document.getElementById("mipapel");
const miTijera =document.getElementById("mitijera");
var eleccionJugador;
var lanzamientoBoot;
var puntos=[0, 0, 0];
var manoBoot;


miPiedra.addEventListener("click", function(){
    eleccionJugador ="piedra"
    console.log(eleccionJugador+"es del jugador");
    Jugar()
});
miPapel.addEventListener("click", function(){
    eleccionJugador ="papel"
    console.log(eleccionJugador+"es del jugador");
    Jugar()
});
miTijera.addEventListener("click", function(){
    eleccionJugador ="tijera"
    console.log(eleccionJugador+"es del jugador");
    Jugar()
});
function Jugar(){

    let contadorEleccion = Math.floor(Math.random()*3);
    switch(contadorEleccion){
        case 0 : lanzamientoBoot="piedra";
        break;
        case 1 : lanzamientoBoot="papel";
        break;
        case 2 : lanzamientoBoot="tijera";
        break;
    }
    manoBoot =eleccion[contadorEleccion];
    jugadaBoot.src=manoBoot;
    console.log(jugadaBoot);
    
    
    ReglasJuego(eleccionJugador,lanzamientoBoot);


}
// El siguiente metodo tiene un funcionamiento sencillo que abarca las reglas del casico juego de piedras papel y tijera
function ReglasJuego(eleccionJugador,lanzamientoBoot){
    if (eleccionJugador === lanzamientoBoot) {
        console.log("Empate");
        logoBoot.src=reaccionBoot[0];
        puntos[2]++;
    } else if (
        (eleccionJugador === "piedra" && lanzamientoBoot === "tijera") ||
        (eleccionJugador === "papel" && lanzamientoBoot === "piedra") ||
        (eleccionJugador === "tijera" && lanzamientoBoot === "papel")
    ) {
        console.log("¡Ganaste!");
        logoBoot.src=reaccionBoot[2];
        puntos[0]++;
    } else {
        console.log("¡Perdiste!");
        logoBoot.src=reaccionBoot[1];
        puntos[1]++;
    }

    finDePartida();
}

function finDePartida(){
    if(puntos[0]>=3 || puntos[1]>=3){
        if(puntos[0]>=3){
            alert('Gano el jugador');
        }else{
            alert('Gano el boot');
        }
        for(let i = 0; i<3; i++){
            puntos[i]=0;
        }
        logoBoot.src=reaccionBoot[0];
        jugadaBoot.src="../img/ppt.jpg";
    }
}
