saludar=function(){
    //recuperar el valor de la caja de texto txtNombre
    let nombre;
    nombre=recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto txtApellido
    let apellido;

    apellido=recuperarTexto("txtApellido");
//recuperar el valor de la caja de texto txtEdad
let edad;
edad=recuperarInt("txtEdad");
//recuperar el valor de la caja de texto txtApellido
let estatura;
estatura=recuperarFlotante("txtEstatura");

 let mensajeBienvenida;
 mensajeBienvenida="Bienvenido  "+nombre+"  "+apellido;

 mostrarTexto("lblResultado",mensajeBienvenida);
 mostrarImagen("imgSaludo","./imagenes/hiBts.gif");
 mostrarTextoEnCaja("txtNombre","");

}




