probarAtributos=function(){
    let persona = {
        nombre:"Pedro",
        apellido:"Morales",
        edad:24,
        estaVivo:true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo==false){
        console.log("no esta vivo")
    }
    else {
        console.log("si esta vivo")

    }
}
crearProducto=function(){
    let producto1={
        nombre:"Cepillos de bambu",
        precio:14.99,
        stock:6
    }
    console.log(producto1.nombre);
    let producto2={
        nombre:"Buzo deportivo",
        precio:32.75,
        stock:3
    }
    console.log(producto2.precio);
    if(producto1.stock>producto2.stock){
        console.log(" producto 1 tiene mayor stock");

    }
    else if(producto2.stock>producto1.stock) {
        console.log(" producto 2 tiene mayor stock");

    }
    else{
        console.log(" Ambos productos  tiene el mismo  stock");

    }
}
