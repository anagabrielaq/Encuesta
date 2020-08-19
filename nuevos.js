// function capturar() {
//   console.log("capturado");
//   capturar.preventDefault();
// }
function enviar(event) {
  event.preventDefault();
  var mensajesError = [];

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
  if (mensajesError.length === 0) {
    capturar();
  }
  error.innerHTML = mensajesError.join(",");
}
function capturar() {
  //console.log("capturado");
  function Formulario(
    nombre,
    edad,
    error,
    // boton,
    sintomas,
    sint,
    contacto,
    sintofam,
    medida,
    medidas
  ) {
    this.nombre = nombre;
    this.edad = edad;
    this.error = error;
    // this.boton = boton;
    this.sintomas = sintomas;
    this.sint = sint;
    this.contacto = contacto;
    this.sintofam = sintofam;
    this.medida = medida;
    this.medidas = medidas;
  }
  var nombre = document.getElementById("nombre").value;
  var edad = document.getElementById("edad").value;
  // var boton = document.getElementById("boton").value;
  var sintomas = document.getElementById("sintomas").value;
  var error = document.getElementById("error").value;
  var sint = document.getElementById("sint").value;
  var contacto = document.getElementById("contacto").value;
  var sintofam = document.getElementById("sintofam").value;
  var medida = document.getElementById("medida").value;
  var medidas = document.getElementById("medidas").value;

  nuevoForm = new Formulario(
    nombre,
    edad,
    error,
    // boton,
    sintomas,
    sint,
    contacto,
    sintofam,
    medida,
    medidas
  );
  console.log(nuevoForm);
  agregar();
  // capturar.preventDefault();
}

var baseDatos = JSON.parse(localStorage.getItem("formulario") || "[]");
function agregar() {
  baseDatos.push(nuevoForm);
  localStorage.setItem("formulario", JSON.stringify(baseDatos));
  console.log("Mi arreglo es:", baseDatos);
}

// function display() {
//   console.log(baseDatos);
// }

error.style.color = "red";

var form = document.getElementById("form");
form.addEventListener("submit", enviar);
