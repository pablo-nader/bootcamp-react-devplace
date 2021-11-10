const show = console.log;

/**
 * =======================================
 * NRO-1
 * crear 5 variables con el nombre que usted
 * vea necesario, las variables a implementar son las siguiente:
 * 1 variable de tipo numerico
 * 1 variable de tipo cadena
 * 1 variable de tipo array vacio
 * 1 variable de tipo array de 3 elementos contando desde el 0
 * 1 variable de tipo objecto literal vacio
 * output => 10, "", [], [10,true, "foo"], {}
 * =======================================
 */

function ex1() {
    let num = 10;
    let str = "";
    let emptyArr = [];
    let arr = [10, true, "foo"];
    let obj = {};
    show(num, str, emptyArr, arr, obj);
}

/**
 * NRO-2
 * implementar una variable con un nombre y mostrarla
 * por la terminal/consola
 * output => "smith" //es un valor de ejemplo
=======================================
 */

function ex2() {
    let name = "Un nombre para mostrar";
    show(name);
}

/**
 * NRO-3
 * desarrollar un script que contenga 2 variables
 * de tipo numero y sumarlas, mostrar el valor total de
 * la suma
 * output => n  //representa un valor de ejemplo
=======================================
 */

function ex3() {
    let num1 = 25;
    let num2 = 38;
    show(num1 + num2);
}

/**
 * NRO-4
 * definir una funcion llamada mostrarNombre
 * que muestre un nombre definido por usted por la consola
 * output => "smith"
 * =======================================
 * 
 */

function ex4() {
    function mostrarNombre() {
        show("Un nombre para mostrar");
    }
    mostrarNombre();
}

/**
 * NRO-5
 * armar una funcion llamada mostrarNombre(nombre)
 * que reciba un nombre por parametro y lo muestre
 * por consola
 * output => "smith"
 * =======================================
 */

function ex5() {
    function mostrarNombre(name) {
        show(name);
    }
    mostrarNombre("Un nombre para mostrar");
}

/**
 * NRO-6
 * se tiene una variable llamada datos="foo"
 * la cual se debe mostrar por consola en mayuscula
 * output => "FOO"
 * =======================================
 * 
 */

function ex6() {
    let datos = "foo";
    show(datos.toUpperCase());
}

/**
 * NRO-7
 * se tiene una variable llamada datos="FOO"
 * la cual se debe mostrar por consola en minuscula
 * output => "foo"
 * =======================================
 * 
 */

function ex7() {
    let datos = "FOO";
    show(datos.toLowerCase());
}

/**
 * NRO-8
 * tienes que crear una variable llamada info="lorem ipsum scammer"
 * para mostrar en consola como un array de 3 elementos
 * output => ["lorem", "ipsum", "scammer"]
 * =======================================
 */

function ex8() {
    let info = "lorem ipsum scammer";
    let arr = info.split(" ");
    show(arr);
}

/**
 * NRO-9
 * con el siguiente array ["lorem", "ipsum", "scammer"] se debe mostrar
 * en consola como un unico string/cadena
 * output => "lorem ipsum scammer"
 * =======================================
 */

function ex9() {
    let arr = ["lorem", "ipsum", "scammer"];
    let info = arr.join(" ");
    show(info);
}

/**
 * NRO-10
 * con el siguiente array ["lorem", "ipsum", "scammer"] debes mostrar
 * solo el elemento de la posicion 0
 * output => "lorem"
 * =======================================
 */

function ex10() {
    let arr = ["lorem", "ipsum", "scammer"];
    show(arr[0]);
}

/**
 * NRO-11
 * al siguiente array  ["lorem", "ipsum", "scammer"] debes añadirle
 * un elemento llamado "simply"
 * output => ["lorem", "ipsum", "scammer", "simply"]
 * =======================================
 */

function ex11() {
    let arr = ["lorem", "ipsum", "scammer"];
    arr.push("simply");
    show(arr);
}

/**
 * NRO-12
 * debes quitar el primer elemento de este array ["lorem", "ipsum", "scammer", "simply"]
 * output => ["ipsum", "scammer", "simply"]
 * =======================================
 */

function ex12() {
    let arr = ["lorem", "ipsum", "scammer", "simply"];
    arr.shift();
    show(arr);
}

/**
 * NRO-13
 * mostrar por consola cuantos elementos tiene este array
 * ["lorem", "ipsum", "scammer", "simply", "sit", "amet", "laboris", "nisi"]
 * output => mostrar resultado
 * =======================================
 */

function ex13() {
    let arr = ["lorem", "ipsum", "scammer", "simply", "sit", "amet", "laboris", "nisi"];
    show(arr.length);
}

/**
 * NRO-14
 * buscar en este array ["lorem", "ipsum", "scammer", "simply", "laboris", "sit", "amet", "laboris"]
 * cuales elementos tienen el valor de "laboris" y convertirlos a mayuscula
 * output => ["lorem", "ipsum", "scammer", "simply", "LABORIS", "sit", "amet", "LABORIS"]
 * =======================================
 */

function ex14() {
    let arr = ["lorem", "ipsum", "scammer", "simply", "laboris", "sit", "amet", "laboris"];

    arr.forEach((e, i) => {
        if (e == "laboris") arr[i] = e.toUpperCase();
    })

    show(arr);
}

/**
 * NRO-15
 * determinar si el valor de foo="qux" es de valor par o impar
 * ouput => mostrar resultado
 * =======================================
 */

function ex15() {
   // ???
}

/**
 * NRO-16
 * crear una condicion que permita validar si la variable A es mayor que la variable B
 * mostrar true si es mayor o false si es menor
 * A = 100
 * B = 200
 * output => true || false
 * =======================================
 */

function ex16() {
    let a = 100;
    let b = 200;
    show (a > b ? true : false);
}

/**
 * NRO-17
 * mediante un switch verificar si una persona es mayor de edad,
 * teniendo en cuenta, que una persona es mayor de edad, cuando la edad es igual o mayor a
 * 21 años
 * edad = 20
 * output => true || false
 * =======================================
 */

function ex17() {
    let edad = 25;
    switch (edad > 20) {
        case true: show(true); break;
        case false: show(false); break;
    }
}

/**
 * NRO-18
 * de este array ["lorem", "ipsum", "lorem", "scammer", "simply", "laboris", "sit", "amet", "laboris"]
 * eliminar los valores repetidos
 * output => ["lorem", "ipsum", "scammer", "simply", "laboris", "sit", "amet"]
 * =======================================
 */

function ex18() {
    let arr = ["lorem", "ipsum", "lorem", "scammer", "simply", "laboris", "sit", "amet", "laboris"];
    const temp = new Set(arr);
    arr = [...temp];
    show(arr);
}

/**
 * NRO-19
 * verificar el tamaño de cada elemento del
 * array ["lorem", "ipsum", "scammer", "simply", "laboris", "sit", "amet"]
 * output => [n, n, n, n, n, n, n] //n representa un valor numerico
 * =======================================
 */

function ex19() {
    let arr = ["lorem", "ipsum", "scammer", "simply", "laboris", "sit", "amet"];

    let arrCount = arr.map(e => e.length);

    show(arrCount);
}

/**
 * NRO-20
 * se tiene una variable string llamada reporte="lorem ipsum scammer simply laboris sit amet"
 * se desea lo siguiente:
 * 1 sustituir todas las letras "a" por "x"
 * 2 mutar las vocales que no sean "a" en mayuscula
 * 3 mutar la primera letra del string en mayuscula
 * 4 cambiar la ultima letra del string por un "@"
 * 5 adicional contar el total de vocales que existe en elstring y mostrar el valor
 * output => "LOrEm IpsUm scxmmEr sImply lxbOrIs sIt xmE@"
 * output => total de vocales n // n es un valor numerico que reprensenta el total
 * =======================================
 */

function ex20() {
    let reporte = "lorem ipsum scammer simply laboris sit amet";
    
    reporte = reporte.replace(/a/g, "x")
                    //  .replace(/e/g, "E")
                    //  .replace(/i/g, "I")
                    //  .replace(/o/g, "O")
                    //  .replace(/u/g, "U");
    reporte = reporte.replace(/[eiou]/g, (match) => match.toUpperCase());

    reporte = reporte.charAt(0).toUpperCase() + reporte.slice(1, -1) + "@";

    var vocales = reporte.match(/[aeiou]/gi).length;
    
    show(reporte, vocales);
}