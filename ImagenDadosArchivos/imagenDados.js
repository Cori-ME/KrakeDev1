let puntos;
puntos=0;
let lanzamientos;
lanzamientos=5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos(resultado);
   
    
}
modificarPuntos=function(numero){
    puntos=puntos+numero;
    cambiarTexto("lblPuntos",puntos);
// si el jugador obtiene mas de 20 puntos
//mostrar un mensaje ganaste
//invocar a limpiar
if(puntos>=20){
let mensajePuntos;
mensajePuntos="GANASTE";
cambiarTexto("lblMensaje",mensajePuntos);
let limp;
 limp=limpiar("lblPuntos",puntos);

}



}
//no recibe parametros
//resta 1 a la variable,guarda el resultado en la misma variable
// y muestra en pantalla

modificarLanzamientos=function(){
    lanzamientos=lanzamientos-1;
    cambiarTexto("lblLanzamientos",lanzamientos);
    
    if(lanzamientos==0){

        let mensajeLanzamiento;
        mensajeLanzamiento="GAME OVER";
        cambiarTexto("lblMensaje",mensajeLanzamiento);
        let limp;
 limp=limpiar("lblLanzamiento",lanzamientos);

    }
 
      
//si lanzamientos llega a 0 
//mostrar el mensaje del game over

}
//funcion mostrar cara , recibe el numero que quiere mostrar 
//muestra la imagen correspondiente al numero que recibe
//no retorna nada
mostrarCara=function(numero){
    if(numero==1){//con doble igual se compara,mientras que con 1 se asigna
        cambiarImagen("imgDados","dados1.png");
    }
else if(numero==2){
    cambiarImagen("imgDados","dados2.png");
}
else if(numero==3){
    cambiarImagen("imgDados","dados3.png");
}
else if(numero==4){
    cambiarImagen("imgDados","dados4.png");
}
else if(numero==5){
    cambiarImagen("imgDados","dados5.png");
}
else if(numero==6){
    cambiarImagen("imgDados","dados6.png");
}

}
    
lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}
limpiar=function(){
   puntos=0;
   lanzamientos=5;
    cambiarTexto("lblPuntos",puntos);
    cambiarTexto("lblLanzamientos",lanzamientos);
    cambiarImagen("imgDados","");
    
    
    //colocar puntaje en 0 y lamzamientos en 5
    //en las variables y en pantalla
    //quitar la imagen...
}