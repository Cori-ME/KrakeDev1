function validarPlaca() {
  let usuarioPlaca;
  usuarioPlaca = recuperarTexto("txtPlaca");
  
  let diaPico;
  let vehiculo;
let erroresEstructura;
  let provincia;
 
  erroresEstructura = validarEstructura(usuarioPlaca);

  if (erroresEstructura!== null) {
    
    mostrarTexto("lblPlaca", "Estructura CORRECTA");
  } else {
     
    mostrarTexto("lblErrorPlaca","Estructura incorrecta");
  }
  

  provincia = obtenerProvincia(usuarioPlaca);

  if (provincia != null) {
   
    
    mostrarTexto("lblProvincia",provincia);
  } else {
    
    mostrarTexto("lblProvincia", " Provincia incorrecta");
    
  }

  vehiculo = obtenerTipoVehiculo(usuarioPlaca);

  if (vehiculo != null) {
  
mostrarTexto("lblTipo",vehiculo);
  } else {
    

    mostrarTexto("lblTipo", "vehiculo incorrecto");

    
  }


  diaPico = obtenerDiaPicoYPlaca(usuarioPlaca);

  if (diaPico != null) {
    mostrarTexto("lblDiaPico", diaPico);  // Mostrar el día de Pico y Placa
  } else {
    mostrarTexto("lblDiaPico", "LIBRE DE CIRCULACIÓN");  // Mostrar que está libre
  }
  

}
limpiar=function(){
    mostrarTextoEnCaja("txtPlaca","");
    

    
}


