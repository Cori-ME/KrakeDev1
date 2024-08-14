calcularPromedioNotas=function(){
    let numero1;
    numero1=recuperarFloat("txtNumero1");//recuperar primera caja de texto
    let numero2;
    numero2=recuperarFloat("txtNumero2");//recuperar segunda caja de texto
    let numero3;
    numero3=recuperarFloat("txtNumero3");//recuperar tercera caja de texto

 let promedio;
 promedio=calcularPromedio(numero1,numero2,numero3);// invocar calcular promedio
 mostrarTexto("lblNotas",promedio);//mostrar en pantalla
if(promedio<5&&promedio>0){
    let mensaje;
    mensaje="REPROBADO";
    mostrarTexto("lblNotas",mensaje)
    mostrarImagen("Imagen","reprobado.gif");

}
else if(promedio>=5&&promedio<=8){
    let mensaje;
    mensaje="BUEN TRABAJO";
    mostrarTexto("lblNotas",mensaje)
    mostrarImagen("Imagen","buentrabajo.gif");
}
else if(promedio>8&&promedio>=10){
    let mensaje;
    mensaje="EXCELENTE";
    mostrarTexto("lblNotas",mensaje)
    mostrarImagen("Imagen","excelente.gif");
}else{
    let mensaje;
    mensaje="DATOS INCORRECTOS";
    mostrarTexto("lblNotas",mensaje)
    mostrarImagen("Imagen","error.gif");
}
limpiar=function()
{
    mostrarTextoEnCaja("txtNumero1","0.0");
    mostrarTextoEnCaja("txtNumero2","0.0");
    mostrarTextoEnCaja("txtNumero3","0.0");
}
}