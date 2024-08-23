obtenerAleatorio=function(){
 let aleatorio;
  let numeroEntero;
  let valorAleatorio;
  aleatorio = Math.random(); // obtiene un numero entre 0 y 1
  let numeroMultiplicado = aleatorio * 3; // va dar valores entre 0.ipico y 2.ipico
  numeroEntero = parseInt(numeroMultiplicado); 
  valorAleatorio = numeroEntero + 1; // por eso en esta linea sumamo uno , para que incluya el 3
  return valorAleatorio;

}
generarElemento=function(){
    let cadena;
  let aleatorio = obtenerAleatorio();
  if (aleatorio == 1) {
    cadena = "piedra";
  } else if (aleatorio == 2) {
    cadena = "papel";
  } else {
    cadena = "tijera";
  }
  return cadena;

}
determinarGanador = function(eleccion_jugador1, eleccion_jugador2) {
  let resultado;


  if (eleccion_jugador1 == eleccion_jugador2) {
    resultado = 0; // EMPATE
  } else if (
    (eleccion_jugador1 == "piedra" && eleccion_jugador2 == "tijera") ||
    (eleccion_jugador1 == "papel" && eleccion_jugador2 == "piedra") ||
    (eleccion_jugador1 == "tijera" && eleccion_jugador2 == "papel")
  ) {
    resultado = 1; // GANA JUGADOR 1
  }
  
  if(resultado!==0&&resultado!==1) {
    
    resultado = 2; // Jugador 2 gana
  }
  return resultado;
  }

  

generarRuta = function(nombre) {
  let ruta;
  let aleatorio;
aleatorio=generarElemento();
  if(nombre == "piedra")
     {
      ruta = "./imagenes/Piedra.png";
      aleatorio=ruta;
  } else if(nombre == "papel") {

      ruta = "./imagenes/Papel.png";
      aleatorio=ruta;
  } else  if(nombre == "tijera")   {
      ruta = "./imagenes/tijera.png";
      aleatorio=ruta;
  }
  return aleatorio=ruta;

};