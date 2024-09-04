let validacion=true;
let personas = [
    { nombre: "Marcos", edad: 18 },
    { nombre: "Roberto", edad: 15 },
    { nombre: "Kate", edad: 25 },
    { nombre: "Diana", edad: 12 },
    { nombre: "Benja", edad: 15 }
];

agregarPersona=function(){
    
    let nombre=recuperarTexto("txtNombre");
    let edad=recuperarInt("txtEdad");

    if(nombre.length>=3){
        validacion=true;
        mostrarTexto("lblNombre","");

    }else{
        mostrarTexto("lblNombre","Deberia tener al menos 3 caracteres");

    }
    if(edad>=0&&edad<=100){
        validacion=true;
        mostrarTexto("lblEdad","");

    }else{
        mostrarTexto("lblEdad","Deberia ser un numero entre 0 y 100");

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
buscarMayor=function(){
    
    let personaMayor=[0];
    let comparaPersona=personas.length;
    for(let i=0;i<personas.length;i++){
        comparaPersona=personas[i];
    }
    if(comparaPersona.edad>personaMayor.edad){
        validacion=true;
             personaMayor==comparaPersona; 
             alert("PERSONA MAYOR ENCONTRADA")   
    }else if(personaMayor.edad>comparaPersona.edad){
        comparaPersona==personaMayor; 
        validacion=true;

    }else{
        alert("NO SE ENCUENTRA A LA PERSONA MAYOR");

    }

}
encontrarMayor=function(){
   let personaMayor=0;
   let elementoPersona;
   for(let i=1;i<personas.length;i++) {
    elementoPersona=personas[i];
    console.log("EL NOMBRE Y SU EDAD ES:",elementoPersona);
     personaMayor=personas[0];;
   
    
    if(personaMayor.edad>=personas[i].edad){
        validacion=true;
             personaMayor==personas[i]; 
             alert("PERSONA MAYOR ENCONTRADA",personaMayor)   
    

    }else{
        alert("NO SE ENCUENTRA A LA PERSONA MAYOR");

    }
   }
return personaMayor;
}
determinarMayor=function(){
   let mayor= encontrarMayor();
   alert("EL NOMBRE  Y SU EDAD ES:" ,mayor);
   
}
encontrarMenor=function(){
    let personaMenor=personas[0];
    let elementoPersona;
    for(let i=1;i<personas.length;i++) {
     elementoPersona=personas[i];
     console.log("EL NOMBRE Y SU EDAD ES:",elementoPersona);
      
     if(personaMenor.edad>=personas[i].edad){
         validacion=false;
              personaMenor==personas[i]; 
              alert("PERSONA MENOR ENCONTRADA",personaMenor)   
     
     }else{
         alert("NO SE ENCUENTRA A LA PERSONA MAYOR");
 
     }
    }
 return personaMenor;
 }
 determinarMenor=function(){
    let menor= encontrarMenor();
    alert("EL NOMBRE  Y SU EDAD ES:" ,menor);
    
 }