class CatalogoJugadores {
    constructor(jugadores){
        this.jugadores=jugadores;
    }
    agregarJugador(jugador){
        this.jugadores.push(jugador);
    }
    darCantidad(){
        return this.jugadores.length;
    }
    buscar(nombreABuscar){
        let esta= this.jugadores.some((jugador)=>
        jugador.nombre.includes(nombreABuscar)
        )
        if(esta){
            alert("si esta")
            let filtrado=this.jugadores.filter((jugador)=>
            jugador.nombre.includes(nombreABuscar)
            )
            console.table("lo encontre",filtrado);
        }
        else {
            alert("no esta")
        }
    }
}