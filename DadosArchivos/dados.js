jugar=function(){

  let aleatorio
  let mensajeDado;
  aleatorio=lanzarDado();
  cambiarTexto("lblNumero",aleatorio);

  if(aleatorio>3){
    mensajeDado="El numero "+aleatorio+" es: mayor a 3  ganaste";
cambiarTexto("lblNumero",mensajeDado);

  }
  else{
    mensajeDado="El numero "+aleatorio+"es: menor a 3 estas de malas";
cambiarTexto("lblNumero",mensajeDado);

  }
}
// crear una funcion llamda lanzarDado 
// No recibe parametros
// retorna un numero aleatorio entre 1 y 6
lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random();// entre 1 y 6
    numeroMultiplicado=aleatorio*6;
    
    numeroEntero=parseInt(numeroMultiplicado);// entre 0 y 5
    
    valorDado=numeroEntero+1;
   
    return valorDado;
    
}