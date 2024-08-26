let palabraSecreta;

esMayuscula = function (caracter) {
    let codigoA = caracter.charCodeAt(0);
     if(codigoA >= 65 && codigoA <= 90){// Verifica si es una letra mayúscula (A-Z)
        return true;
    }else{
        return false;
    }
}
guardarPalabra = function () {
    let palabra = document.getElementById("txtSecreta").value;

    if (palabra.length !== 5) {
        alert("Debe ingresar una palabra de 5 letras");
        return;
    }

    for (let i = 0; i < palabra.length; i++) {
        if (!esMayuscula(palabra.charAt(i))) {
            alert("Debe ingresar una palabra de 5 letras mayúsculas");
            return;
        }
    }

    palabraSecreta = palabra;
    console.log("Palabra secreta:", palabraSecreta);
};

mostrarLetra = function (letra, posicion) {
    if (posicion >= 0 && posicion < 5) {
        console.log("Mostrando letra"+letra,);
        mostrarTexto("div" + posicion, letra); 
    }
};

validar = function (letra) {
    let letrasEncontradas = 0;

    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta.charAt(i) === letra) {
            mostrarLetra(letra, i); 
            letrasEncontradas++;
        }
    } 
};

ingresarLetra = function () {
    let letra = document.getElementById("txtLetra").value;

    if (letra.length === 1 && esMayuscula(letra.charAt(0))) {
        validar(letra);
    } else {
        alert("SOLO SE ACEPTAN MAYÚSCULAS");
    }
};
