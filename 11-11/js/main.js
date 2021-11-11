const show = console.log;
/**
 * 1-
 * str = "origin"
 * cambiar las vocales por el numero 1
 * output => 1r1g1n
 */

const vowelToOne = str => str.replace(/[aeiou]/gi, "1");

show(vowelToOne("origin"));


/**
 * 2-
 * Crear una función que acepte un parámetro con los valores desde 1 hasta 5
 * si valor numérico ingresado es 1 mostrar una lista del 1 al 10, 
 * si es 2 mostrar del 2 al 10,
 * teniendo en cuenta el limite es 10
 * posibles salidas esperadas:
 * output => 1...10
 * output => 2...10
 * output => 3...10
 * output => 4...10
 * output => 5...10
 */

const loop = n => {
    if (n >= 1 && n <= 5) {
        for (n; n <= 10; n++) {
            show(n);
        }
    } else {
        show("El valor ingresado está fuera del rango");
    }
}

loop(2);

/**
 * 3-
 * arr = [10, "20", 30, "40", 50]
 * verificar cada elemento sea de  tipo number y sino lo es cambiar su  tipo
 * a number
 * output => [10, 20, 30, 40, 50]
 */
let arr = [10, "20", 30, "40", 50];

const numberCast = array => array.map(e => Number(e));

show(numberCast(arr));

/**
 * 4-
 * arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"]
 * eliminar los elementos repetidos, nota: (el segundo elemento repetido)
 * output => [2, 4, 7, 1,  "foo", "bar", "qux", 3]
 */

let arr2 = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"];

const filter = array => [...new Set(array)];

show(filter(arr2));