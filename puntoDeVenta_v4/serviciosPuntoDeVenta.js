calcularValorDescuento=function(monto,porcentajeDescuento){
    
    let valorDescuento
    valorDescuento=(monto*porcentajeDescuento)/100;
   
    return valorDescuento

}
calcularIva=function(monto){

 let totalIva;

  totalIva=(monto*12)/100;
  
  return parseFloat(totalIva.toFixed(2))
  

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


