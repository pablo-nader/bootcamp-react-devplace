/**
 * Ejercicio Nº1:
 * Tomar TODOS los elementos <p> de la página y cambiar el color de fondo
 * (crear varios elementos)
 */
const pColor = document.querySelector("#pColor");
const paragraph = document.querySelectorAll('p');
var textWords = "";
let count;

pColor.addEventListener('change', function () {
    Array.from(paragraph).forEach(e => e.style.backgroundColor = pColor.value);
});

/**
 * Ejercicio Nº2:
 * Contar la cantidad de palabras dentro de los elementos <p> e insertar al principio de la página la cantidad
 */

const button = document.querySelector("#buttonCount");
const display = document.querySelector("#displayCount");

button.addEventListener('click', function() {
    Array.from(paragraph).forEach((e, i) => {
        let text = e.innerHTML;
        // reemplazamos saltos de linea, por espacios, 
        // varios espacios por uno solo
        // sacamos espacios del principio y del final
        text = text.replace (/\r?\n/g," ");
    	text = text.replace (/[ ]+/g," ");
        text = text.replace (/^ /,"");
        text = text.replace (/ $/,"");
        count = text.split(" ").length;
        
        textWords += `<br>En el párrafo ${i+1} hay ${count} letras`;
    });

    display.innerHTML = textWords;
});

/**
 * Ejercicio Nº3:
 * Crear un anchor que el link sea https://www.google.com.ar/
 * al clickearlo no permitir que salga de la página en la que estas y 
 * muestre la dirección en un elemento del html
 */

const anchor = document.querySelector("#unclickeable-anchor");

anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('displayURL').innerHTML = "<br>La URL actual es: " + location;
});

/**
 * Ejercicio Nº4:
 * Crear un elemento <img> que contenga una imagen a elección
 */

const buttonImg = document.querySelector("#buttonImg");

buttonImg.addEventListener('click', function () {
    let img = document.createElement('img');
    img.src = 'https://picsum.photos/200/200';
    document.getElementById('displayImg').appendChild(img);
});