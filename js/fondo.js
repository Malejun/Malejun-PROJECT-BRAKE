const fondo = document.body;

let imagenes = [
  "./assets/img/dalinar.jpg",
  "./assets/img/cosmere.jpg",
  "./assets/img/kelsier.jpg",
  "./assets/img/mistborn.jpg"
];

// Funcion para cambiar fondo
function cambiarFondo() {
  let numeroRandom = Math.floor(Math.random() * imagenes.length);
  let imagenActual = imagenes[numeroRandom];
  fondo.style.backgroundImage = `url(${imagenActual})`;
}

// Cambiar cada 15 segundos
setInterval(function () {
  cambiarFondo();
}, 15000);

// Primer fondo al cargar
cambiarFondo();