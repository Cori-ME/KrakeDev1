calcularTasaInteres=function(ingresosAnual){
    
    let tasaInteres;
    tasaInteres=parseFloat(ingresosAnual);

 if(ingresosAnual<300000){

    tasaInteres=ingresosAnual*0.16;

 } 
else if(ingresosAnual>=300000&&ingresosAnual<500000){
tasaInteres=ingresosAnual*0.15
}
else if(ingresosAnual>=500000&&ingresosAnual<1000000){
   tasaInteres=ingresosAnual*0.14
    }
    else if(ingresosAnual>=1000000&&ingresosAnual<2000000){
       tasaInteres=ingresosAnual*0.13
        }
        else if(ingresosAnual>=2000000){
            tasaInteres=ingresosAnual*0.12
            }
    
            return tasaInteres;
}
calcularCapacidadPago=function(edad,ingresos,egresos){
let cuotaPagarMensual;
edad=parseInt(edad);
ingresos=parseFloat(ingresos);
egresos=parseFloat(egresos);

if(edad>50){
     cuotaPagarMensual=ingresos-egresos*0.3;
}
else if(edad<=50){
    cuotaPagarMensual=ingresos-egresos*0.4;
}

return cuotaPagarMensual;

}

calcularDescuento=function(precio,cantidad){
let valorDescuento;
precio=parseFloat(precio);
cantidad=parseInt(cantidad);
if (cantidad<3) {
    valorDescuento=precio*0;
}
else if(cantidad>=3&&cantidad<5){
    valorDescuento=precio*0.02;
}
else if(cantidad>=6&&cantidad<11){
    valorDescuento=precio*0.03;
}
else if(cantidad>=12){
    valorDescuento=precio*0.04;
}
return valorDescuento;
}

determinarColesterolLDL=function(nivelColesterol){

if(nivelColesterol<100){
   
    let mensaje;
    mensaje="su nivel de colesterol es deseable:"+nivelColesterol;
    return  mensaje;
}
else if(nivelColesterol>=100&&nivelColesterol<=129){
    let mensaje;
    mensaje="su nivel de colesterol es casi optimo"+nivelColesterol;
    return  mensaje;
}

else if(nivelColesterol>=130&&nivelColesterol<=159){
    let mensaje;
    mensaje="su nivel de colesterol es limite superior del rango"+nivelColesterol;
    return  mensaje;
}
else if(nivelColesterol>=160&&nivelColesterol<=189){
    let mensaje;
    mensaje="su nivel de colesterol es alto"+nivelColesterol;
    return  mensaje;
}


}

validarClave=function(clave){
    clave=clave.toString();
    if(clave.length>8&&clave.length<=16){
      return true
    }
    else{
        return false;
    }
}
esMayuscula=function(caracter){
    
    caracter=caracter.toString();
    caracteraracter.charCodeAt(0);
    if(codigoA<=65&&codigoA<=90){
        return true;
    }
        
    
    else{
        return false;
    }
}
    esMayuscula=function(caracter){
        let codigoA;

        caracter=caracter.toString();
        codigoA=caracter.charCodeAt(0);

        if(codigoA<=97&&codigoA<122){
            
            return true;
     
}
else{ 
    return false
}
    }
    esDigito=function(caracter){
    let codigoA;

        caracter=caracter.toString();
        codigoA=caracter.charCodeAt(0);

        if(codigoA>=48&&codigoA<=57){
            
            return true;  
}
else{ 
    return false

    }
}
darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    
    notaMatematica=parseFloat(notaMatematica);
    notaFisica=parseFloat(notaFisica);
    notaGeometria=parseFloat(notaGeometria);
    if(notaMatematica>=90||notaFisica>=90||notaGeometria>=90){
       return true ;
    } 
    else{
        return false;
    }

}
otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    notaMatematica=parseFloat(notaMatematica);
    notaFisica=parseFloat(notaFisica);
    notaGeometria=parseFloat(notaGeometria);
    if((notaMatematica>=90||notaFisica>=90)&&notaGeometria>=80){
       return true ;
    } 
    else{
        return false;
    }
}
dejarSalir=function(){
    notaMatematica=parseFloat(notaMatematica);
    notaFisica=parseFloat(notaFisica);
    notaGeometria=parseFloat(notaGeometria);
    if((notaMatematica>=90||notaFisica>=90||notaGeometria>=80)&&notaFisica>=notaGeometria){
       return true;
    } 
    else{
        return false;
    }
}