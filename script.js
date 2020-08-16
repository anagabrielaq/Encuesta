var campos = 0;
var campos2 = 0;

//agregar respuestas
function agregarCampo() {

    //Limita a generar 5 respuestas max.
    if (campos < 4) {
        campos = campos + 1;

        var NvoCampo = document.createElement("div");
        NvoCampo.id = "tr_" + (campos);
        NvoCampo.innerHTML =

            '<div class="form-group row">' +
            ' <div class="col-md-6 offset-md-2">' +
            '<input type="text"  name="respuestas' + campos + '" class="form- 
        control"  id="respuestas'+ campos+'" placeholder="Otra respuesta">' +
        '</div>' +
            '</div>';



        var contenedor = document.getElementById("contenedor_respuestas");

        contenedor.appendChild(NvoCampo);
    }
}

//quitar respuestas
function quitarCampo(textbox) {


    if (campos > 0) {

        var eliminar = document.getElementById("tr_" + campos);
        var contenedor = document.getElementById("contenedor_respuestas");

        contenedor.removeChild(eliminar);
        campos = campos - 1;


    }
}

//agregar preguntas nuevas
function agregarCampoP() {

    //Limita a generar 5 preguntas max
    if (campos2 < 4) {
        campos2 = campos2 + 1;

        var NvoCampo2 = document.createElement("div");
        NvoCampo2.id = "pr_" + (campos2);
        NvoCampo2.innerHTML =

            '<div class="form-group row">' +
            ' <div class="col-md-6 offset-md-2">' +
            '<input type="text" name="preguntas' + campos2 + '" id="preguntas' +
            campos2 + '" placeholder="Pregunta" class="form-control">' +
            '</div>' +
            '</div>' +
            '<div class="form-group row">' +

            '<div class="col-md-6 offset-md-2">' +
            '<input type="text" name="respuestas" id="respuestas" class="form- 
        control" placeholder="Respuestas">'+

        '</div>' +
            '<div class="col-md-2">' +
            '<button class="btn btn-light" type="button" 
        onclick = "JavaScript:agregarCampo();" > <i class="fas fa-plus- 
               circle"></i></button > '+
        '<button class="btn btn-light" type="button" 
        onclick = "JavaScript:quitarCampo();" > <i class="fas fa-minus- 
          circle"></i></button > '+
        '</div>' +
            '</div>';

        var contenedor2 = document.getElementById("contenedor_todo");

        contenedor2.appendChild(NvoCampo2);
    }