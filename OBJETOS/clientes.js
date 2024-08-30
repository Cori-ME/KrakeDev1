let clientes=[
    
    {cedula:"123213",nombre:"Juan",edad:20},
    {cedula:"222222",nombre:"Mario",edad:50},
    {cedula:"333333",nombre:"Pepe",edad:22}
];
guardarCambios=function(){
    
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarFloat("txtEdad");
    let datosCliente={};
    datosCliente.cedula=valorCedula;
    datosCliente.nombre=valorNombre;
    datosCliente.edad=valorEdad;
    modificarCliente(datosCliente);
    mostrarClientes();
}
modificarCliente=function(cliente){
  let clienteEncontrado=buscarClientes(cliente.cedula);
  if(clienteEncontrado!==null){
    clienteEncontrado.nombre=cliente.nombre;
    clienteEncontrado.edad=cliente.edad;
  }
}
ejecutarBusqueda=function(){
    let valorCedula=recuperarTexto("txtCedulaBusqueda");
       let cliente=buscarClientes(valorCedula);
       if(cliente==null){
        alert("cliente no encontrado");
       }else{
        mostrarTextoEnCaja("txtCedula",cliente.cedula);
        mostrarTextoEnCaja("txtNombre",cliente.nombre);
        mostrarTextoEnCaja("txtEdad",cliente.edad);
       }
}
crearCliente=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarFloat("txtEdad");
    let nuevoCliente={};
    nuevoCliente.cedula=valorCedula;
    nuevoCliente.nombre=valorNombre;
    nuevoCliente.edad=valorEdad;
    agregarClientes(nuevoCliente);
    mostrarClientes(nuevoCliente);

}
agregarClientes=function(cliente){
    let resultado;
    resultado=buscarClientes(cliente.cedula);
       if(resultado==null){
    clientes.push(cliente);
    alert("Cliente agregado");
    
} else{
    alert("ya existe el cliente con esa cedula"+cliente.cedula);
}

}
buscarClientes=function(cedula){
    let elementoCliente;
    let clienteEncontrado=null;
    for(let i=0;i<clientes.length;i++){
            elementoCliente=clientes[i];
            if(elementoCliente.cedula== cedula){
                       clienteEncontrado=elementoCliente;
                       break;
            }
    }
    return clienteEncontrado;
}

    mostrarClientes=function(){
        let cmpTabla=document.getElementById("tablaClientes");
        let contenidoTabla="<table><tr>"+
        "<th> CEDULA</th>"+
        "<th> NOMBRE</th>"+
        "<th> EDAD</th>"+
        "</tr>";
        let elementoCliente
        for(let i=0;i<clientes.length;i++){
               elementoCliente=clientes[i];
               contenidoTabla+="<tr><td>"+elementoCliente.cedula+"</td>"+
               "<td>"+elementoCliente.nombre+"</td>"
               +"<td>"+elementoCliente.edad+"</td>"
               +"</tr>"

        }
        contenidoTabla+="</table>"
        cmpTabla.innerHTML=contenidoTabla;
    }
