calcularValorDescuento = function (monto, porcentajeDescuento) {
  //
  let valorDescuento;
  valorDescuento = (monto * porcentajeDescuento) / 100;
  return valorDescuento;
};

calcularIva = function (monto) {
  let valorIVA;
  valorIVA = (monto * 12) / 100;
  return parseFloat(valorIVA.toFixed(3));
};

calcularSubtotal = function (precio, cantidad) {
  let subtotal;
  subtotal = precio * cantidad;
  return subtotal.toFixed(2);
};

calcularTotal = function (subtotal, descuento, iva) {
  let total;

  total = subtotal - descuento + iva;
  return total.toFixed(2);
};

esProductoValido = function (producto, idComponenteError) {
    let error = false;
    
    if (producto == "") {
      mostrarTexto(idComponenteError, "Campo obligatorio");
      error = true;
    }
  
    
    if (producto.length > 10) {
      mostrarTexto(idComponenteError, "ingrese hasta 10 digitos");
      error = true;
    }
    if (error == false) {
      mostrarTexto(idComponenteError, "");
    }
    return !error;
  };

esCantidadValida = function (cantidad, idComponenteError) {
  let error = false;

  if (cantidad == "") {
    mostrarTexto(idComponenteError, " campo obligatorio");
    error = true;
  }
  if (isNaN(cantidad)) {
    mostrarTexto(idComponenteError, "solo puede ingresar la cantidad en numeros");
    error = true;
  }
  if (cantidad < 0 || cantidad > 100) {
    mostrarTexto(idComponenteError, "solo puede ingresar 100");
    error = true;
  }
  if (error == false) {
    mostrarTexto(idComponenteError, "");
  }
  return !error;
};

esPrecioValido = function (precio, idComponenteError) {
    let error = false;
    if (precio == "") {
      mostrarTexto(idComponenteError, "Campo obligatorio");
      error = true;
    }
    if (isNaN(precio)) {
      mostrarTexto(idComponenteError, "solo puede ingresar precio en numeros");
      error = true;
    }
    if (precio < 0 || precio > 50) {
      mostrarTexto(idComponenteError, "El precio debe estar entre 0 y 50");
      error = true;
    }
    if (error == false) {
      mostrarTexto(idComponenteError, "");
    }
    return !error; 
  };

calcularDescuentoPorVolumen = function (subtotal, cantidad) {
  let descuento;
  let nombreProducto = recuperarTexto("txtProducto");
  let precio = recuperarTexto("txtPrecio");
  let valorCantidad = recuperarTexto("txtCantidad");
  if (
    esProductoValido(nombreProducto, "lblProducto") &
    esPrecioValido(precio, "lblPrecio") &
    esCantidadValida(valorCantidad, "lblCantidad")
  ) {
    if (cantidad < 3) {
      descuento = 0;
    } else if (cantidad >=3 && cantidad <=5) {
      descuento = subtotal * 0.03;
    } else if (cantidad >=6 && cantidad <=11) {
      descuento = subtotal * 0.04;
    } else if (cantidad>=12) {
      descuento = subtotal * 0.05;
    }
    return descuento;
  }
};