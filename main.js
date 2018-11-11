var $div = document.querySelector('div');
var $marioFix = document.querySelector('.mario-fix')
var $body = document.querySelector('body')
var intervalID;

console.log($body, $marioFix, $div)

$body.addEventListener('keydown', moveRight);
$body.addEventListener('keyup', stopMoving);


function moveBackgroundPosition(event) {
    $div.style.backgroundPosition = $div.style.backgroundPosition || 0;
    var position = parseInt($div.style.backgroundPosition);
    position -= 5;
    $div.style.backgroundPosition = position + 'px';
}

function moveRight(event) {
    if (event.keyCode === 39 && !intervalID) {
        $marioFix.src = "./images/mario_running.gif";
        intervalID = setInterval(moveBackgroundPosition, 10);
    }
}

function stopMoving(event) {
    if (event.keyCode === 39) {
        $marioFix.src = './images/mario.png';
        clearInterval(intervalID);
        intervalID = null;
    }
}

