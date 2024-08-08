saludar=function(){
    //recuperar el valor de la caja de texto txtNombre
    let nombre;
    nombre=recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto txtApellido
    let apellido;

    apellido=recuperarTexto("txtApellido");
//recuperar el valor de la caja de texto txtEdad
let edad;
edad=recuperarInt("txtEdad");
//recuperar el valor de la caja de texto txtApellido
let estatura;
estatura=recuperarFlotante("txtEstatura");

 let mensajeBienvenida;
 mensajeBienvenida="Bienvenido  "+nombre+"  "+apellido;

 mostrarTexto("lblResultado",mensajeBienvenida);
 mostrarImagen("imgSaludo","./imagenes/hiBts.gif");
 mostrarTextoEnCaja("txtNombre","");

}

mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje;

}
mostrarTextoEnCaja=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value=mensaje;

}

mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src=rutaImagen;

}



recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}
recuperarInt=function(idComponente){
    
   let  valorCaja = recuperarTexto(idComponente);
   let  valorEntero = parseInt(valorCaja);
    return valorEntero;
    
}
recuperarFlotante=function(idComponente){
    
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
    
}


