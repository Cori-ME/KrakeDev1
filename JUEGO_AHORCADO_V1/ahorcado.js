let palabraSecreta;
let intentos=0;
let coincidencias=0;;
let errores = 0;

esMayuscula = function (caracter) {
  let codigoA = caracter.charCodeAt(0);
  if (codigoA >= 65 && codigoA <= 90) {
    // Verifica si es una letra mayúscula (A-Z)
    return true;
  } else {
    return false;
  }
};
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
    console.log("Mostrando letra" + letra);
    mostrarTexto("div" + posicion, letra);
  }
};

validar = function (letra) {
  let letrasEncontradas = 0;

  for (let i = 0; i < palabraSecreta.length; i++) {
    if (palabraSecreta.charAt(i) === letra) {
      mostrarLetra(letra, i);
      letrasEncontradas = letrasEncontradas+1;
     
      coincidencias =coincidencias + 1;
    }
  }
  if (letrasEncontradas == 0) {
    alert("LA LETRA NO ES PARTE DE LA PALABRA");
    errores += 1;
    mostrarAhorcado();
  }
};

ingresarLetra = function () {
  let letra = document.getElementById("txtLetra").value;
 
  if (esMayuscula(letra)) {
    intentos += 1;
    validar(letra);
  }
else {
    alert("SOLO SE ACEPTAN MAYUSCULAS");
 }
 if(coincidencias==5){
    console.log("gnao");
    mostrarImagen("ahorcadoImagen","ganador.gif");
}
if(intentos==10){
    console.log("per");
    mostrarImagen("ahorcadoImagen","gameOver.gif");
}
};
mostrarAhorcado = function () {
    
  if (errores == 1) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_1.png");
  }

  if (errores == 2) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_02.png");
  }
  if (errores == 3) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_02.png");
  }
  if (errores == 4) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_03.png");
  }
  if (errores == 5) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_05.png");
  }
  if (errores == 6) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_06.png");
  }
  if (errores == 7) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_07.png");
  }
  if (errores == 8) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_08.png");
  }
  if (errores == 9) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_09.png");
  }
};
