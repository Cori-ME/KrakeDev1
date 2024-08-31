let esNuevo=false;

let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0803997303",nombre:"Joselyn",apellido:"Mosquera",sueldo:800.0}
]
mostrarEmpleado=function(){
    let cmpTabla=document.getElementById("tablaEmpleados");
        let contenidoTabla="<table><tr>"+
        "<th> CEDULA</th>"+
        "<th> NOMBRE</th>"+
        "<th> APELLIDO</th>"+
        "<th> SUELDO</th>"+
        "</tr>";
        let elementoEmpleado
        for(let i=0;i<empleados.length;i++){
               elementoEmpleado=empleados[i];
               contenidoTabla+="<tr><td>"+elementoEmpleado.cedula+"</td>"+
               "<td>"+elementoEmpleado.nombre+"</td>"
               +"<td>"+elementoEmpleado.apellido+"</td>"
               +"<td>"+elementoEmpleado.sueldo+"</td>"
               +"</tr>"

        }
        contenidoTabla+="</table>"
        cmpTabla.innerHTML=contenidoTabla;
}
habilitar=function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");


}
desahabilitar=function(){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");


}


ejecutarNuevo=function(){
    esNuevo=true;
    
     habilitar();
     
}
mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleado();
    desahabilitar();
        
}
mostrarOpcionRol=function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");


        
}
mostrarOpcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divRol");
    ocultarComponente("divEmpleado");
   


        
}




