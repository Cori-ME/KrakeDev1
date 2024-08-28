numeroAleatorio=[];
crearNumeroAleatorio=function(){
    let aleatorios;
    aleatorios=Math.random(1-100);
    numeroMultiplicado=aleatorios*3;
    let aleatorioEntero=parseInt(aleatorios);
    let valorAleatorio;
    valorAleatorio=aleatorioEntero+1;

    return valorAleatorio;
}
generarAleatorio=function(){
    let validacion=true;
    let aleatorio=0;
    let aleatorioUsuario;
    aleatorioUsuario=recuperarInt("txtAleatorio");
    if(aleatorio>5||aleatorio<20){
          validacion=true;
    }
    for(i=0;i<aleatorioUsuario;i++){
        console.log("numeros Aleatorios",i);
    }
}
