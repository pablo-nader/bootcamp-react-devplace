// 1.
// Crear un boton que al ser clickeado muestre/oculte un elemento (toggle)
    const toggleButton = document.querySelector('#toggleButton');

    toggleButton.addEventListener('click', function () {
        document.getElementById('toggleText').classList.toggle('toggle');
    });
// 2.
// Crear un <ul>.
// Crear un input
// Crear un li con el valor del input 
// (como si fueran notas que vas agregando)
    const listInput = document.querySelector("#listInput");
    const listButton = document.querySelector("#listButton");
    const ul = document.querySelector("#list");

    listButton.addEventListener('click', function () {
        let li = document.createElement('li');
        li.innerHTML = listInput.value;

        ul.appendChild(li);
    });

// 3.
// Usando new Date() insertar en el html el año actual junto a un saludo
    setTimeout(() => {
        let date = new Date();
        let div = document.createElement('div');
        div.innerText = "Bienvenid@, estás en el año: " + date.getFullYear();

        document.body.before(div);
    }, 5000);

// 4.
// Crear un contenedor de 400x400 con 2 botones.
// Al ser clickeado el contenedor debe cambiar el background a rojo
// Cada boton debe estar dentro del contenedor 
// y al clickear dar un console.log('boton 1/2 se ejecuto')

const changeBackground = () => {
    let div =document.querySelector(".redContainer");
    div.style.background = 'red';
}

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");

button1.addEventListener('click', function () {
    changeBackground();
    console.log("Se ejecutó el botón 1");
});
button2.addEventListener('click', function () {
    changeBackground();
    console.log("Se ejecutó el botón 2");
});


// 5.
// Crear un form completamente desde javascript
// para insertar en nuestro html

let formButton = document.querySelector("#formCreate");

formButton.addEventListener('click', function () {
    const form = document.createElement('form');
    let label, input, button;

    for (let i = 0; i < 5; i++) {
        label = document.createElement('label');
        label.innerText = "Label " + (i + 1);
        input = document.createElement('input');
        input.type = "text";
        input.placeholder = "Input " + (i + 1);
        form.appendChild(label);
        form.appendChild(input);
    }
    button = document.createElement('button');
    button.innerHTML = 'Enviar Formulario';

    form.appendChild(button);
    document.querySelector("#formContainer").appendChild(form);
});