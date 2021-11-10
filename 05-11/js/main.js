const show = console.log;
/** 
 * Ejercicio Nº1:  
 * Crear una función que tome los años de una persona y retorne la edad en días
 */ 

function ageToDays(age) {
    return age*365;
}

show(ageToDays(15)) // output => 5475

/** 
 * Ejercicio Nº2:  
 * Crear una función que tome horas y las convierta a segundos
 */

function hourToSecond(hour) {
    return hour*3600;
}

show(hourToSecond(4)) // output => 14400

/** 
 * Ejercicio Nº3:
 * Crear una función que tome un array y devuelva un solo string de 
 * cada elemento separado por espacio.
 */

function arrayToString(array) {
    return array.join(" ");
}

show(arrayToString(["text1", "text2", "text3", "text4", "text5"])) // output => "text1 text2 text3 text4 text5"

/**
 * Ejercicio Nº4:
 * Crear una funcion que tome un array y lo invierta
 */

function arrayReverse(array) {
    return array.reverse();
}

show(arrayReverse([1, 2, 3, 4, 5])) // output => [5, 4, 3, 2, 1]

/**
 * Ejercicio Nº5:
 * Crear una funcion que tome un array y lo invierta sin cambiar el original
 */

let arr = [1, 2, 3, 4, 5];
let arr2 = arrayReverse(arr);
show(arr, arr2) // output => [1, 2, 3, 4, 5] [5, 4, 3, 2, 1]
