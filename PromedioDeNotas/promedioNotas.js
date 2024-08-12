calcularPromedioNotas=function(){
    let numero1;
    numero1=recuperarFloat("txtNumero1");//recuperar primera caja de texto
    let numero2;
    numero2=recuperarFloat("txtNumero2");//recuperar segunda caja de texto
    let numero3;
    numero3=recuperarFloat("txtNumero3");//recuperar tercera caja de texto

 let promedioCalificaciones;
 promedioCalificaciones=calcularPromedio(numero1,numero2,numero3);// invocar calcular promedio
 mostrarTexto("lblNotas",promedioCalificaciones);//mostrar en pantalla
 
}
