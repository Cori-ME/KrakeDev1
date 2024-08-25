validarPassword=function(password){
    let cadena;
    let validacion=true;
    let mensaje="";
    let mayuscula=false;
    let digito=false;
    let caracterEspecial=false;
    if(password.length<=8||password.length<=16){
        validacion=true;
    } else{
        mensaje="solo puede tener 8 y 16 caracteres"
    }
    for(i=0;i<password.length-1;i++){
        cadena=password.charAt(i);
          
    if(esMayuscula(password.charAt(i))){
     mayuscula=true;
    }
    if(esDigito(password.charAt(i))){
        digito=true;
    }
    
    else if(password.charAt(i) == "*" ||
    password.charAt(i) == "_" ||
    password.charAt(i) == "-"){
        caracterEspecial=true;
    }
        
    }

      if(!mayuscula){
mensaje="tiene una longitud minima de 8 y 16 maximo de caracteres"

}
    if(!digito){
        mensaje="tiene al menos un digito";
        }
    if(!caracterEspecial){
        mensaje="tiene al menos un caracter especial";
        }
if(!validacion==true){
    mensaje="contraseña valida";
} else { 
    return mensaje ;
}

}
ejecutarValidacion=function(){
    let mensaje;
    let valiPassword;
    valiPassword=recuperarTexto("txtPassword");
    let resultado=validarPassword(valiPassword);
    

    if(resultado==""){
        
        cambiarTexto("lblResultado","passWord correcto" );
    }
    else {
        mensaje="passWord incorrecto";
        cambiarTexto("lblResultado",mensaje);
    }
 }
