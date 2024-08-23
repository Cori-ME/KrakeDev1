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
    cadena = "Piedra";
  } else if (aleatorio == 2) {
    cadena = "Papel";
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
    (eleccion_jugador1 == "Piedra" && eleccion_jugador2 == "tijera") ||
    (eleccion_jugador1 == "Papel" && eleccion_jugador2 == "Piedra") ||
    (eleccion_jugador1 == "tijera" && eleccion_jugador2 == "Papel")
  ) {
    resultado = 1; // GANA JUGADOR 1
  }
  
  if (resultado !== 0 && resultado !== 1) {
    
    resultado = 2; // Jugador 2 gana
  }
  return resultado;
  }

  

generarRuta = function(nombre) {
  let ruta;
  let aleatorio;
aleatorio=generarElemento();
  if(aleatorio === "Piedra") {
      ruta = "./imagenes/Piedra.png";
  } else if(aleatorio === "tijera") {
      ruta = "./imagenes/tijera.png";
  } else {
      ruta = "./imagenes/Papel.png";
  }
  return ruta;

};