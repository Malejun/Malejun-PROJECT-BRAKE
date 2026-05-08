function generarPassword() {

  const longitud = document.getElementById('longitud');
  const numeroCaracteres = parseInt(longitud.value);

  if (numeroCaracteres < 12 || numeroCaracteres > 50) {
    alert("La contraseña tiene que tener entre 12 y 50 caracteres");
    return;
  }

  const passwordGenerada = crearPassword(numeroCaracteres);
  const resultado = document.getElementById('password');
  resultado.innerHTML = `Contraseña generada:<span>${passwordGenerada}</span>`;

}

// Funcion crear contraseña
function crearPassword(longitud) {

  const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()-_=+";

  const todosCaracteres = mayusculas + minusculas + numeros + simbolos;

  let passwordFinal = "";

  // Meter minimo uno de cada
  passwordFinal += sacarCaracterRandom(mayusculas);
  passwordFinal += sacarCaracterRandom(minusculas);
  passwordFinal += sacarCaracterRandom(numeros);
  passwordFinal += sacarCaracterRandom(simbolos);

  // Rellenar el resto
  for (let i = passwordFinal.length; i < longitud; i++) {
    let numeroRandom = Math.floor(Math.random() * todosCaracteres.length);
    passwordFinal += todosCaracteres[numeroRandom];
  }

  return passwordFinal;
}

// Sacar caracter random
function sacarCaracterRandom(texto) {

  let random = Math.floor(Math.random() * texto.length);
  return texto[random];

}