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
generarTabla=function(){
     let contenidoTabla="";
     let cmpTabla=document.getElementById("divTabla");

     cont+=enidoTabla+="<table><tr><td>UNO</td></tr>"+
     "<tr><td>DOS</td></tr></table>"
     cmpTabla.innerHTML=contenidoTabla;
}
mostrarNotas=function(){
    let cmpTabla=document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>NOTA</th></tr>";
    let miNota;
    for(let i=0;i<notas.length;i++){
      miNota=notas[i];
      contenidoTabla+="<tr><td>";
      contenidoTabla+=miNota;
      contenidoTabla+="</tr></td>";

    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;

}
probarAgregar=function(){
    let notaRecuperada;
    notaRecuperada=recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}
agregarNota=function(nota){
notas.push(nota);
mostrarNotas();
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