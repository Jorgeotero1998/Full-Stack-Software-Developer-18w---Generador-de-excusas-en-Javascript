const quienes = ["Mi perro", "Mi abuela", "El cartero", "Mi hermano"];
const acciones = ["se comió", "rompió", "perdió", "destruyó"];
const cosas = ["mi tarea", "mi celular", "el informe", "mi computadora"];
const momentos = ["ayer", "esta mañana", "anoche", "justo antes de clase"];

function elementoAleatorio(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generarExcusa() {
  return {
    quien: elementoAleatorio(quienes),
    accion: elementoAleatorio(acciones),
    cosa: elementoAleatorio(cosas),
    momento: elementoAleatorio(momentos)
  };
}

const excusa = generarExcusa();

document.querySelector(".who").textContent = excusa.quien;
document.querySelector(".action").textContent = excusa.accion;
document.querySelector(".what").textContent = excusa.cosa;
document.querySelector(".when").textContent = excusa.momento;

document.getElementById("resultado").textContent =
  `${excusa.quien} ${excusa.accion} ${excusa.cosa} ${excusa.momento}`;
