const paginaIndex = document.getElementById('index');

// Funcion reloj
function actualizarReloj() {
  const fechaActual = new Date();

  let hora = fechaActual.getHours();
  let minutos = fechaActual.getMinutes();
  let segundos = fechaActual.getSeconds();

  // Añadir 0 delante
  if (hora < 10) {
    hora = "0" + hora;
  }

  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  const horaCompleta = `${hora}:${minutos}:${segundos}`;

  const cajaHora = document.getElementById('hora');
  const cajaFecha = document.getElementById('fecha');
  const cajaMensaje = document.getElementById('mensajehora');

  cajaHora.innerText = horaCompleta;

  // Fecha
  let dia = fechaActual.getDate();
  let mes = fechaActual.getMonth() + 1;
  let año = fechaActual.getFullYear();

  if (dia < 10) {
    dia = "0" + dia;
  }

  if (mes < 10) {
    mes = "0" + mes;
  }

  const fechaFormateada = `${dia}/${mes}/${año}`;

  cajaFecha.innerText = fechaFormateada;

  // Mensaje dependiendo de la hora
  if (!paginaIndex) {

    let mensaje = "";

    if (hora >= 0 && hora <= 7) {
      mensaje = "Es hora de descansar. Apaga y sigue mañana";
    } else if (hora > 7 && hora <= 12) {
      mensaje = "Buenos días, desayuna fuerte y a darle al código";
    } else if (hora > 12 && hora <= 14) {
      mensaje = "Echa un rato más pero no olvides comer";
    } else if (hora > 14 && hora <= 16) {
      mensaje = "Espero que hayas comido";
    } else if (hora > 16 && hora <= 18) {
      mensaje = "Buenas tardes, el último empujón";
    } else if (hora > 18 && hora <= 22) {
      mensaje = "Esto ya son horas extras, piensa en parar pronto";
    } else {
      mensaje = "Buenas noches, es hora de pensar en parar y descansar";
    }

    cajaMensaje.innerText = mensaje;
  }
}

// Actualizar cada segundo
setInterval(function () {
  actualizarReloj();
}, 1000);

// Ejecutar al cargar
actualizarReloj();