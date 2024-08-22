let puntoUsuario = 0;

let puntoComputador = 0;

jugar=function(seleccionado){
    let resultado;
    resultado=generarElemento();
        let rutaImag;
        rutaImag=generarRuta(resultado);
        mostrarImagen("imagenComputador",rutaImag);
       let ganador= determinarGanador(resultado,seleccionado);
    
       if(ganador==0){
          mostrarTexto("lblResultado","EMPATE");
       }
    else if(ganador==1){
        mostrarTexto("lblResultado","GANASTE LA PARTIDA");
          puntoUsuario=puntoUsuario+1;
    }
     else {
        mostrarTexto("lblResultado","PERDISTE LA PARTIDA","GANO EL COMPUTADOR");
     puntoComputador=puntoComputador+1;
    
    }
    mostrarTexto("lblPuntoUsuario",puntoUsuario);
    mostrarTexto("lblPuntoComputador",puntoComputador);
    if(puntoUsuario==5){
        mostrarTexto("lblFin","HAZ GANADO");
     }
     else if(puntoComputador==5){
        mostrarTexto("lblFin","TE HA GANADO EL COMPUTADOR");
     }
     
}
limpiar=function(){
    puntoUsuario=0;
    puntoComputador=0;
    mostrarTexto("lblResultado","");
    mostrarTexto("lblPuntoUsuario",puntoUsuario);
    mostrarTexto("lblPuntoComputador",puntoComputador);
    mostrarImagen("imagenComputador","");
    mostrarTexto("lblFin","");
}