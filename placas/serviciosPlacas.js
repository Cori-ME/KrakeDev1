validarEstructura = function (placa) {
  let errorplaca="";
let verificar=false;
let longitudPlaca = placa.length;
  let PrimerCaracter= placa.charAt(0);

  let segundoCaracter= placa.charAt(1);
  let terCaracter = placa.charAt(2);
  let cuartoCaracter = placa.charAt(3);
  let quintoCaracter = placa.charAt(4);
  let sextoCaracter = placa.charAt(5);
  let septimoCaracter = placa.charAt(6);
  let octavoCaracter = placa.charAt(7);


  if (longitudPlaca==7 || longitudPlaca==8) {
    verificar=true;
    errorplaca="solo puede tener 7 u 8 caracteres";
  
  } 

  if (!esMayuscula(PrimerCaracter)) {
 verificar=false;
    errorplaca = "es una letra mayuscula el primer caracter";
}

  if (!esMayuscula(segundoCaracter)) {
    verificar = false;
   errorplaca = "es una letra mayuscula el segundo caracter";
  }
  if (!esMayuscula(terCaracter)) {
    verificar = false;
  
    errorplaca="es una letra mayuscula el tercer caracter";
  }
  if (!esGuion(cuartoCaracter)) {
    verificar = false;
  
    errorplaca="es un guion el cuarto caracter";
  }
  if (!esDigito(quintoCaracter)) {
    verificar = false;
  
    errorplaca="es un digito el quinto caracter";
  }

  if (!esDigito(sextoCaracter)) {
    verificar = false;
  
    errorplaca="es un digito el sexto caracter";
   }
  if (!esDigito(septimoCaracter)) {
    verificar = false;
  
    errorplaca="es un digito el septimo caracter";
  }

if (longitudPlaca!==8){
  
  if(!esDigito(octavoCaracter)) {
  verificar = false;
  errorplaca="es un digito el octavo caracter";
  
} 
} 
 
    return errorplaca;
  }  
 



obtenerProvincia = function(placa) {
  let mensajeProvincia;
let verificar;
  let nombreProvincia=placa.charAt(1);


  if(nombreProvincia=="A"){
    verificar=true;
    mensajeProvincia="Azuay";
  }
  
  
  if(nombreProvincia=="B"){
    verificar=true;
    mensajeProvincia="BOLIVAR";
  }
    
    
  if(nombreProvincia=="U"){
    verificar=true;
    mensajeProvincia="CAÑAR";
  }
  if(nombreProvincia=="C"){
    verificar=true;
    mensajeProvincia="CHARCHI";
  }
  if(nombreProvincia=="X"){
    verificar=true;
    mensajeProvincia="COTOPAXI";
  }
  if(nombreProvincia=="H"){
    verificar=true;
    mensajeProvincia="CHIMBORAZO";
  }
  if(nombreProvincia=="O"){
    verificar=true;
    mensajeProvincia="EL ORO";
  }
  if(nombreProvincia=="E"){
    verificar=true;
    mensajeProvincia="ESMERALDAS";
  }
  if(nombreProvincia=="W"){
    verificar=true;
    mensajeProvincia="GALAPAGOS";
  }
  if(nombreProvincia=="G"){
    verificar=true;
    mensajeProvincia="GUAYAS";
  }
  if(nombreProvincia=="I"){
    verificar=true;
    mensajeProvincia="IMBABURA";
  }
  if(nombreProvincia=="L"){
    verificar=true;
    mensajeProvincia="LOJA";
  }
  if(nombreProvincia=="R"){
    verificar=true;
    mensajeProvincia="LOS RIOS";
  }
  if(nombreProvincia=="M"){
    verificar=true;
    mensajeProvincia="MANABI";
  }
  if(nombreProvincia=="V"){
    verificar=true;
    mensajeProvincia="MORONA SANTIAGO";
  }
  if(nombreProvincia=="N"){
    verificar=true;
    mensajeProvincia="NAPO";
  }
  if(nombreProvincia=="S"){
    verificar=true;
    mensajeProvincia="PASTAZA";
  }
  if(nombreProvincia=="P"){
    verificar=true;
    mensajeProvincia="PICHINCHA";
  }
  if(nombreProvincia=="K"){
    verificar=true;
    mensajeProvincia="SUCUMBIOS";
  }
  if(nombreProvincia=="Q"){
    verificar=true;
    mensajeProvincia="ORELLANA";
  }
  if(nombreProvincia=="T"){
    verificar=true;
    mensajeProvincia="TUNGURAHUA";
  }
  if(nombreProvincia=="Z"){
    verificar=true;
    mensajeProvincia="ZAMORA CHINCHIPE";
  }
  if(nombreProvincia=="Y"){
    verificar=true;
    mensajeProvincia="SANTA ELENA";
  }
    
  
return mensajeProvincia;
}


obtenerTipoVehiculo=function(placa){
  let verificar=false;
  let vehiculo;
 
 
 let mensajeTipoVehiculo;

vehiculo=placa.charAt(1);

if(vehiculo=="A"||vehiculo=="z"){
  verificar=true;
  mensajeTipoVehiculo="VEHICULOS COMERCIALES";
}


if(vehiculo=="M"){
  verificar=true;
  mensajeTipoVehiculo="VEHICULO MUNICIPALES";
}
  
  
  if(vehiculo=="R"){
    verificar=true;
    mensajeTipoVehiculo="REMOLQUES";
  }
  if(vehiculo=="S"){
    verificar=true;
    mensajeTipoVehiculo="VEHICULOS DEL GOBIERNO PROVINCIAL"
  }
  if(vehiculo=="X"){
    verificar=true;
    mensajeTipoVehiculo="VEHICULOS DE USO OFICIAL"
  }
  

  return mensajeTipoVehiculo; 


}


obtenerDiaPicoYPlaca=function(placa){
 let verificar=true;
 let mensajeDia;
  let diaPico=parseInt(placa.charAt(placa.length - 1));

if(diaPico==1||diaPico==2){
  verificar=false
   mensajeDia="LUNES";
}
   if(diaPico==3||diaPico==4){
    verificar=false
     mensajeDia="MARTES";
   }
     if(diaPico==5||diaPico==6){
      verificar=false
       mensajeDia="MIERCOLES";
     }
     if(diaPico==7||diaPico==8){
      verificar=false
       mensajeDia="JUEVES";
}
if(diaPico==9||diaPico==0){
  verificar=false
   mensajeDia="VIERNES";
}
if(diaPico=="SABADO"&&diaPico=="DOMINGO"||diaPico=="feriados"){
  verificar=false
   mensajeDia="LIBRE DE CIRCULACION";
}

return mensajeDia;  // Si no coincide con ningún caso

}
