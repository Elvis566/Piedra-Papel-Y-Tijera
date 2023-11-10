const eleccion = ["piedra","papel","tijera"];
const miPiedra =document.getElementById("mipiedra");
const miPapel =document.getElementById("mipapel");
const miTijera =document.getElementById("mitijera");
var eleccionJugador;

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
    var jugadaBoot =eleccion[contadorEleccion];
    let idB = document.getElementById(`${jugadaBoot}`);
    console.log(jugadaBoot);
    
    if(!idB.classList.contains("seleccionBoot")){
        idB.classList.remove("seleccionBoot");
        idB.classList.add("seleccionBoot");
    }
    
    ReglasJuego(eleccionJugador,jugadaBoot);


}

function ReglasJuego(eleccionJugador,jugadaBoot){
    if (eleccionJugador === jugadaBoot) {
        console.log("Empate");
    } else if (
        (eleccionJugador === "piedra" && jugadaBoot === "tijera") ||
        (eleccionJugador === "papel" && jugadaBoot === "piedra") ||
        (eleccionJugador === "tijera" && jugadaBoot === "papel")
    ) {
        console.log("¡Ganaste!");
    } else {
        console.log("¡Perdiste!");
    }
}
