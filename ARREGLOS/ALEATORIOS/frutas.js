let frutas=["pera","manzana","banana"];
buscar=function(fruta){
    let elemento;
    let frutaEncontrada=null;
    for(i=0;i<frutas.length;i++){
        elemento=frutas[i];
        if(fruta==elemento){
frutaEncontrada=elemento;
break;
        }
    }
    return frutaEncontrada;
}
probarBusqueda=function(){
    let frutaIngresada;
    frutaIngresada=recuperarTexto("lblFruta");
    let resultado;
    resultado=buscar(frutaIngresada);
    if(resultado==null){
        alert("no existe la fruta");
    }else {
        alert(frutaIngresada+" ha sido encontrada");
    }

}