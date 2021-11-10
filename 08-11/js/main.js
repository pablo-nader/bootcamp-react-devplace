const show = console.log;
const ex = n => show("----- Ejercicio N° " + n + " -----");

/**
 *  Ejercicio Nº 1
 * Matias olvidó el nombre de sus conocidos y otras cosas.
 * Dando un string determinado tiene que devolver la relación que tiene
 * Ricardo = "Ricardo es tu tio", Roberto = "Roberto es tu hermano", 
 * Argentina = "El país al que perteneces"
 * Dinamita = "Es tu gato"
 */

const returnRelations = obj => {
    let txt = obj.nombre;
    txt += " es tu ";
    txt += obj.relacion;
    txt += "\n";
    txt += obj.pais;
    txt += " el país al que perteneces\n";
    txt += obj.mascota;
    txt += " es tu gato";
    return txt;
};

ex(1);
show(returnRelations({nombre : "Raúl", relacion : "hermano", pais : "Argentina", mascota : "Dinamita"}));

/**
 * Ejercicio Nº2
 * Crear una función que tome como parametro 2 numeros y 
 * retorne true si alguno es 100 o si la suma de ambos es 100
 */

const is100 = (n1, n2) => {
    if (n1 == 100 || n2 == 100) return true;
    if (n1 + n2 == 100) return true;
    return false;
};

ex(2);
show(is100(-100, 200));

/**
 * Ejercicio Nº3
 * Pasado un string "index.html", "script.js" debe devolver la extension del archivo 
 * ej: ".js"
 */

const getExtension = file => {
    let extension = file.split(".");
    let index = extension.length -1;
    if (index === 0) return "No tiene extensión";
    return "." + extension[index];
}

ex(3);
show(getExtension("Personas.class.php"));

/**
 * Ejercicio Nº4
 * Crear dos funciones una que convierta los grados Cº a Fº y viceversa
 * ºF = (ºC · 1.8) + 32
 * ºC = (ºF -32) / 1.8
 */

const celToFar = deg => (parseFloat(deg) * 1.8 + 32) + " F°";
const farToCel = deg => ((parseFloat(deg) - 32) / 1.8).toFixed(2) + " C°";

ex(4);
show(celToFar(30.5));
show(farToCel(30.5));

/**
 * Ejercicio Nº5
 * Crear una función que muestre por consola la fecha y hora con el siguiente formato:
 * Hoy es : Miercoles
 * Hora actual: 10:34
 */

const showDate = () => {
    const date = new Date();
    show("Hoy es : " + date.toLocaleDateString('es-ar', { weekday: 'long' }));
    show("Hora actual : " + date.getHours() + ":" + date.getMinutes());
}

ex(5);
showDate();