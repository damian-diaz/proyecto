
let jugadores = [""]

mostrarMenu();


function mostrarMenu() {
    let opcion = "";
    while (opcion !== "K") {

        opcion = prompt(`Seleccione una opcion: 
                        A. Ingresar Jugador
                        B. Listar Jugador
                        C. Buscar Un Jugador (Decir si está o no está)
                        D. Borrar Un Jugdor (dado su nombre)
                        K. FIN`);

        switch (opcion) {
            case "A":
                ingresarJugador();
                break;
            case "B":
                listarJugador();
                break;
            case "C":
                buscarJugador();
                break;
            case "D":
                borrarJugador();
                break;
            case "K":
                alert("GRACIAS");
                break;
            default:
                alert("opcion inválida")
                break;
        }
    }

}

function ingresarJugador() {
    let nuevoJugador = prompt("Ingrese un nuevo jugador")
    jugadores.push(nuevoJugador);
    alert("jugador ingresado con Éxito")
}


function listarJugador() {
    console.log(jugadores);
}


function buscarJugador()
{
    let jugadorABuscar = prompt("Ingrese el jugador que busca")
     const esta = jugadores.includes(jugadorABuscar);
     if(esta)
     {
         alert("SI ESTÁ")
     }
     else 
     {
         alert("NO ESTÁ")
     }
  
}

function borrarJugador()
{
    let JugadorABorrar = prompt("Ingrese el jugador que quiere borrar")
    let indice = jugadores.indexOf(JugadorABorrar);
    if(indice===-1) // NO ENCONTRÓ EL DATO
    {
        alert("JUGADOR NO EXISTE")
    }
    else {
        jugadores.splice(indice,1)
        alert("JUGADOR BORRADO CON ÉXITO")
    }
   
}