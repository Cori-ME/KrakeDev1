esMayuscula = function(caracter) {
    
  
    // Convertir el carácter a cadena en caso de que no lo sea
        caracter = caracter.toString();
    
         // Obtener el código ASCII del primer carácter
        
        let codigoA = caracter.charCodeAt(0);
    
        // Verificar si el código ASCII está en el rango de letras mayúsculas (65-90)
        if (codigoA >= 65 && codigoA <= 90) {
            
               
    return true;
        } 
        
    else {
            
         
    return false;
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
esGuion=function(caracter){
    let codigoA;

        caracter=caracter.toString();
        codigoA=caracter.charCodeAt(0);

        if(codigoA==45){
            
            return true;  
}
else{ 
    return false

    }
}
