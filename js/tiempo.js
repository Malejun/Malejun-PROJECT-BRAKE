async function sacarTiempo(ciudad) {

  const apiKey = '2ff3439e25fa4d4cb4d104405260805';
  const urlApi = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${ciudad}&aqi=no`;

  try {
    const respuesta = await fetch(urlApi);
    const datosTiempo = await respuesta.json();
    mostrarTiempoActual(datosTiempo);
    mostrarForecast(datosTiempo);
  } catch (error) {
    console.log("Error al sacar el tiempo");
  }

}

// Tiempo actual
function mostrarTiempoActual(datos) {

  const cajaTiempo = document.getElementById('currentWeather');
  const nombreCiudad = datos.location.name;
  const pais = datos.location.country;
  const temperatura = datos.current.temp_c;
  const humedad = datos.current.humidity;
  const viento = datos.current.wind_kph;
  const lluvia = datos.current.precip_in;
  const textoTiempo = datos.current.condition.text;
  const iconoTiempo = datos.current.condition.icon;

  const templateTiempo = `
    <h2>${nombreCiudad} / ${pais}</h2>
    <p>${textoTiempo}</p>
    <div class="current-data">
      <div class="current-grades">
        <img 
          class="weather-icon" 
          src="http:${iconoTiempo}" 
          alt="${textoTiempo}"
        >
        <div>
          ${temperatura}
          <img src="./assets/img/celsius.png" alt="grados">
        </div>
      </div>
      <ul>
        <li>Precipitaciones: ${lluvia}%</li>
        <li>Humedad: ${humedad}%</li>
        <li>Viento: ${viento} Km/h</li>
      </ul>
    </div>
  `;

  cajaTiempo.innerHTML = templateTiempo;

}

// Forecast
function mostrarForecast(datos) {

  const cajaForecast = document.getElementById('forecastWeather');

  cajaForecast.innerHTML = "";

  const horas = datos.forecast.forecastday[0].hour;

  for (let i = 0; i < horas.length; i++) {

    const hora = horas[i];
    const temperatura = hora.temp_c;
    const texto = hora.condition.text;
    const icono = hora.condition.icon;
    const horaFormateada = hora.time.split(" ")[1];
    const templateHora = `

      <li class="forecast-grades">
        <span>${horaFormateada}</span>
        <img 
          class="weather-icon" 
          src="http:${icono}" 
          alt="${texto}"
        >
        <p>${temperatura} °C</p>
      </li>
    `;

    cajaForecast.innerHTML += templateHora;

  }
}

// Ciudad inicial
sacarTiempo('madrid');