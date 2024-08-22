obtenerAleatorio=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorAleatorio;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*3;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorAleatorio=aleatorioEntero+1;
    return valorAleatorio;

}
generarElemento=function(){
    let aleatorio;
      aleatorioJuego=obtenerAleatorio();
      if(aleatorioJuego==1){
            aleatorio="piedra";
      }
      if(aleatorioJuego==2){
        aleatorio="papel";
      }
      if(aleatorioJuego==3){
        aleatorio="tijeras";
      }
    return aleatorio;

}
determinarGanador=function(eleccion_jugador1,eleccion_jugador2){
let resultado;
if(eleccion_jugador1==0||eleccion_jugador2==0){
   resultado=0;
    
}
else if((eleccion_jugador1=="piedra"&&eleccion_jugador2=="piedra")||
    (eleccion_jugador1=="papel"&&eleccion_jugador2=="papel")||
(eleccion_jugador1=="tijeras"&&eleccion_jugador2=="tijeras"))
{


resultado=1;

} 
else {
    resultado=2;
}
return resultado;
}
  

generarRuta=function(nombre){
    let rutaI;
    let seleccionar;
    seleccionar=generarElemento();
    if(seleccionar=="piedra"){
        rutaI="./imagenes/piedra.png";
    }
    else if(seleccionar=="papel"){
        rutaI="./imagenes/papel.png";
    }
    else {
        rutaI="./imagenes/tijeras.png";
    }

    return rutaI;
}