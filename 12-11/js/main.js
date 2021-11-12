const show = console.log;
let arr = [];
let str = "";

/**
 * 1-
 * arr = [1,3,4,2,6,7,9,1, 8]
 * Crear una función que indique el total de elementos impares de un array
 * output => 5
 */ 

arr = [1, 3, 4, 2, 6, 7, 9, 1, 8];
const countOdd = arr => arr.filter(e => (e % 2 != 0)).length;

show(countOdd(arr));
/**
 * 2-
 * str = "hola mundo desde javascript"
 * pasar un string en array, reemplazar los espacios en blanco por "-"
 * output => ["hola", "-", "mundo", "-", "desde", "-", "javascript"]
 */

str = "hola mundo desde javascript";
const noSpace = str => str.replace(/ /g, " - ").split(' ');

show(noSpace(str));

/**
 * 3-
 * Crear una variable que contenga el siguiente array :
 *  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * Definir una variable filtered que muestre los valores de los los numeros que son 
 * pares utilizando el método .filter()
 */

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const returnEven = arr => arr.filter(e => (e % 2 == 0));

show(returnEven(arr));


/**
 * 4- 
 * Crear una variable que filtre los animales que no sean 'cat' usar filte
 * const pets = ['cat', 'dog', 'elephant','hawk','snake','cat']
 */

arr = ['cat', 'dog', 'elephant','hawk','snake','cat'];
const filterCat = arr => arr.filter(e => (e != 'cat'));

show(filterCat(arr));

/**
 * 5- 
 * Crear una variable que muestre solo los nombres de los productos del 
 * siguiente array hacerlo con .map
 * const productos = [
    {id:2, nombre: 'Remera muy fachera', precio:250},
    {id:5, nombre: 'Pantalon muy fachero', precio:400},
    {id:6, nombre: 'Camperon invierno', precio:699},
    {id:34, nombre: 'Guantes negros', precio:199},
   ];
 */

arr  = [
    {id:2, nombre: 'Remera muy fachera', precio:250},
    {id:5, nombre: 'Pantalon muy fachero', precio:400},
    {id:6, nombre: 'Camperon invierno', precio:699},
    {id:34, nombre: 'Guantes negros', precio:199},
];
const showName = obj => obj.map(e => e.nombre);

show(showName(arr));

/**
 * 6-  
 * Usando el reduce retornar un solo array. pista: .concat
 * const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
 */

arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const joinArrays = arr => arr.reduce((p, c) => p.concat(c));

show(joinArrays(arr));