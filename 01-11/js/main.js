/**
 * Realizar un script llamado Ejercicio1.js que declare una variable, 
 * se le asigne tu nombre como valor y lo muestre por consola.
 */

function ejercicio1() {
    let miNombre = "Pablo";

    console.log("---------- Ejercicio 1 ----------");
    console.log("Mi nombre es: " + miNombre);
}

/**
 * Realizar un script llamado Ejercicio2.js que declare dos variables, 
 * se les asigne tu nombre y apellido como valor y los muestre por consola.
 */

function ejercicio2() {
    let miNombre = "Pablo";
    let miApellido = "Nader";

    console.log("---------- Ejercicio 2 ----------");
    console.log("Mi Nombre Completo es: " + miNombre + " " + miApellido);
}

/**
 * Realizar un script llamado Ejercicio3.js que muestre tu nombre y apellido con el
 * siguiente formato: “Mi nombre es ….. y mi apellido es ….”
 */

function ejercicio3() {
    let miNombre = "Pablo";
    let miApellido = "Nader";

    console.log("---------- Ejercicio 3 ----------");
    console.log("Mi nombre es " + miNombre + " y mi apellido es " + miApellido);
}

/**
 * Realizar un script llamado Ejercicio4.js que declare dos variables, 
 * les asigne un valor a cada una y las sume. 
 * El resultado se debe mostrar por consola con el siguiente formato: 
 * “El resultado de la suma es: “
 */

function ejercicio4() {
    let num1 = 25;
    let num2 = 435;

    console.log("---------- Ejercicio 4 ----------");
    console.log("El resultado de la suma (25+435) es: " + (num1+num2));
}

/**
 * Realizar un script llamado Ejercicio5.js que declare tres variables, 
 * les asigne un valor a cada una y las reste. 
 * El resultado se debe mostrar por consola con el siguiente formato: 
 * “El resultado de la resta es: “
 */

function ejercicio5() {
    let num1 = 205;
    let num2 = 435;
    let num3 = -98;

    console.log("---------- Ejercicio 5 ----------");
    console.log("El resultado de la resta (205-435-(-98)) es: " + (num1-num2-num3));
}

/**
 * Realizar un script llamado Ejercicio6.js que solicite tu nombre por Promp 
 * y lo muestre por consola.
 */

function ejercicio6() {
    let nombre = prompt("Ingresá tu nombre: ");

    console.log("---------- Ejercicio 6 ----------");
    console.log("El nombre ingresado es: " + nombre);
}

/**
 * Realizar un script llamado Ejercicio7.js que solicite tu nombre 
 * y tu apellido por Promp y lo muestre por consola con el siguiente formato: 
 * “Mi nombre es ….. y mi apellido es ….”.
 */

function ejercicio7() {
    let nombre = prompt("Ingresá tu nombre: ");
    let apellido = prompt("Ingresá tu apellido: ");

    console.log("---------- Ejercicio 7 ----------");
    console.log("El nombre ingresado es " + nombre + " y el apellido ingresado es " + apellido);
}

/**
 * Realizar un script llamado Ejercicio8.js que solicite dos valores por Promp 
 * y muestre el de mayor valor con el siguiente formato: “El mayor valor es: “
 */

function ejercicio8() {
    let num1 = prompt("Ingresá un número: ");
    let num2 = prompt("Ingresá otro número: ");

    let mayor = (parseFloat(num1) > parseFloat(num2)) ? num1 : num2;

    console.log("---------- Ejercicio 8 ----------");
    console.log("El número mayor entre (" + num1 + " y " + num2 + ") es: " + mayor);
}

/**
 * Realizar un script llamado Ejercicio9.js que solicite dos valores por Promp 
 * y muestre el de menor valor con el siguiente formato: “El menor valor es: “
 */

function ejercicio9() {
    let num1 = prompt("Ingresá un número: ");
    let num2 = prompt("Ingresá otro número: ");

    let menor = (parseFloat(num1) < parseFloat(num2)) ? num1 : num2;

    console.log("---------- Ejercicio 9 ----------");
    console.log("El número menor entre (" + num1 + " y " + num2 + ") es: " + menor);
}

/**
 * Realizar un script llamado Ejercicio10.js que solicite dos valores por Promp 
 * y muestre el promedio de ambos con el siguiente formato: 
 * “El promedio entre …. Y ….. es: “
 */

 function ejercicio10() {
    let num1 = prompt("Ingresá un número: ");
    let num2 = prompt("Ingresá otro número: ");

    let promedio = ((parseFloat(num1) + parseFloat(num2)))/2;

    console.log("---------- Ejercicio 10 ----------");
    console.log("El promedio entre (" + num1 + " y " + num2 + ") es: " + promedio);
}

/**
 * Realizar un script que llamado Ejercicio11.js que declare una variable 
 * le asigne un valor y lo sume 50 veces (Usar algún bucle).
 */

function ejercicio11() {
    let num = parseFloat(prompt("Ingresá un número: "));
    let res = 0;

    for (let i = 0; i < 50; i++) {
        res += num;
    }

    console.log("---------- Ejercicio 11 ----------");
    console.log("El número ingresado, sumado 50 veces es: " + res);
}

/**
 * Realizar un script llamado Ejercicio12.js que declare una variable, 
 * le asigne un valor y solicite por Promp cuantas veces lo desea sumar. 
 * Luego mostrar dicha suma por pantalla. (Usar algún bucle).
 */

function ejercicio12() {
    let num = 168;
    let limit = parseInt(prompt("Ingresá las veces a sumar: "));
    let res = 0;

    for (let i = 0; i < limit; i++) {
        res += num;
    }

    console.log("---------- Ejercicio 12 ----------");
    console.log("El número 168, sumado " + limit + " veces es: " + res);
}

/**
 * Realizar un script llamado Ejercicio13.js 
 * que muestre los números pares del 1 al 20.
 */

function ejercicio13() {
    console.log("---------- Ejercicio 13 ----------");

    for (let i = 1; i <=20; i++) {
        if (i % 2 == 0) {
            console.log("El número " + i + " es par");
        }
    }    
}

/**
 * Realizar un script llamado Ejercicio14.js 
 * que muestre los números impares del 1 al 20.
 */

function ejercicio14() {
    console.log("---------- Ejercicio 14 ----------");

    for (let i = 1; i <=20; i++) {
        if (i % 2 != 0) {
            console.log("El número " + i + " es impar");
        }
    }    
}

/**
 * Realizar un script llamado Ejercicio15.js, 
 * que solicite 3 valores por Promp, y los
 * muestre ordenados de menor a mayor.
 */

function ejercicio15() {
    let nums = [];
    nums[0] = parseFloat(prompt("Ingresá el primer número: "));
    nums[1] = parseFloat(prompt("Ingresá el segundo número: "));
    nums[2] = parseFloat(prompt("Ingresá el tercer número: "));

    console.log("---------- Ejercicio 15 ----------");
    console.log("Los números que ingresaste son: " + nums);
    console.log("El orden es: " + nums.sort(function(a, b) { return a - b }));
}
        