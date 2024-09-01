let esNuevo=false;

let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0803997303",nombre:"Joselyn",apellido:"Mosquera",sueldo:800.0}
]

habilitar=function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");


}
desahabilitar=function(){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
    


}


ejecutarNuevo=function(){
    esNuevo=true;
    
     habilitar();
     
}
buscarEmpleado=function(cedula){
    let elementoEmpleado;
    let empleadoEncontrado=null;
    for(let i=0;i<empleados.length;i++){
            elementoEmpleado=empleados[i];
            if(elementoEmpleado.cedula== cedula){
                       empleadoEncontrado=elementoEmpleado;
                       break;
            }
    }
    return empleadoEncontrado;
}

agregarEmpleado=function(empleado){
    let resultado;
    resultado=buscarEmpleado(empleado.cedula);
       if(resultado==null){
    empleados.push(empleado);
    return true;
    
    
} else{
    return false;
}

}
guardar=function(){
    let validar=false;
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorApellido=recuperarTexto("txtApellido");
    let valorSueldo=recuperarFloat("txtSueldo");
// Verifica que tenga 10 caracteres y que sean todos números
     if(valorCedula.length==10&&/^[0-9]+$/.test(valorCedula))
     {

        validar=true;
         }
         else{
            mostrarTexto("lblErrorCedula","deberia tener examente 10 caractere");

         }
     if(valorNombre.length==3&&/^[A-Z]+$/.test(valorNombre)) {
        validar=true;
     }else{
        mostrarTexto("lblErrorNombre","deberia tener examente 3 caractere");

     }
     if(valorApellido.length==3&&/^[A-Z]+$/.test(valorApellido)){
        validar=true;
    }else{
        mostrarTexto("lblErrorApellido","deberia tener examente 3 caractere");

    }
     
     if(!isNaN(valorSueldo) && valorSueldo >= 400 && valorSueldo <= 5000){
        validar=true;
        
     }else{
        mostrarTexto("lblErrorSueldo","deberia ser un numero entre 400 y 5000");
     }
     
     

     if(validar==true&&esNuevo==true){

        let datosEmpleado={};
        datosEmpleado.cedula=valorCedula;
        datosEmpleado.nombre=valorNombre;
        datosEmpleado.apellido=valorApellido;
        datosEmpleado.sueldo=valorSueldo;

       let agregado= agregarEmpleado(datosEmpleado);
       if(agregado==true){
        alert("EmPleado guardado correctamente");
        mostrarEmpleado(agregado);
        desahabilitar();

       }
       else{
        alert("ya existe un empleado con la cedula",valorCedula);
       }
    }
    
       else if(validar==true||esNuevo==false){
        let empleadoEncontrado=buscarEmpleado(valorCedula);
     
        if(empleadoEncontrado){
         empleadoEncontrado.nombre=valorNombre;
         empleadoEncontrado.apellido=valorApellido;
         empleadoEncontrado.sueldo=valorSueldo;
         alert("EMPLEADO MODIFICADO EXISTOSAMENTE");
         mostrarEmpleado(empleadoEncontrado);
         desahabilitar();
     }
      
     } 
     


        }
     
    

ejecutarBusqueda=function(){
    let valorCedula=recuperarTexto("txtBusquedaCedula");
       let empleado=buscarEmpleado(valorCedula);
       if(empleado==null){
        alert("empleado no existe");
       }else{
        mostrarTextoEnCaja("txtCedula",empleado.cedula);
        mostrarTextoEnCaja("txtNombre",empleado.nombre);
        mostrarTextoEnCaja("txtApellido",empleado.apellido);
        mostrarTextoEnCaja("txtSueldo",empleado.sueldo);
         habilitar();
         deshabilitarComponente("txtCedula");
       }
}
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

function limpiar() {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    mostrarTexto("lblErrorCedula", "");
    mostrarTexto("lblErrorNombre", "");
    mostrarTexto("lblErrorApellido", "");
    mostrarTexto("lblErrorSueldo", "");
    deshabilitar();
    esNuevo = false;
}


