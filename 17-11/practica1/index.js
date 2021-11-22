const playButton = document.querySelector("#play-pause");
const likeButton = document.querySelector("#like");

playButton.addEventListener('click', function () {
    if (playButton.classList.contains('fa-play-circle')) {
        playButton.classList.remove('fa-play-circle');
        playButton.classList.add('fa-pause-circle');
    } else {
        playButton.classList.remove('fa-pause-circle');
        playButton.classList.add('fa-play-circle');
    }
});

likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('red');
});