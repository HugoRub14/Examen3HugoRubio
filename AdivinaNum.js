// Genera un número aleatorio entre 1 y 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Función para comprobar la suposición del usuario
function checkGuess() {
  let userGuess = Number(guessField.value); // Obtiene la suposición del usuario y la convierte en un número
  if (guessCount === 1) {
    guesses.textContent = "Intentos anteriores: "; // Inicializa el texto para mostrar los intentos anteriores
  }

  guesses.textContent += userGuess + " "; // Agrega la suposición del usuario al texto de los intentos anteriores

  if (userGuess === randomNumber) { // Comprueba si la suposición del usuario es correcta
    lastResult.textContent = "¡Felicidades! ¡Lo adivinaste!"; // Muestra un mensaje de felicitaciones
    lastResult.style.backgroundColor = "green"; // Cambia el color de fondo del resultado a verde
    lowOrHi.textContent = ""; // Limpia el texto de indicación de número alto o bajo
    setGameOver(); // Finaliza el juego
  } else if (guessCount === 10) { // Si el usuario ha agotado sus intentos
    lastResult.textContent = "¡¡¡Fin del juego!!!"; // Muestra un mensaje de fin de juego
    lowOrHi.textContent = ""; // Limpia el texto de indicación de número alto o bajo
    setGameOver(); // Finaliza el juego
  } else { // Si la suposición del usuario es incorrecta
    lastResult.textContent = "¡Incorrecto!"; // Muestra un mensaje de suposición incorrecta
    lastResult.style.backgroundColor = "red"; // Cambia el color de fondo del resultado a rojo
    if (userGuess < randomNumber) { // Si la suposición del usuario es demasiado baja
      lowOrHi.textContent = "¡El número es muy bajo!"; // Indica que el número es demasiado bajo
    } else if (userGuess > randomNumber) { // Si la suposición del usuario es demasiado alta
      lowOrHi.textContent = "¡El número es muy grande!"; // Indica que el número es demasiado alto
    }
  }

  guessCount++; // Incrementa el contador de intentos
  guessField.value = ""; // Borra el campo de entrada
}

// Función para finalizar el juego
function setGameOver() {
  guessField.disabled = true; // Deshabilita el campo de entrada
  guessSubmit.disabled = true; // Deshabilita el botón de enviar
  resetButton = document.createElement("button"); // Crea un nuevo botón de reinicio
  resetButton.textContent = "Iniciar nuevo juego"; // Establece el texto del botón de reinicio
  document.body.append(resetButton); // Agrega el botón de reinicio al cuerpo del documento
  resetButton.addEventListener("click", resetGame); // Agrega un event listener para el botón de reinicio
}

// Función para reiniciar el juego
function resetGame() {
  guessCount = 1; // Reinicia el contador de intentos
  const resetParas = document.querySelectorAll(".resultParas p"); // Selecciona todos los párrafos dentro del contenedor de resultados
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = ""; // Borra el contenido de todos los párrafos de resultados
  }

  resetButton.parentNode.removeChild(resetButton); // Elimina el botón de reinicio del DOM
  guessField.disabled = false; // Habilita el campo de entrada
  guessSubmit.disabled = false; // Habilita el botón de enviar
  guessField.value = ""; // Borra el contenido del campo de entrada
  guessField.focus(); // Enfoca el campo de entrada para la siguiente suposición
  lastResult.style.backgroundColor = "white"; // Restablece el color de fondo del resultado
  randomNumber = Math.floor(Math.random() * 100) + 1; // Genera un nuevo número aleatorio
}


guesses.style.backgroundColor = "yellow";
guesses.style.fontSize = "200%";
guesses.style.padding = "10px";
guesses.style.boxShadow = "3px 3px 6px black";
