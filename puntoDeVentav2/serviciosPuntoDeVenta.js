calcularValorDescuento = function (monto, porcentajeDescuento) {
  let valorDescuento;
  valorDescuento = (monto * porcentajeDescuento) / 100;

  return valorDescuento;
};
calcularIva = function (monto) {
  let valorIVA;

  valorIVA = (monto * 12) / 100;

  return parseFloat(valorIVA.toFixed(4));
};
calcularSubtotal = function (precio, cantidad) {
  let valorTotalPagar;

  valorTotalPagar = precio * cantidad;

  return valorTotalPagar;
};

calcularDescuentoPorVolumen = function (subtotal, valorCantidad) {
  let nombreProducto = recuperarTexto("txtProducto");
  let precioProducto = recuperarTexto("txtPrecio");
  let cantidad = recuperarTexto("txtCantidad");
  let valorDescuento;
  if (
    esProductoValido(nombreProducto, "lblProducto") &&
    esPrecioValido(precioProducto, "lblPrecio") &&
    esCantidadValida(cantidad, "lblCantidad")
  ) {
    if (valorCantidad < 3) {
      valorDescuento = subtotal;
    } else if (valorCantidad >= 3 && valorCantidad <= 5) {
      valorDescuento = subtotal * 0.03;
    } else if (valorCantidad >= 6 && valorCantidad <= 11) {
      valorDescuento = subtotal * 0.04;
    } else if (valorCantidad >= 12) {
      valorDescuento = subtotal * 0.05;
    }
    

    return valorDescuento;
  }
};
esProductoValido = function (nombreProducto, idComponenteError) {
  let hayErrores = false;
  if (nombreProducto == "") {
    mostrarTexto(idComponenteError, "Campo obligatorio");
    hayErrores = true;
  }
  if (nombreProducto.length > 10) {
    mostrarTexto(idComponenteError, "Nombre supera los 10 digitos");
    hayErrores = true;
  }
  if (hayErrores == false) {
    mostrarTexto(idComponenteError, "");
  }
  return !hayErrores;
};
esPrecioValido = function (precioProducto, idComponenteError) {
  let hayErrores = false;

  if (precioProducto=="") {
    mostrarTexto(idComponenteError, "Campo obligatorio");
    hayErrores = true;
  }
  if(isNaN(precioProducto)){
    mostrarTexto(idComponenteError,"DEBE INGRESAR UN NUMERO");
    hayErrores=true;

   } 

  if (precioProducto <0 || precioProducto > 100) {
    mostrarTexto(idComponenteError, "SOLO DEBE INGRESAR NUMEROS ENTRE O Y 100");
    hayErrores = true;
  }
  if (hayErrores == false) {
    mostrarTexto(idComponenteError, "");
  }
  return !hayErrores;
};
esCantidadValida = function (cantidad, idComponenteError) {
  let hayErrores = false;
  if ( cantidad=="") {

    mostrarTexto(idComponenteError, "Campo obligatorio");
    hayErrores = true;
  }
  if(isNaN(cantidad)){
    mostrarTexto(idComponenteError,"DEBE INGRESAR UN NUMERO");
    hayErrores=true;

   } 

  if (cantidad <0 || cantidad >50) {
    mostrarTexto(idComponenteError, "SOLO DEBE INGRESAR NUMEROS ENTRE O Y 50");
    hayErrores = true;
  }
  if (hayErrores == false) {
    mostrarTexto(idComponenteError, "");
  }
  return !hayErrores;
};
calcularTotal = function (subtotal, descuento, iva) {
  let totalPagar;
  totalPagar = subtotal - descuento + iva;
  return totalPagar;
};
