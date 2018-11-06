
var $div = document.querySelector('div');
var $player = document.querySelector('img');
var $stopMoving = document.querySelector('input')




function movePlayer(event) {
    // var playerElementDisplacement=$player.width/2

    $player.style.top = (event.clientY - 75) + 'px';
    $player.style.left = (event.clientX - 75) + 'px';
}


$div.addEventListener('click', movePlayer);


function stopMoving() {
    $div.removeEventListener('click', movePlayer);
}