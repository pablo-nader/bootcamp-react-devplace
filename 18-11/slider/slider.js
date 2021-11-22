const slides = Array.from(document.getElementsByClassName('slide'));
const max = slides.length;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

const go = (n) => {
    for (let i = 0; i < max; i ++) {
        slides[i].classList.add('visible');
    }
    index += n;

    if (index < 0) index = (max-1);
    else if (index > (max-1)) index = 0;

    console.log(index);
    console.log(max);
    slides[index].classList.remove('visible');
}

for (let i = 0; i < max; i ++) {
    slides[i].classList.toggle('visible');
}

prev.addEventListener('click', function () {
    go(-1);
});

next.addEventListener('click', function () {
    go(1);
});

