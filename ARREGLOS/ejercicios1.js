let notas=[];
agregarElemento=function(){
//notas.push(5);
//notas.push(10);
//console.log(notas.length);

}
recorrerArreglo=function(){
    for(let indice=0;indice<notas.length;indice++){
      let notaR;
      notaR=notas[indice]; 
      console.log(notaR) ;
    }
}
probarAgregar=function(){
    let notaRecuperada;
    notaRecuperada=recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}
agregarNota=function(nota){
notas.push(nota);
}
ejecutarPromedio=function(){
    let calculoPromedio;
    calculoPromedio=calcularPromedio();
    mostrarTexto("lblPromedio", calculoPromedio);  
    console.log("cantidad",notas.length);
       
}

calcularPromedio=function(){
    let sumaNotas=0;
    let promedio;
    for(let indice=0;indice<notas.length;indice++){
        sumaNotas+=notas[indice];
}
promedio=sumaNotas/notas.length;

return promedio;
}