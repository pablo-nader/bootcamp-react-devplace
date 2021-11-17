/**
 * Ejercicio Nº1:
 * Tomar TODOS los elementos <p> de la página y cambiar el color de fondo
 * (crear varios elementos)
 */
const pColor = document.querySelector("#pColor");
const paragraph = document.querySelectorAll('p');
    

pColor.addEventListener('change', function () {
    Array.from(paragraph).forEach(e => e.style.backgroundColor = pColor.value);
});

/**
 * Ejercicio Nº2:
 * Contar la cantidad de palabras dentro de los elementos <p> e insertar al principio de la página la cantidad
 */

/**
 * Ejercicio Nº3:
 * Crear un anchor que el link sea https://www.google.com.ar/
 * al clickearlo no permitir que salga de la página en la que estas y 
 * muestre la dirección en un elemento del html
 */

/**
 * Ejercicio Nº4:
 * Crear un elemento <img> que contenga una imagen a elección
 */