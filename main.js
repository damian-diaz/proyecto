
/* La idea es armar una aplicacion en la cual se puede cargar los datos de los jugadores de un equipo de futbol,
 y ademas se pueda agregar nuevos jugadores*/
const jugadores =[
    {nombre:"Tomy",edad:28,dorsal:1,posicion:"Arquero"},
    {nombre:"Pablo",edad:32,dorsal:2,posicion:"Defensor"},
    {nombre:"Damian",edad:37,dorsal:6,posicion:"Defensor"},
    {nombre:"Eze",edad:37,dorsal:5,posicion:"Medio"},
    {nombre:"Maty",edad:37,dorsal:9,posicion:"Delantero"},
]
const catalogoJugadores=new CatalogoJugadores(jugadores);
console.log("Jugadores Originales",catalogoJugadores.jugadores)
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
    let nombre= prompt("Ingrese un nuevo jugador")
    let edad=Number(prompt("Ingrese edad del jugador"))
    let dorsal=Number(prompt("Ingrese numero de camiseta"))
    let posicion=prompt("Ingrse posicion")
    
   let jugador= new Jugador(catalogoJugadores.darCantidad() + 1, nombre, edad, dorsal, posicion);
    catalogoJugadores.agregarJugador(jugador);
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