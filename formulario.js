//El selector que estás utilizando para seleccionar el formulario es incorrecto
var formulario = document.querySelector(".formulario")

formulario.onsubmit = function(e) {

  e.preventDefault();// Le faltaba el Default al prevent
  
  var n = formulario.elements[0]
  var e = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value
  //se cambio e ya que crearia confusiones
var edadCampo = formulario.elements[1]
  
  var i = na.selectedIndex
  var nacionalidad = na.options[i].value

  //se comentaron
  //console.log(nombre, edad)
  //console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 && (edad > 18 && edad < 120) ) { //Queda en una linea para que sea más claro
  agregarInvitado(nombre, edad, nacionalidad)
  }
}
 //elemnto dupicado y hasta abajo estaba el boton//
/* var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar); */

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.added("elemento-lista")
lista.appendChild(elementoLista)

//se eliminaron lineas duplicadas
function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
botonBorrar.parentNode.remove()
  }
}
