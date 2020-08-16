var nombre = document.getElementById("nombre");
var edad = document.getElementById("edad");
var error = document.getElementById("error");
var boton = document.getElementById("boton");
var sintomas = document.getElementById("sintomas");
var sint = document.getElementById("sint");
var contacto = document.getElementById("contacto");
var sintofam = document.getElementById("sintofam");
var medida = document.getElementById("medida");
var medidas = document.getElementById("medidas");

error.style.color = "red";

var form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var mensajesError = [];

  if (nombre.value === null || nombre.value === "") {
    mensajesError.push("Hace falta ingresar el nombre     ");
  }

  if (nombre.value.length >= 1 && nombre.value.length <= 2) {
    alert(
      "Ingrese un nombre valido. El nombre debe de contener minimo 3 caracteres"
    );
    return false;
  }

  if (edad.value === null || edad.value === "") {
    mensajesError.push("    Hace falta ingresar su edad    ");
  }

  if (edad.value >= 100 || edad.value < 0) {
    alert("    Seleccione una edad real    ");
    return false;
  }

  if (sintomas.value === null || sintomas.value === "") {
    mensajesError.push("    Falta la respuesta a la pregunta No. 3 ");
  }

  if (sint.value === null || sint.value === "") {
    mensajesError.push("   Falta la respuesta a la pregunta No.4  ");
  }

  if (contacto.value === null || contacto.value === "") {
    mensajesError.push("   Falta la respuesta a la pregunta No.5    ");
  }

  if (sintofam.value === null || sintofam.value === "") {
    mensajesError.push("    Falta la respuesta a la pregunta No.6   ");
  }

  if (medida.value === null || medida.value === "") {
    mensajesError.push("   Falta la respuesta a la pregunta No.7    ");
  }

  if (medidas.value === null || medidas.value === "") {
    mensajesError.push("    Falta la respuesta a la pregunta No.8  ");
  } else {
    console.log("Sending form");
    alert(
      "Gracias por Completar la encuesta! Sus respuestas son de mucha ayuda!"
    );
  }
  error.innerHTML = mensajesError.join(",");
});
