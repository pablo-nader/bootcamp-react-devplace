const show = console.log;
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = ["este", "es", "un", "array"];
const str1 = "este es un string";
const str2 = "este es otro string";
/**
 * Ejercicio Nº6:
 * Crear una función que concatene 2 arrays
*/
function arrayConcat(array1, array2) {
    return array1.concat(array2);
}

show(arrayConcat(arr1, arr2)); // Output => [1, 2, 3, 4, 5, 6, 7, "este", "es", "un", "array"]

/**
 *  Ejercicio Nº7:
 *  Crear una función que retorne true si un array contiene un elemento
 */
function isInArray(element, array) {
    return array.includes(element);
}

show(isInArray("es", arr2)); // Output => true

/** 
 * Ejercicio Nº8
 * Crear una función que te diga si el ultimo caracter de un string es una b
 */

function lastCompare(string, element = 'b') {
    return string.charAt(string.length-1) == element;
}

show(lastCompare(str1)); // Output => false

/**
 * Ejercicio Nº9
 * Crear una función que tome un string y cree uno nuevo utilizando 
 * las 3 primeras y ultimas letras,
 * comprobar que el string de parametro mida al menos 6 caracteres
 */

function stringBizarre(str) {
    let n = str.length;
    if (n >= 6) {
        return str.slice(n-3) + str.slice(0, 3);
    } else {
        return "La cadena debe tener más de 6 carácteres";
    }
}

show(stringBizarre(str1)); // Output => ingest

/**
 * Ejercicio Nº10
 * Crear una función que tome dos strings y los concatene sin las primeras 2 letras
 */

function strConcat(str1, str2) {
    return str1.slice(2) + " " + str2.slice(2);
}

show(strConcat(str1, str2)); // Output => te es un string te es otro string

/**
 * Ejercicio Nº11
 * Comprobar entre dos valores cual es mas cercano al 100
 */

function closerTo100(num1, num2) {
    let dif1 = Math.abs(num1 - 100);
    let dif2 = Math.abs(num2 - 100);
    if (dif1 != dif2) {
        return (dif1 < dif2) ? num1 : num2;
    } else {
        return "Ambos números están igual de cerca"
    }
}

show(closerTo100(90, 110)); // Output => Ambos números están igual de cerca