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

modificarAtributos=function(){
    let cuenta={
        numero:"5323423423",
        saldo:0.0

    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}
crearCliente=function(){
    let cliente={
        cedula:"171231",
        nombre:"Juan"
    }
   let cliente1={};// se crea el objeto sin atributos
    cliente1.nombre="Romeo";
    cliente1.apellido="Salcedo";
   cliente1.cedula="123123";
}
incrementarSaldo=function(cuenta,monto){
    cuenta.saldo+=monto;
}
probarIncrementoSaldo=function(){
    let cta={numero:"23424",saldo:34.0}
    incrementarSaldo(cta,100);
    console.log(cta.saldo);
}

determinarMayor=function(persona1,persona2){
    if(persona1.edad>persona2.edad){
        return persona1
    }
    else if(persona2.edad>persona1.edad){
        return persona2;
    }
    else{
        return null;
    }
}

probarDeterminarMayor=function() {// reciben objetos
    let per1={nombre:"Daniel",edad:45};
    let per2={nombre:"Luisa",edad:48};
     let mayor;
     mayor=determinarMayor(per1,per2);
     if(mayor!==null){
        console.log("El mayor es;"+mayor.nombre);
     }
}     

