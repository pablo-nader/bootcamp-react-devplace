// const show = console.log;

// /**
//  * Ejercicio Nº1
//  * Escribe una función que sume que calcule la suma de dígitos 
//  * de un número entero es decir la suma de todos sus dígitos.
//  * Ejemplo: suma de dígitos (192) debería devolver 12 (1+9+2)
//  */

// const sumDigit = (n1, n2) => {
//     const sum = (p, c) => parseInt(p) + parseInt(c);

//     let digit1 = n1.toString().split('');
//     let digit2 = n2.toString().split('');
//     let total = digit1.reduce(sum) + digit2.reduce(sum);
    
//     return total;
// }

// show(sumDigit(15, 235));

// /** 
//  * Ejercicio Nº2
//  * Escriba una función que tome un string con una suma y 
//  * devuelva su resultado como un número.
//  * Deben sumarse dos números naturales(numeros enteros). 
//  * La tarea de suma es una cadena de la forma '102 + 17'.
//  */

// const sumStr = (str) => {
//     const parseNum = (string, index) => parseInt(string.split('+')[index].replace('/ /g', ''));
    
//     return parseNum(str, 0) + parseNum(str, 1);
// }

// show(sumStr("102 + 17"));

// /**
//  * Ejercicio Nº3
//  * Escribir una función que genere un numero random y 
//  * pregunte por prompt "Adivina un numero del 1 al 10"
//  * hasta que acierte y muestre "Adivinaste el numero"
//  */

// const isCorrect = (rand) => {
//     let value = prompt("Igresá un número a ver si adivinás");

//     if (value != rand) {
//         alert("Seguí participando...")
//         isCorrect(rand);
//     }
//     return true;
// }

// const quiz = () => {
//     let n = Math.floor(Math.random() * (10 - 1)) + 1;

//     if (isCorrect(n)) {
//         alert("¡¡Acertaste!!");
//     }
// }

// quiz();
let a = 0;
do {
    console.log(a);
    a++;
} while (a<10) {
    console.log("dentro del while");
}