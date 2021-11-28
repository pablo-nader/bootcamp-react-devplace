const menu = document.querySelector('.menu');
const items = document.querySelector('.menu-links');

menu.addEventListener('click', function() {
    menu.classList.toggle('times');
    items.classList.toggle('visible');
});