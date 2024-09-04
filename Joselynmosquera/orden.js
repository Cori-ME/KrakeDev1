
let personas = [
    { nombre: "Marcos", edad: 18 },
    { nombre: "Roberto", edad: 15 },
    { nombre: "Kate", edad: 25 },
    { nombre: "Diana", edad: 12 },
    { nombre: "Benja", edad: 5 }
];

agregarPersona=function(){
    
    let nombre=recuperarTexto("txtNombre");
    let edad=recuperarInt("txtEdad");

    if(nombre.length<=3){
        
        mostrarTexto("lblError1","");

    }else{
        mostrarTexto("lblError1","Deberia tener al menos 3 caracteres");

    }

    if(edad>=0&&edad<=100){
        
        mostrarTexto("lblError2","");

    }else{
        mostrarTexto("lblError2","Deberia ser un numero entre 0 y 100");

    }
   let nuevaPersona={}
    nuevaPersona.nombre=nombre;
    nuevaPersona.edad=edad;
    personas.push(nuevaPersona);
    alert("PERSONA AGREGADA CORRECTAMENTE");
    mostrarPersonas();
}
mostrarPersonas=function(){
    let cmpTabla=document.getElementById("divTabla");
    let contenidoTabla=
    "<table><tr>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th>"+
    "</tr>";

    let elementoPersonas;
    for(let i=0;i<personas.length-1;i++){
        elementoPersonas=personas[i];
        contenidoTabla+=
        "<tr><td>"+
    elementoPersonas.edad+
    "</td>"+
    "<td>"+
    elementoPersonas.nombre+
    "</td>"+
    "</tr>";
    }
    contenidoTabla+= "</table>";
    cmpTabla.innerHTML= contenidoTabla;
}
encontrarMayor=function(){
    
    let personaMayor=personas[0];
    
    for(let i=1;i<personas.length;i++){
        personaMayor=personas[i];
    
    if(personas[i].edad>personaMayor.edad){
       
             personaMayor=personas[i]; 
             
    

    }

}
if(personaMayor){

    mostrarTexto("lblResultado","PERSONA MAYOR ENCONTRADA "  + personaMayor);
    
}
return personaMayor;
}

determinarMayor=function(){
   let mayor= encontrarMayor();
   mostrarTexto("lblResultado","EL MAYOR ES:" + mayor.edad+"" + mayor.nombre);
   
}
encontrarMenor=function(){
    let personaMenor=personas[0];
    let elementoPersona;
    for(let i=1;i<personas.length;i++) {
     elementoPersona=personas[i];
     
      
     if(personas[i].edad>=personaMenor.edad){
         validacion=false;
              personaMenor==personas[i]; 
              alert("PERSONA MENOR ENCONTRADA",personaMenor)   
     
     }
    }
    if(personaMenor){

        mostrarTexto("lblResultado","PERSONA MENOR ENCONTRADA "  + personaMenor);
        
    }
 return personaMenor;
 }
 determinarMenor=function(){
    let menor= encontrarMenor(personas);
    mostrarTexto("lblResultado","EL MENOR ES:" + menor.edad+ "" + menor.nombre);
 }