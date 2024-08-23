let puntoUsuario = 0;
let puntoComputador = 0;

jugar = function (seleccionado) {
  // Generar la elección de la computadora
  let juego = generarElemento();
  
  // Obtener la imagen correspondiente a la elección de la computadora
  let imagen = generarRuta(juego);
  mostrarImagen("imagenComputadora", imagen);
  
  // Determinar el ganador entre el jugador y la computadora
  let resultado = determinarGanador( seleccionado,juego);

  // Actualizar el resultado según quien gane, pierda o empate
  if (resultado == 0) {
    mostrarTexto("lblResultado", "EMPATE");
    
  }
    /*
  } else if (resultado == 1) {
    mostrarTexto("lblResultado", "GANASTE LA PARTIDA");
    puntoUsuario =puntoUsuario + 1;
*/
   else if (resultado == 1) {
    mostrarTexto("lblResultado", "GANASTE LA PARTIDA");
    puntoUsuario =puntoUsuario + 1;
  } 
  else{
    mostrarTexto("lblResultado", "PERDISTE LA PARTIDA");
    puntoComputador =puntoComputador + 1;
  }

  // Mostrar el puntaje actualizado
  mostrarTexto("lblPuntoComputadora", puntoComputador);
  mostrarTexto("lblPuntoUsuario", puntoUsuario);

  // Comprobar si alguien ha ganado el juego (5 puntos)
  if (puntoUsuario == 5) {
    mostrarTexto("lblFin", "GANASTE EL JUEGO");
  } 
  if (puntoComputador == 5) {
    mostrarTexto("lblFin", "COMPUTADOR HA VENCIDO");
  }
};


limpiar = function () {
  // Reinicia los puntos de la computadora y el usuario
  puntoComputador = 0;
  puntoUsuario = 0;

  // Limpia los textos de resultados en la interfaz
  mostrarTexto("lblResultado", "");
  mostrarTexto("lblFin", "");
  mostrarTexto("lblPuntoComputadora", puntoComputador);
  mostrarTexto("lblPuntoUsuario", puntoUsuario);

  // Limpia la imagen de la computadora
  mostrarImagen("imagenComputadora", "");

  // Aquí cerramos la función correctamente

};
