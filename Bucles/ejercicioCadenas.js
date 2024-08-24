ejecutarPrueba1=function(){
   let mensaje;
   mensaje=recuperarTexto("txtCadena");
   recorrerCadena(mensaje); 
}
recorrerCadena=function(cadena){
//0123
//juan
let caracter;
for (let posicion = 0; posicion<=cadena.length;posicion++ ) {
   caracter=cadena.charAt(posicion);
     console.log("caracter"+caracter+"posicion"+posicion);
}
for(let posicion=0;posicion<=cadena.length-1;posicion++){

    caracter=cadena.charAt(posicion);
     console.log("caracter"+caracter+"posicion"+posicion);
}
}
ejecutarPrueba2=function(){
    let mensaje1;
    mensaje1=recuperarTexto("txtCadena");
    invertirCadena(mensaje1); 
 }
 invertirCadena=function(cadena){
 //0123
 //juan
 let caracter;
 let invertir="";
 
 for (let posicion = cadena.length-1; posicion>=0;posicion-- ) {
    caracter=cadena.charAt(posicion);
    invertir+=caracter;
 }
 mostrarTexto("lblResultado",invertir);

 }
 