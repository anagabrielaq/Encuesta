var baseDatos = [];
function getRespuestas() {
  var formularioString = localStorage.getItem("formulario");
  return JSON.parse(formularioString);
}
var arrayRespuestas = getRespuestas();

function forEachRespuesta(value) {
  var elemento = document.createElement("pre");
  elemento.innerHTML = JSON.stringify(value, null, 4);

  document.getElementById("respuestas").appendChild(elemento);
}

arrayRespuestas.forEach(forEachRespuesta);
//console.log(getRespuestas());
