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

    componente=document.getElementById(idComponente).value;
    
    return componente;
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