calcularValorDescuento=function(monto,porcentajeDescuento){
    
    let valorDescuento
    valorDescuento=(monto*porcentajeDescuento)/100;
   
    return valorDescuento

}
calcularIva=function(monto){

 let valorIVA;

  valorIVA=(monto * 12)/100;
  
  return parseFloat(valorIVA.toFixed(4));
  

}
calcularSubtotal=function(precio,cantidad){
     let valorTotalPagar;
    
    valorTotalPagar=precio*cantidad;
    
     return valorTotalPagar;
}
    
calcularTotal=function(subtotal,descuento,iva){
    
    let totalPagar
    totalPagar=subtotal-descuento+iva;
return  totalPagar;


}


