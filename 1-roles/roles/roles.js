let esNuevo = false;

let empleados = [
  { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
  {
    cedula: "0914632123",
    nombre: "Luisa",
    apellido: "Gonzalez",
    sueldo: 900.0,
  },
  {
    cedula: "0803997303",
    nombre: "Joselyn",
    apellido: "Mosquera",
    sueldo: 800.0,
  },
];
let roles=[];
habilitar = function () {
  habilitarComponente("txtCedula");
  habilitarComponente("txtNombre");
  habilitarComponente("txtApellido");
  habilitarComponente("txtSueldo");
  habilitarComponente("btnGuardar");
};
desahabilitar = function () {
  deshabilitarComponente("txtCedula");
  deshabilitarComponente("txtNombre");
  deshabilitarComponente("txtApellido");
  deshabilitarComponente("txtSueldo");
  deshabilitarComponente("btnGuardar");
};

ejecutarNuevo = function () {
  esNuevo = true;

  habilitar();
};
buscarEmpleado = function (cedula) {
  let elementoEmpleado;
  let empleadoEncontrado = null;
  for (let i = 0; i < empleados.length; i++) {
    elementoEmpleado = empleados[i];
    if (elementoEmpleado.cedula == cedula) {
      empleadoEncontrado = elementoEmpleado;
      break;
    }
  }
  return empleadoEncontrado;
};

agregarEmpleado = function (empleado) {
  let resultado;
  resultado = buscarEmpleado(empleado.cedula);
  if (resultado == null) {
    empleados.push(empleado);
    return true;
  } else {
    return false;
  }
};
guardar = function () {
  let validar = false;
  let valorCedula = recuperarTexto("txtCedula");
  let valorNombre = recuperarTexto("txtNombre");
  let valorApellido = recuperarTexto("txtApellido");
  let valorSueldo = recuperarFloat("txtSueldo");
  // Verifica que tenga 10 caracteres y que sean todos números
  if (valorCedula.length == 10 && /^[0-9]+$/.test(valorCedula)) {
    validar = true;
  } else {
    mostrarTexto("lblErrorCedula", "deberia tener examente 10 caractere");
  }
  if (valorNombre.length == 3 && /^[A-Z]+$/.test(valorNombre)) {
    validar = true;
  } else {
    mostrarTexto("lblErrorNombre", "deberia tener examente 3 caractere");
  }
  if (valorApellido.length == 3 && /^[A-Z]+$/.test(valorApellido)) {
    validar = true;
  } else {
    mostrarTexto("lblErrorApellido", "deberia tener examente 3 caractere");
  }

  if (!isNaN(valorSueldo) && valorSueldo >= 400 && valorSueldo <= 5000) {
    validar = true;
  } else {
    mostrarTexto("lblErrorSueldo", "deberia ser un numero entre 400 y 5000");
  }

  if (validar == true && esNuevo == true) {
    let datosEmpleado = {};
    datosEmpleado.cedula = valorCedula;
    datosEmpleado.nombre = valorNombre;
    datosEmpleado.apellido = valorApellido;
    datosEmpleado.sueldo = valorSueldo;

    let agregado = agregarEmpleado(datosEmpleado);
    if (agregado == true) {
      alert("EmPleado guardado correctamente");
      mostrarEmpleado(agregado);
      desahabilitar();
    } else {
      alert("ya existe un empleado con la cedula", valorCedula);
    }
  } else if (validar == true || esNuevo == false) {
    let empleadoEncontrado = buscarEmpleado(valorCedula);

    if (empleadoEncontrado) {
      empleadoEncontrado.nombre = valorNombre;
      empleadoEncontrado.apellido = valorApellido;
      empleadoEncontrado.sueldo = valorSueldo;
      alert("EMPLEADO MODIFICADO EXISTOSAMENTE");
      mostrarEmpleado(empleadoEncontrado);
      desahabilitar();
    }
  }
};

ejecutarBusqueda = function () {
  let valorCedula = recuperarTexto("txtBusquedaCedula");
  let empleado = buscarEmpleado(valorCedula);
  if (empleado == null) {
    alert("empleado no existe");
  } else {
    mostrarTextoEnCaja("txtCedula", empleado.cedula);
    mostrarTextoEnCaja("txtNombre", empleado.nombre);
    mostrarTextoEnCaja("txtApellido", empleado.apellido);
    mostrarTextoEnCaja("txtSueldo", empleado.sueldo);
    habilitar();
    deshabilitarComponente("txtCedula");
  }
};
mostrarEmpleado = function () {
  let cmpTabla = document.getElementById("tablaEmpleados");
  let contenidoTabla =
    "<table><tr>" +
    "<th> CEDULA</th>" +
    "<th> NOMBRE</th>" +
    "<th> APELLIDO</th>" +
    "<th> SUELDO</th>" +
    "</tr>";
  let elementoEmpleado;
  for (let i = 0; i < empleados.length; i++) {
    elementoEmpleado = empleados[i];
    contenidoTabla +=
      "<tr><td>" +
      elementoEmpleado.cedula +
      "</td>" +
      "<td>" +
      elementoEmpleado.nombre +
      "</td>" +
      "<td>" +
      elementoEmpleado.apellido +
      "</td>" +
      "<td>" +
      elementoEmpleado.sueldo +
      "</td>" +
      "</tr>";
  }
  contenidoTabla += "</table>";
  cmpTabla.innerHTML = contenidoTabla;
};
mostrarOpcionEmpleado = function () {
  mostrarComponente("divEmpleado");
  ocultarComponente("divRol");
  ocultarComponente("divResumen");
  mostrarEmpleado();
  desahabilitar();
};
mostrarOpcionRol = function () {
  mostrarComponente("divRol");
  ocultarComponente("divEmpleado");
  ocultarComponente("divResumen");
  mostrarRoles()

  desahabilitar();
};
mostrarOpcionResumen = function () {
  mostrarComponente("divResumen");
  ocultarComponente("divRol");
  ocultarComponente("divEmpleado");
};
buscarPorRol = function () {
  let valorIngresado;
  valorIngresado = recuperarTexto("txtBusquedaCedulaRol");

  let rol = buscarEmpleado(valorIngresado);

  if (rol !== null) {
    mostrarTexto("infoCedula", rol.cedula);

    mostrarTexto("infoSueldo", rol.sueldo);
    mostrarTexto("infoNombre", rol.nombre);
  } else {
    alert("no existe el empleado");
  }
};
calcularAporteEmpleado = function (sueldo) {
  let aporte = (sueldo * 9.45) / 100;
  return aporte;
};
calcularValorAPagar = function (sueldo, aporteIes, decuento) {
  let calcularValor = sueldo - aporteIes - decuento;
  return calcularValor;
};

calcularRol = function () {
  
  let sueldoE = recuperarTextoDiv("infoSueldo");
  let descuento = recuperarFloat("txtDescuentos");
  console.log("infoSueldo"+sueldoE,"txtDescuentos"+descuento);

  if (descuento >= 0 && descuento <= sueldoE){  
     

    let aportes = calcularAporteEmpleado(sueldoE);
    mostrarTexto("infoIESS", aportes.toFixed(2));
   
    let valorA = calcularValorAPagar(sueldoE, aportes, descuento);
    mostrarTexto("infoPago", valorA.toFixed(2));
    habilitar();
    
  }  else {
    // Mostrar un mensaje de error si el descuento es inválido
    mostrarTexto("lblErrorDescuentos", "Descuento inválido.");
   
  }
};
buscarRol=function(cedula){
    for(i=0;i<roles.length;i++){
        let rol=roles[i];
        if(rol.cedula==cedula){
        
        return rol
    }else{
        return null;
    }
}
}
agregarRol=function(rol){

let rolExiste=buscarRol(rol.cedula);
if(!rolExiste){
    roles.push(rol);
    alert("rol agregado")
}else{
    alert("ya existe alguien con la misma cedula");
}
}
calcularAporteEmpleador=function(sueldo){
let aporteEmpleador=(sueldo*11.15)/100;
return aporteEmpleador;
}
guardarRol=function(){
   let valorAPagar=recuperarTextoDiv("infoPago"); 
   let aporteIes=recuperarTextoDiv("infoIESS");
   let valorNombre=recuperarTextoDiv("infoNombre");
   let valorCedula=recuperarTextoDiv("infoCedula");
   let valorSueldo=recuperarTextoDiv("infoSueldo");
    let aporteEmpleador=calcularAporteEmpleador(valorSueldo);
rolNuevo={}
rolNuevo.valorCedula = valorCedula;
rolNuevo.valorNombre = valorNombre;
rolNuevo.valorSueldo = valorSueldo;
rolNuevo. valorAPagar= valorAPagar;
rolNuevo.aporteIes = aporteIes;
rolNuevo.aporteEmpleador=aporteEmpleador;




agregarRol(rolNuevo);
alert("excelente");
desahabilitar();
} 

mostrarRoles=function(){
let cmpTabla = document.getElementById("tablaResumen");
  let contenidoTabla =
    "<table><tr>" +
    "<th> CEDULA</th>" +
    "<th> NOMBRE</th>" +
    "<th> VALOR A PAGAR</th>" +
    "<th> APORTE EMPLEADO</th>" +
    "<th> APORTE EMPLEADOR</th>" +
    "</tr>";
  let elementoRol;
  for (let i = 0; i < roles.length; i++) {
    elementoRol = roles[i];
    contenidoTabla +=
      "<tr><td>" +
      elementoRol.cedula +
      "</td>" +
      "<td>" +
      elementoRol.nombre +
      "</td>" +
      "<td>" +
      elementoRol.valorAPagar +
      "</td>" +
      "<td>" +
      elementoRol.aporte +
      "</td>" +
      "</tr>"
      elementoRol.aporteEmpleador +
      "</td>" +
      "</tr>";
  }
  contenidoTabla += "</table>";
  cmpTabla.innerHTML = contenidoTabla;
  mostrarTotales();
};
mostrarTotales=function(){
    let totalEmpleado = 0;
  let totalEmpleador = 0;
  let totalPagar = 0;
  for(i=0;i<roles.length;i++){
    totalEmpleador+=roles[i].aporteIes;
    totalEmpleado+=roles[i].aporte;
    totalPagar+=roles[i].totalPagar;

  }
  mostrarTexto("infoTotalPago", valorAPagar);
  mostrarTexto("infoAporteEmpresa", totalEmpleador);
  mostrarTexto("infoAporteEmpleado", totalEmpleado);
let totalNomina=totalEmpleado + totalEmpleador+ totalPagar;
mostrarTexto("infoTotalNomina", totalNomina);
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
