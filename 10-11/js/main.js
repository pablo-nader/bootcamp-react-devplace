const show = console.log;
const testArray = ["foo", "bar", "baz", "qux", "origin"];

/**
 * Ej-1  
 * cadena = "javascript"; dada la anterior cadena colocar la primera letra en mayúscula
 * output => Javascript
 */

const firstToUpper = str => str.charAt(0).toUpperCase() + str.slice(1);

show(firstToUpper("lipsum"));

/**
 * Ej-2 
 * cadena = "javascript";  dada la anterior cadena colocar la ultima letra en mayúscula
 * output => javascripT
 */

const lastToUpper = str => str.slice(0, -1) + str.charAt(str.length-1).toUpperCase();

show(lastToUpper("lipsum"));

/**
 * Ej-3 
 * arr = ["foo", "bar", "baz", "qux", "origin"]
 * buscar en el array el elemento baz y mostrarlo console
 * output =>  baz
 */

const extractElement = (arr, element) => arr.indexOf(element) != -1 ? element : "No coincidence";

show(extractElement(testArray, "baz"));

/** Ej-4 
 * arr = ["foo", "bar", "baz", "qux", "origin"]
 * vaciar el arr
 *  output => [ ]
 */

// Acá no sé si había que limpiar item por item o todo el array
// por las dudas hice los dos, aunque no tiene sentido una función que devuelva un array vacío.
const cleanArray = arr => arr.map(e => null);
const cleanArray2 = () => [];

show(cleanArray(testArray));

let array = cleanArray2();

show(array);

/**
 * Ej-5  
 * 1 str = "origin"
 * eliminar las vocales del string
 * output => rgn
 */

const noVowel = str => str.replace(/[aeiouAEIOU]/g, '');

show(noVowel("origin"));