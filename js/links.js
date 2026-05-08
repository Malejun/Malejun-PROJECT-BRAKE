const inputNombre = document.getElementById('nombreurl');
const inputUrl = document.getElementById('url');
const botonAdd = document.getElementById('anadirEnlaceBtn');
const cajaLinks = document.getElementById('links');

let linksGuardados = JSON.parse(localStorage.getItem('links'));

if (!linksGuardados) {
  linksGuardados = [];
}

// Funcion para mostrar links
function cargarLinks() {

  cajaLinks.innerHTML = "";

  for (let i = 0; i < linksGuardados.length; i++) {

    const li = document.createElement('li');
    const enlace = document.createElement('a');
    const botonBorrar = document.createElement('button');

    enlace.href = linksGuardados[i].url;
    enlace.target = "_blank";
    enlace.textContent = linksGuardados[i].name;

    botonBorrar.textContent = "X";

    botonBorrar.addEventListener('click', function () {

      linksGuardados.splice(i, 1);

      localStorage.setItem('links', JSON.stringify(linksGuardados));

      cargarLinks();

    });

    li.appendChild(enlace);
    li.appendChild(botonBorrar);

    cajaLinks.appendChild(li);

  }

}

// Evento boton añadir
botonAdd.addEventListener('click', function () {

  const nombreLink = inputNombre.value;
  const urlLink = inputUrl.value;

  if (nombreLink != "" && urlLink != "") {

    const nuevoLink = {
      name: nombreLink,
      url: urlLink
    };

    linksGuardados.push(nuevoLink);

    localStorage.setItem('links', JSON.stringify(linksGuardados));

    inputNombre.value = "";
    inputUrl.value = "";

    cargarLinks();

  }

});

// Cargar links al entrar
cargarLinks();