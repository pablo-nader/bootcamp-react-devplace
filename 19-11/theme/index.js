const switcher = document.querySelector('.switcher');

switcher.addEventListener('click', function () {
    document.querySelector('body').classList.toggle('dark');
    if (switcher.innerHTML == "Dark Mode") switcher.innerHTML = "Light Mode";
    else switcher.innerHTML = "Dark Mode";
});