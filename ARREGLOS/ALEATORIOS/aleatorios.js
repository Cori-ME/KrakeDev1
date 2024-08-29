 let numeroAleatorio=[];
crearNumeroAleatorio=function(){
    let aleatorios;
    aleatorios=Math.random();
    numeroMultiplicado=aleatorios*100;
    let aleatorioEntero=Math.floor(numeroMultiplicado);// Redondea hacia abajo para obtener un entero
    let valorAleatorio;
    valorAleatorio=aleatorioEntero+1;

    return valorAleatorio;
}
generarAleatorio=function(){
    let validacion=true;
    let aleatorio=0;
    let aleatorioUsuario;
    aleatorioUsuario=recuperarInt("txtAleatorio");
    if(aleatorio<5&&aleatorio<20){
          validacion=false;
    }
    for(i=0;i<aleatorioUsuario;i++){
        
        mostrarTexto("lblAleatorio",i);

       let aleat;
       aleat =crearNumeroAleatorio(aleatorioUsuario);
       numeroAleatorio.push(aleat);
      
    }
    mostrarResultados();
}
mostrarResultados=function(arregloNumeros){
   
    let cmpTabla=document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>ALEATORIO</th></tr>";
    let miAleatorio;
    for(let i=0;i<numeroAleatorio.length;i++){
      miAleatorio=numeroAleatorio[i];
      contenidoTabla+="<tr><td>";
      contenidoTabla+=miAleatorio;
      contenidoTabla+="</tr></td>";

    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;


}


